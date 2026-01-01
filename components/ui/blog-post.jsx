export default function BlogPost({ post }) {
  const hasMeta = post.date || post.readTime;

  return (
    <article
      key={post.id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      {hasMeta ? (
        <div className="flex items-center gap-x-4 text-xs">
          {post.date ? (
            <time dateTime={post.datetime || post.date} className="text-gray-400">
              {post.date}
            </time>
          ) : null}
          {post.readTime ? (
            <span className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300">
              {post.readTime}
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
          <a href={post.href}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        {post.description ? (
          <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">
            {post.description}
          </p>
        ) : null}
      </div>
      {post.author ? (
        <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
          <img
            alt=""
            src={post.author.imageUrl}
            className="size-10 rounded-full bg-gray-800"
          />
          <div className="text-sm/6">
            <p className="font-semibold text-white">
              <a href={post.author.href}>
                <span className="absolute inset-0" />
                {post.author.name}
              </a>
            </p>
            <p className="text-gray-400">{post.author.role}</p>
          </div>
        </div>
      ) : null}
    </article>
  );
}
