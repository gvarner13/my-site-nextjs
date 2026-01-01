import NoiseBackground from "../../components/ui/background-noise";
import Navbar from "../../components/ui/navbar";
import BlogPost from "../../components/ui/blog-post";
import { getAllPosts } from "../../lib/blog";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1">
        <Navbar />
        <h1 className="text-4xl font-semibold text-white">Blog</h1>
        <p className="mt-3 text-base text-gray-300 max-w-xl">
          Notes on travel, creativity, and building for the web.
        </p>
        <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <BlogPost key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
