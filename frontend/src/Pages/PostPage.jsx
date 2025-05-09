import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchComments, fetchPostById, createComment } from '../services/api';

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({ name: '', content: '' });

  useEffect(() => {
    fetchPostById(id).then(res => setPost(res.data));
    fetchComments(id).then(res => setComments(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.content) return;
    await createComment({ ...form, postId: id });
    const res = await fetchComments(id);
    setComments(res.data);
    setForm({ name: '', content: '' });
  };

  const displayedComments = showAll ? comments : comments.slice(0, 3);

  return (
    <div>
      {post && (
        <div>
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="mb-4">{post.description}</p>
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold mb-2">Comentarios</h2>
        <ul className="mb-4">
          {displayedComments.map((comment) => (
            <li key={comment._id} className="border-b pb-2 mb-2">
              <strong>{comment.name}</strong>
              <p>{comment.content}</p>
            </li>
          ))}
        </ul>
        {comments.length > 3 && (
          <button onClick={() => setShowAll(!showAll)} className="text-blue-600">
            {showAll ? 'Ver menos' : 'Ver más'}
          </button>
        )}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 w-full mb-2"
            required
          />
          <textarea
            placeholder="Escribe tu comentario"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="border p-2 w-full mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Comentar
          </button>
        </form>
      </div>
    </div>
  )
}