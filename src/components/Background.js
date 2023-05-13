import React from 'react'
import background from '../assets/login.jpg'
import styled from 'styled-components'


const Container = styled.div`
height:100vh;
width:100%;
    img{
    height:100vh;
    width:100%;
   
}

`

export default function Background() {
  return (
    <Container>
        <img src={background} alt="" />
    </Container>
  )
}


