"use client";
import { useEffect, useState } from "react";

type InstagramPost = {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Instagram Data:", data); // Debugging response
        setPosts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img src={post.media_url} alt={post.caption || "Instagram post"} className="w-full h-60 object-cover" />
            </a>
            <div className="p-4">
              <p className="text-gray-800 text-sm">{post.caption?.slice(0, 100)}...</p>
              <a href={post.permalink} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm mt-2 block">
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
