import styled from "styled-components";



export let Nav = styled.section`
background: #212121;
padding-left: 27px;
height: 56px;
line-height: 56px;
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin: 0 auto;
`

export let Img = styled.img`
margin-right: 27px;
`

export let Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export let Count = styled.div``

export let Search = styled.input`
height: 40px;
width: 362px;
background: #121212;
border-radius: 2px 0px 0px 2px;
border: 0;
position: relative;
outline: none;
color: #fff;
padding-left: 7px;
cursor: pointer;
&::placeholder{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #AAAAAA;
flex: none;
order: 0;
flex-grow: 0;
padding-left: 7px;
}
`

export let Button = styled.button`
position: absolute;
right: 14%;
height: 40px;
width: 64px;
padding: 2px 7px 2px 7px;
background: #303030;
flex: none;
order: 0;
flex-grow: 0;
border: 0;
cursor: pointer;
&:hover{
    background: #4A4A4A;
}
`

export let Image = styled.img``

export let Voice = styled.img`
margin-left: 20px;
`

export let Counter = styled.div`
position: relative;
line-height: 56px;
display: flex;
align-items: center;
`

export let Counts = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-right: 30px;
`

export let Images = styled.img``