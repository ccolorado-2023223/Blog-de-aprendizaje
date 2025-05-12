import { useParams } from 'react-router-dom'
import { postsData } from '../data/posts'
import styled from 'styled-components'
import CommentsSection from '../components/CommentsSection'

function PostPage() {
  const { id } = useParams();
  const post = postsData.find((p) => p._id === id)

  return (
    <PageWrapper>
      <Container>
        <Content>
          <Title>{post.title}</Title>
          <Paragraph><strong>{post.course}</strong></Paragraph>
          <Paragraph><strong>Instrucciones:</strong> {post.instructions}</Paragraph>
          <Paragraph><strong>Descripción:</strong> {post.description}</Paragraph>
          <Image src={post.image || '/vite.svg'} alt={post.title} />
        </Content>

        <CommentsSection postId={id} />
      </Container>
    </PageWrapper>
  );
}

export default PostPage

const PageWrapper = styled.div`
  width: 79vw;
  min-height: 100vh;
  background-color: #f1f5f9;
`

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
`

const Content = styled.div`
  flex: 2;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: #1e293b;
`

const Paragraph = styled.p`
  margin: 0.75rem 0;
  color: #334155;

  strong {
    color: #0f172a;
  }
`

const Image = styled.img`
  width: 100%;
  max-height: 500px; // o ajusta este valor según tu diseño
  object-fit: contain;
  margin-top: 1rem;
  border-radius: 8px;
`