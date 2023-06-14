import styled from "styled-components";



export let Main = styled.section`
height: 73px;
background-color: #212121;
`

export let Item = styled.div`
background-color: #212121;
padding-top: 12px;
padding-left: 24px;
padding-bottom: 12px;
display: flex;
overflow-x: auto;
width: 1296px;
mask-image: linear-gradient(to top, transparent, black),
linear-gradient(to left, transparent 17px, black 17px);
mask-size: 100% 20000px;
mask-position: left bottom;
-webkit-mask-image: linear-gradient(to top, transparent, black),
linear-gradient(to left, transparent 17px, black 17px);
-webkit-mask-size: 100% 20000px;
-webkit-mask-position: left bottom;
transition: mask-position 0.3s, -webkit-mask-position 0.3s;
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

export let Button = styled.button`
width: 53px;
height: 32px;
background: #303030;
border: 0.3px solid #AAAAAA;
border-radius: 32px;
flex: none;
order: 0;
flex-grow: 0;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin-right: 12px;
&:hover{
    background-color: #FFFFFF;
    color: black;
}
&:active{
    padding: 9px;
}
`

export let Btn = styled.button`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #030303;
flex: none;
order: 0;
flex-grow: 0;
width: 40px;
height: 32px;
background: #FFFFFF;
border-radius: 32px;
flex: none;
order: 0;
flex-grow: 0;
margin-right: 12px;
&:hover{
    background-color: black;
    color: #FFFFFF;
}
&:active{
    padding-right: 5px;
}
`