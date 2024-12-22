import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
gap:10px;
margin: 30px 0px;
`;
const Avatar = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
  margin-right: 15px;
`;
const Details = styled.div`
display: flex;
flex-direction: column;
gap:10px;
`
const Name = styled.span`
color: ${({theme})=>theme.text};
font-size:13px;
font-weight: 500;
`
const Date = styled.span`
color: ${({theme})=>theme.textSoft};
font-size:12px;
font-weight: 400;
margin-left: 10px;
`
const Text = styled.span`
color: ${({theme})=>theme.text};
`

const Comment = () => {
  return (
    <Container>
        <Avatar src='/img.jpg'/>
        <Details>
            <Name>
                Rahul <Date>1 day ago</Date>
            </Name>
            <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos consequatur dolor pariatur, voluptatibus necessitatibus? Modi, cumque maxime, fugiat accusamus laudantium nemo natus inventore ut repellendus facilis delectus similique quo?
            </Text>
        </Details>
    </Container>
  )
}

export default Comment