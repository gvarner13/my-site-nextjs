"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import NoiseBackground from "../../components/ui/background-noise";

const projects = [
  { name: "Project 1", description: "Description 1", image: "image1.jpg" },
  { name: "Project 2", description: "Description 2", image: "image2.jpg" },
  { name: "Project 3", description: "Description 3", image: "image3.jpg" },
];

export default function Projects() {
  return (
    <div>
      <NoiseBackground />
      <div className="grid grid-cols-4 gap-4">
        {projects.map((project) => (
          <div className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {project.name}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Buy now </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                $100
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
