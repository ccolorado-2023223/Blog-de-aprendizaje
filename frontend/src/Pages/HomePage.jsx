import { postsData } from '../data/posts';
import { Link } from 'react-router-dom'
import useCourseFilter from '../store/useCourseFilter'
import styled from 'styled-components'

function HomePage() {
  const { courseFilter } = useCourseFilter();
  const filteredPosts = courseFilter
    ? postsData.filter((post) => post.course === courseFilter)
    : postsData

  return (
    <Wrapper>
      <Heading>Actividades del Área Técnica</Heading>
      <Grid>
        {filteredPosts.map((post) => (
          <Card key={post._id} to={`/post/${post._id}`}>
            <Image src={post.image || '/vite.svg'} alt={post.title} />
            <Title>{post.title}</Title>
            <Description>Área: {post.course}</Description>
            <Title>Creado en: {post.date}</Title>
            <Tooltip className="tooltip">{post.description}</Tooltip>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f1f5f9;
  min-height: 100vh;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  padding: 1rem;
`
const Description = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e293b;
  padding: 1rem;
`

const Card = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background-color: #e2e8f0;
    transform: translateY(-4px);
  }

  &:hover .tooltip {
    opacity: 1;
    pointer-events: auto;
  }
`

const Tooltip = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(15, 23, 42, 0.95); /* semitransparente */
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
`