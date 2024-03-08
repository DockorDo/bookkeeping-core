import styled from '@emotion/styled'

const Container = styled.header`
  color: ${prop=> prop.color};
`
function App() {
  return ( <Container color="blue">This my button component.</Container>)
}
export default App;