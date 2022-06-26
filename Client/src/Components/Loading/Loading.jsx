import React from 'react'
import styled from 'styled-components'


function Loading() {
  return (
    <Body>
        <div>
            <h1>Loading...</h1>
        </div>
        <div>
            <p>Please wait</p>
        </div>
    </Body>
  )
}

export default Loading

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 92vh;
    width: 100%;
    background-color: #1c5d99;
    h1{
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
    }
    p{
        font-size: 1.5rem;
        color: #ffffff;
    }
`