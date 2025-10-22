import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

const BLOGS_API =
  'https://cdn.contentful.com/spaces/90yo4xaqjgi1/environments/master/entries?access_token=xtTWhpJqtCRgdLncDkzzUAKXDngwxNEyAosFDLT0B5U&content_type=blog&order=-sys.createdAt&limit=1';

export default function BlogPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(BLOGS_API);
      const data = await res.json();
      setPost(data.items);
    };
    fetchPost();
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  const body = post?.fields?.body || '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-8 text-center">Latest from the Blog</h1>

      <div className="space-y-12">
        <div
          key={post?.sys?.id}
          className="border-b pb-6 transition-all duration-300 bg-white p-8 rounded-md"
        >
          <h2 className="text-2xl font-semibold mb-2">{post?.fields?.title}</h2>
          <p className="text-sm text-gray-500 mb-4">
            {new Date(post?.sys?.createdAt).toLocaleDateString()}
          </p>

          <div
            className="prose max-w-none mb-2"
            dangerouslySetInnerHTML={{ __html: marked(body) }}
          />
        </div>
      </div>
    </div>
  );
}
