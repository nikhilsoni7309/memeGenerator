import styled from "styled-components"
import Navbar from "./components/Navbar"
import InputBox from "./components/InputBox"

function App() {

  return (
    <Container>
      <MemeBox>
        <Navbar />
        <InputBox />
      </MemeBox>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #02052c;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MemeBox = styled.div`
  height: 35rem;
  width: 35rem;
  background-color: #b4d9fa;
  border: 3px solid white;
  border-radius: 1rem;
`

export default App
