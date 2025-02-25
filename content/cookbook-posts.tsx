import Link from "next/link";
import { getCookbookPosts } from "@/lib/getCookbookPosts";
import { Button } from "@/components/button";

export function CookbookPosts() {
  const allPosts = getCookbookPosts({ includeDrafts: false });

  return (
    <div className="flex flex-col">
      {Object.entries(
        allPosts
          .sort((a, b) => {
            if (a.metadata.position < b.metadata.position) {
              return -1;
            }
            return 1;
          })
          .reduce(
            (acc, post) => {
              const tag = post.metadata.tag;
              if (tag) {
                if (!acc[tag]) acc[tag] = [];
                acc[tag].push(post);
              }
              return acc;
            },
            {} as Record<string, typeof allPosts>,
          ),
      ).map(([tag, posts]) => (
        <div key={tag}>
          {posts.map((post) => (
            <div key={post.slug} className="mb-4">
              <Link
                className="flex items-center"
                href={`/cookbook/${post.slug}`}
              >
                <div className="w-full flex flex-col justify left md:flex-row space-x-0 md:space-x-2 lg:min-w-xl">
                  <span className="w-[150px] tabular-nums">{post.metadata.title}</span>
                  <span className="w-[300px] text-muted-foreground">
                    {post.metadata.subtitle}
                  </span>
                  <Button
                    className="w-18"
                    variant="tag"
                    size="tag"
                  >
                    {tag.toUpperCase()}
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
