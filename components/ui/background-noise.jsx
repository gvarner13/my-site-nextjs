"use client";

import { useEffect, useRef } from "react";
import {
  Application,
  Graphics,
  Particle,
  ParticleContainer,
  BlurFilter,
} from "pixi.js";
import { createNoise3D } from "simplex-noise";

/**
 * NoiseBackground
 *
 * A full-bleed, animated background using PixiJS + simplex-noise.
 * JS only (no TypeScript). Tailwind v4 utilities for layout.
 *
 * Props
 * - colors: [startHex, endHex] gradient across the field
 * - speed: animation speed scalar
 * - spacing: distance between flow-field lines (in CSS px)
 * - lineWidth: stroke width of each line
 * - intensity: how far each line segment extends
 * - className: extra tailwind classes (container already fixed/inset-0)
 */

// let w = window.innerWidth;
// let h = window.innerHeight;

const SCALE = 200;
const LENGTH = 5;
const SPACING = 15;

const noise3d = createNoise3D();

function getForceOnPoint(x, y, z) {
  return (noise3d(x / SCALE, y / SCALE, z) - 0.5) * 2 * Math.PI;
}

function createDotTexture(app) {
  // const g = new Graphics().circle(0, 0, 1).fill(0xcccccc);
  const g = new Graphics().rect(0, 0, 5, 1).fill(0xcccccc);
  return app.renderer.generateTexture(g);
}

export default function NoiseBackground() {
  const containerRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const existingPoints = new Set();
    const points = [];

    async function setup() {
      const container = containerRef.current;
      if (!container) return;

      // Create Pixi app with transparent background
      const app = new Application();
      await app.init({
        background: "#FFFFFF",
        antialias: true,
        resolution: window.devicePixelRatio,
        resizeTo: container,
        eventMode: "none",
        autoDensity: true,
      });
      appRef.current = app;
      container.appendChild(app.canvas);

      let w = app.renderer.width;
      let h = app.renderer.height;

      function addPoints({ dotTexture, particleContainer }) {
        for (let x = -SPACING / 2; x < w + SPACING; x += SPACING) {
          for (let y = -SPACING / 2; y < h + SPACING; y += SPACING) {
            const id = `${x}-${y}`;
            if (existingPoints.has(id)) continue;
            existingPoints.add(id);

            const particle = new Particle(dotTexture);
            particle.anchorX = 0.5;
            particle.anchorY = 0.5;
            particleContainer.addParticle(particle);

            const opacity = Math.random() * 0.5 + 0.5;
            points.push({ x, y, opacity, particle });
          }
        }
      }

      const particleContainer = new ParticleContainer({
        dynamicProperties: { position: true, alpha: true },
      });
      app.stage.addChild(particleContainer);

      const dotTexture = createDotTexture(app);
      addPoints({ dotTexture, particleContainer });

      app.ticker.add(() => {
        const t = Date.now() / 10000;

        for (const p of points) {
          const { x, y, opacity, particle } = p;
          const rad = getForceOnPoint(x, y, t);
          const len = (noise3d(x / SCALE, y / SCALE, t * 2) + 0.5) * LENGTH;
          const nx = x + Math.cos(rad) * len;
          const ny = y + Math.sin(rad) * len;

          particle.x = nx;
          particle.y = ny;
          particle.alpha = (Math.abs(Math.cos(rad)) * 0.8 + 0.2) * opacity;
        }
      });
      addPoints({ dotTexture, particleContainer });
    }
    setup();

    return () => {
      const app = appRef.current;
      if (app) {
        app.destroy(true, { children: true });
        appRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`fixed inset-0 -z-10 pointer-events-none dark:invert`}
    />
  );
}
