import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "app", "blog", "posts");

function normalizeFrontMatter(data, slug) {
  return {
    title: data.title || slug,
    date: data.date || "",
    readTime: data.readTime || "",
    description: data.description || "",
  };
}

export async function getPostSlugs() {
  const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
    .map((entry) => entry.name.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    frontMatter: normalizeFrontMatter(data, slug),
    content,
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      return {
        slug,
        href: `/blog/${slug}`,
        ...post.frontMatter,
      };
    })
  );

  return posts.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
