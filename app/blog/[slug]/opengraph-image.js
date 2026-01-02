import { ImageResponse } from "next/og";
import { getPostBySlug } from "../../../lib/blog";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const { title, description } = post.frontMatter;
  const noiseSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.08"/></svg>`;
  const noiseDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(noiseSvg)}`;

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `url("${noiseDataUrl}")`,
          backgroundRepeat: "repeat",
          color: "#ffffff",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            border: "2px solid #ffffff",
            borderRadius: "24px",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
          {description ? (
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "#d4d4d4",
                maxWidth: "900px",
              }}
            >
              {description}
            </div>
          ) : null}
        </div>
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#ffffff",
          }}
        >
          Blog
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
