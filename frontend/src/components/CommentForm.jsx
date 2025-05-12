import { useState } from 'react'
import styled from 'styled-components'

function CommentForm({ postId, onCommentAdded }) {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (name.trim().length === 0 || content.trim().length === 0) {
      return setError('Todos los campos son obligatorios')
    }
    if (name.length > 18) {
      return setError('El nombre no puede tener más de 18 caracteres')
    }
    if (content.length > 100) {
      return setError('El comentario no puede tener más de 100 caracteres')
    }

    setError('');

    try {
      const res = await fetch('http://localhost:2636/v1/comment/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, content, postId: postId }),
      })

      const data = await res.json()
      if (res.ok) {
        onCommentAdded(data.comment)
        setName('')
        setContent('')
      } else {
        setError(data.message || 'Error al guardar el comentario')
      }
    } catch (err) {
      setError('Error al conectar con el servidor')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Nombre</Label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={18}
        placeholder="Máx. 18 caracteres"
      />

      <Label>Comentario</Label>
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        maxLength={100}
        placeholder="Máx. 100 caracteres"
      />

      {error && <ErrorMsg>{error}</ErrorMsg>}

      <Button type="submit">Enviar</Button>
    </Form>
  )
}

export default CommentForm;

// Styled Components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Label = styled.label`
  font-weight: 600;
`

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
`

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  resize: none;
  height: 100px;
`

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #1e40af;
  }
`

const ErrorMsg = styled.p`
  color: #dc2626;
  font-size: 0.9rem;
`

