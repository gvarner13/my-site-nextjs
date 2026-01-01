import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import NoiseBackground from "../../../components/ui/background-noise";
import Navbar from "../../../components/ui/navbar";
import { getPostBySlug, getPostSlugs } from "../../../lib/blog";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;

  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    notFound();
  }

  const { frontMatter, content } = post;
  const { content: mdxContent } = await compileMDX({ source: content });

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-gray-100"
      style={{ backgroundSize: "4rem 2rem" }}
    >
      <NoiseBackground />
      <main className="flex flex-col items-center w-full flex-1">
        <Navbar />
        <section className="mx-auto w-full max-w-2xl px-6 pb-16 pt-6">
          <header className="border-b border-gray-700 pb-6">
            <h1 className="text-4xl font-semibold text-white">
              {frontMatter.title}
            </h1>
            <div className="mt-3 flex items-center gap-x-4 text-sm text-gray-300">
              {frontMatter.date ? (
                <time dateTime={frontMatter.date}>{frontMatter.date}</time>
              ) : null}
              {frontMatter.readTime ? (
                <span className="rounded-full bg-gray-800/60 px-3 py-1 text-xs font-medium text-gray-300">
                  {frontMatter.readTime}
                </span>
              ) : null}
            </div>
            {frontMatter.description ? (
              <p className="mt-4 text-base text-gray-300">
                {frontMatter.description}
              </p>
            ) : null}
          </header>
          <article className="mt-8 space-y-4 text-base leading-relaxed text-gray-200">
            {mdxContent}
          </article>
        </section>
      </main>
    </div>
  );
}
