import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black">
      <h2 className="text-2xl font-bold dark:text-white">Not Found</h2>
      <p className="mt-2 dark:text-white">Could not find requested resource</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
      >
        Return Home
      </Link>
      <blockquote className="mt-4 text-gray-400 italic">
        "The only way to do great work is to love what you do."
      </blockquote>
    </div>
  );
}
