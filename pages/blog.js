import Head from "next/head";
import NoiseBackground from "../components/ui/background-noise";
import Navbar from "../components/ui/navbar";
import BlogPost from "../components/ui/blog-post";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Blog() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <Head>
        <title>Gary Varner</title>
        <link rel="icon" href="https://fav.farm/%F0%9F%98%83" />
        <meta
          property="og:image"
          content="https://og-examples.vercel.sh/api/static"
        />
        <meta property="og:title" content="Gary Varner Site" />
      </Head>

      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1">
        <Navbar />
        <h1 className="text-4xl font-semibold text-white">Blog</h1>
        <p className="mt-3 text-base text-gray-300 max-w-xl">
          Notes on travel, creativity, and building for the web.
        </p>
        <div className="mx-auto mt-10 max-w-2xl gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <BlogPost key={post.title} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
