 import { useEffect } from 'react';
import { usePostStore } from '../store/usePostStore';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { posts, fetchPosts, courseFilter } = usePostStore();

  useEffect(() => {
    fetchPosts(courseFilter);
  }, [courseFilter]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Actividades</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id} className="mb-2">
            <Link to={`/post/${post._id}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 