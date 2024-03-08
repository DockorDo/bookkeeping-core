import styled from '@emotion/styled'
import Layout from 'layouts/Layout.tsx'

const Container = styled.header<{ bgc: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${prop=>prop.bgc};
`

function App() {
  return ( <Container bgc="yellow">
    <Layout></Layout>
  </Container>)
}



export default App;