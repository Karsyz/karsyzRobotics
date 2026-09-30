import React, { useEffect, useState } from "react";
import { marked } from "marked";
import Seo from "../Components/Seo";
import ImageTile from "../Components/ImageTile";

const BLOGS_API =
  "https://cdn.contentful.com/spaces/90yo4xaqjgi1/environments/master/entries?access_token=xtTWhpJqtCRgdLncDkzzUAKXDngwxNEyAosFDLT0B5U&content_type=blog&order=-sys.createdAt";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [activePostIds, setActivePostIds] = useState({});
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(BLOGS_API);
      const data = await res.json();
      setPosts(data.items);
    };
    fetchPosts();
  }, []);

  const togglePost = (id) => {
    setActivePostIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Extract the first image URL from markdown
  const getFirstImageFromMarkdown = (markdown) => {
    const regex = /!\[.*?\]\((.*?)\)/;
    const match = regex.exec(markdown);
    return match ? match[1] : null;
  };

  const getPreview = (markdown) => {
    const html = marked.parse(markdown);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > 400 ? text.slice(0, 400) + "…" : text;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Seo path="/blog" />
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="space-y-12">
        {posts.slice(0, visibleCount).map((post) => {
          const isActive = activePostIds[post.sys.id];
          const body = post.fields.body || "";
          const thumbnail = getFirstImageFromMarkdown(body);

          return (
            <div
              key={post.sys.id}
              className="border-b pb-6 transition-all duration-300 bg-white p-8 rounded-md"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {post.fields.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.sys.createdAt).toLocaleDateString()}
              </p>

              {!isActive ? (
                <>
                  {/* Show thumbnail if exists */}
                  {thumbnail && (
                    // Thumbnails are CAD renders on white: fixed 16:9 tile,
                    // shown whole (contain) on white so nothing is cut off.
                    <ImageTile
                      src={thumbnail}
                      alt="Post thumbnail"
                      fit="contain"
                      aspect="aspect-[16/9]"
                      className="mb-4 rounded-md"
                    />
                  )}
                  <p className="text-gray-700 mb-2">{getPreview(body)}</p>
                  <button
                    onClick={() => togglePost(post.sys.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Read more
                  </button>
                </>
              ) : (
                <>
                  <div
                    className="prose max-w-none mb-2"
                    dangerouslySetInnerHTML={{ __html: marked(body) }}
                  />
                  <button
                    onClick={() => togglePost(post.sys.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Read less
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {visibleCount < posts.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 5)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Load more posts
          </button>
        </div>
      )}
    </div>
  );
}
