import styled from "styled-components";



export let Side = styled.section`
background: #212121;
display: flex;
width: 240px;
`

export let Bar = styled.div`
height: calc(100vh - 56px);
width: 240px;
background: #212121;
overflow-y: auto;
mask-image: linear-gradient(to top, transparent, black),
linear-gradient(to left, transparent 17px, black 17px);
mask-size: 100% 20000px;
mask-position: left bottom;
-webkit-mask-image: linear-gradient(to top, transparent, black),
linear-gradient(to left, transparent 17px, black 17px);
-webkit-mask-size: 100% 20000px;
-webkit-mask-position: left bottom;
transition: mask-position 0.3s, -webkit-mask-position 0.3s;
&:hover{
-webkit-mask-position: left top;
}
&::-webkit-scrollbar {
  width: 17px;
}
&::-webkit-scrollbar-track {
  background: transparent; 
}
&::-webkit-scrollbar-thumb {
  background: transparent;
}
&:hover::-webkit-scrollbar-thumb {
  background: #fff; 
}
&:hover::-webkit-scrollbar-thumb {
  background: #4A4A4A;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
`

export let List = styled.a`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
display: flex;
align-items: center;
gap: 26px;
margin-left: 25px;
margin-top: 24px;
&:hover{
  background: grey;
  padding: 5px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
`

export let Img = styled.img`
width: 25px;
`

export let Line = styled.div`
border: 3px solid #303030;
margin-top: 24px;
`

export let Title = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #AAAAAA;
flex: none;
order: 0;
margin-top: 24px;
flex-grow: 0;
margin-left: 25px;
`
export let Col = styled.div``