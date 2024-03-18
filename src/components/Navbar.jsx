import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    
    <LogoBox>
        <img src="/logo.png" alt="meme logo" />
        <h1>Meme Generator</h1>
    </LogoBox>
  )
}

const LogoBox = styled.div`
    background-color: purple;
    display: flex;
    height: 5rem;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.5rem;
    border-radius: 1rem;
    border: 3px solid white;

    img {
        height: 3rem;
    }
`

export default Navbar
