import Link from "next/link";
import { GitIcon } from "../icons/git-icon";
import { XIcon } from "../icons/x-icon";
import { TablerCamera } from "../icons/camera-icon";
import { TablerPlaneTilt } from "../icons/plane-icon";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full mt-2 p-8">
      <div className="flex items-center">
        <div className="ml-3">
          <p className="dark:text-gray-100">GV</p>
        </div>
      </div>
      <div className="grid grid-flow-col gap-4 dark:text-gray-100">
        <Link href="/blog" className="hover:text-pink-500">
          Blog
        </Link>
        <Link href="/projects" className="hover:text-pink-500">
          Projects
        </Link>
        <a href="/photos">
          <TablerCamera className="w-5 h-5 hover:text-pink-500" />
        </a>
        <a href="/travels">
          <TablerPlaneTilt className="w-5 h-5 hover:text-pink-500" />
        </a>
        <a href="https://github.com/gvarner13">
          <GitIcon className="w-5 h-5 hover:text-pink-500" />
        </a>
        <a href="https://twitter.com/GSVarner">
          <XIcon className="w-5 h-5 hover:text-pink-500" />
        </a>
      </div>
    </div>
  );
}
