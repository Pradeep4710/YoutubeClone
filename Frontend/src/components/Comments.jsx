import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div``;
const NewComment = styled.div`
display:flex;
align-items: center;
gap:5px;
`;
const Avatar = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
  margin-right: 15px;
`;
const Input = styled.input`
border: none;
border-bottom: 1px solid ${({theme})=>theme.soft};
color:${({theme})=>theme.textSoft};
background-color: transparent;
padding:5px;
width:100%;
outline: none;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='/img.jpg'/>
            <Input placeholder='Add a comment'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments