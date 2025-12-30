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
      <h1>Projects</h1>
      <div className="flex flex-col items-center">
        <div>Comming Soon</div>
      </div>
    </div>
  );
}
