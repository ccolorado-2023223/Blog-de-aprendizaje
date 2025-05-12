import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { format, parseISO } from 'date-fns'
import CommentForm from './CommentForm'

function CommentsSection({ postId }) {
  const [comments, setComments] = useState([])
  const [showAll, setShowAll] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:2636/v1/comment/${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments || []))
  }, [postId])

  const formatDateTime = (iso) => {
    try {
      return format(parseISO(iso), 'dd/MM/yyyy HH:mm')
    } catch {
      return 'Fecha inválida'
    }
  }

  const displayed = showAll ? comments : comments.slice(0, 3)
  const toggleComments = () => setShowAll(!showAll)

  const handleNewComment = (c) => {
  const enriched = {
    ...c,
    createdAt: new Date().toISOString(),
  }

  setComments([enriched, ...comments])
  setShowForm(false)
}

  return (
    <Sidebar>
      <CommentList>
        <h3>Comentarios</h3>
        {displayed.map((comment, i) => (
          <CommentItem key={i}>
            <strong>Autor: {comment.name}</strong> <em>{formatDateTime(comment.createdAt)}</em>
            <p>{comment.content}</p>
          </CommentItem>
        ))}
      </CommentList>

      {comments.length > 3 && (
        <ToggleButton onClick={toggleComments}>
          {showAll ? 'Ocultar comentarios' : 'Ver más comentarios'}
        </ToggleButton>
      )}

      <AddButton onClick={() => setShowForm(true)}>Agregar comentario</AddButton>

      {showForm && (
        <Overlay onClick={() => setShowForm(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <CommentForm postId={postId} onCommentAdded={handleNewComment} />
          </Modal>
        </Overlay>
      )}
    </Sidebar>
  )
}

export default CommentsSection;



const Sidebar = styled.aside`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`

const CommentList = styled.ul`
  background: #ffffff;
  padding: 1rem;
  border-radius: 12px;
  overflow-y: auto;
  max-height: 70vh;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`

const CommentItem = styled.li`
  border-bottom: 1px solid #e2e8f0;
  padding: 0.75rem 0;
  p {
    margin: 0.5rem 0 0;
  }
`

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #3b82f6;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const AddButton = styled.button`
  align-self: center;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #1e40af;
  }
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 500px;
`
