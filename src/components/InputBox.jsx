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
          name="toptext"
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
        <p>{meme.topText}</p>
        <p>{meme.bottomText}</p>
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

    }
`

const Input = styled.div`
    display: flex;
    padding: 1rem;
    input {
        margin: 0.5rem;
        margin-inline: 0.9rem;
        padding: 0.8rem;
        border-radius: 0.7rem;
    
    }
`

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-family: cursive;
  color: #7962e9;
  font-weight: bolder;
  height: 15rem;
  margin: 1rem;
  width: 86%;
  background-color: #ffffc9;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  p {
    position: absolute;
  }

`

export default InputBox
