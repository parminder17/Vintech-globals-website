import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      // .from('posts') - ensure tuhade table da naam 'posts' hai
      const { data, error } = await supabase.from('posts').select('*');
      
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No posts found. Add some in Supabase!</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.content}</p>
              <small className="text-gray-400">
                {new Date(post.created_at).toLocaleDateString()}
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}