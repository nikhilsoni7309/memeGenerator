import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function InputBox() {

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target 
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }
  

  return (
    <InputContainer>
      <Input>
        <input 
          type="text" 
          placeholder='Top text'
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Bottom text'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </Input>
      <button onClick={getMemeImage}>Get a new meme image</button>
      <ImgBox>
        <img src={meme.randomImage} alt="meme image" />
        <TopText>{meme.topText}</TopText>
        <BottomText>{meme.bottomText}</BottomText>
      </ImgBox>
    </InputContainer>
  )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    button {
        background-color: #9f009f;
        color: white;
        width: 86%;
        font-size: large;
        border: 2px solid white;
    }
`

const Input = styled.div`
    display: flex;
    padding: 1rem;
    input {
        color: black;
        margin: 0.9rem;
        margin-inline: 0.9rem;
        padding: 0.9rem;
        border-radius: 0.7rem;
        font-size: medium;
        border: 1px solid white;
        background-color: white;
    }
`

const ImgBox = styled.div`
  position: relative;
  font-size: 1.3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: #fff;
  height: 15rem;
  margin: 2rem;
  width: 86%;
  background-color: #ffffc9;
  border: 2px solid black;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    position: absolute;
    margin: 0.5rem;
  }

`
const TopText = styled.h2`
    top: 0;
`
const BottomText = styled.h2`
    bottom: 0;
`

export default InputBox
