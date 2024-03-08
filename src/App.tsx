import styled from '@emotion/styled'
import Layout from 'layouts/Layout.tsx'

const Container = styled.header`
  width: 100%;
  height: 100vh;
`

function App() {
  return ( <Container>
    <Layout></Layout>
  </Container>)
}



export default App;