"use client";

import Link from "next/link";
import { useEffect } from "react";
import NoiseBackground from "../components/ui/background-noise";
import Navbar from "../components/ui/navbar";

export default function Home() {
  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[new Date().getDay()];
    console.log(
      `Welcome to my site and hopefully this ${currentDay} is going good for you.`
    );
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1 text-center">
        {/* Nav section */}
        <Navbar />
        <div className="mt-20 text-left px-4 max-w-2xl [&_a]:hover:underline [&_a]:decoration-pink-500 [&_a]:underline-offset-4 [&_a]:dark:text-gray-100 [&_a]:font-semibold">
          <p className="dark:text-gray-300 py-4">
            Hey! I’m Gary Varner, an obsessed tinkerer with crazy ideas and good
            espresso.
          </p>
          <p className="dark:text-gray-300 py-4">
            Hi, I am an Atlanta based typescript developer. I love to build
            software that solves problems for people. I am trying to list my
            hairbrain <Link href="/projects">projects</Link> here.
          </p>
          <p className="dark:text-gray-300 py-4">
            I am also a fan of traveling the globe, camping, and the occasional
            round of golf. You can see some of my <Link href="/travels">travels</Link>{" "}
            here. I also have some of my <Link href="/photos">photos here</Link> for
            your viewing pleasure.
          </p>
        </div>
      </main>
      {/* <footer className="w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(226 232 240 / 50)"
            fillOpacity="1"
            d="M0,64L18.5,64C36.9,64,74,64,111,90.7C147.7,117,185,171,222,202.7C258.5,235,295,245,332,234.7C369.2,224,406,192,443,197.3C480,203,517,245,554,234.7C590.8,224,628,160,665,160C701.5,160,738,224,775,261.3C812.3,299,849,309,886,277.3C923.1,245,960,171,997,165.3C1033.8,160,1071,224,1108,245.3C1144.6,267,1182,245,1218,224C1255.4,203,1292,181,1329,192C1366.2,203,1403,245,1422,266.7L1440,288L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </footer> */}
    </div>
  );
}
