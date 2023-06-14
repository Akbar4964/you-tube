import styled from "styled-components";



export let Header = styled.section`
color: #fff;
background-color: black;
width:1296px;
height: calc(100vh - 129px);
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
  width: 7px;
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

export let Count = styled.div`
display:flex;
align-items: center;
flex-wrap: wrap;
`

export let Card = styled.div`
padding-left: 24px;
padding-top: 24px;
position: relative;
`

export let Time = styled.p`
height: 18px;
width: 33px;
border-radius: 0px;
padding: 3px 4px 3px 4px;
background: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 12px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
position: absolute;
bottom: 35%;
right: 15px;
`

export let Img = styled.img``

export let Image = styled.img`
width: 36px;
height: 36px;
`

export let Box = styled.div`
gap: 12px;
padding-top:12px;
`

export let Title = styled.p`
width: 204px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`

export let Text = styled.p`
margin-top: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #AAAAAA;
flex: none;
order: 1;
flex-grow: 0;
`

export let Cont = styled.div``

export let Conts = styled.div`
display: flex;
align-items: center;
gap: 12px;
`

export let Like = styled.button`
color: red;
`

export let Unlike = styled.button`
color: green;
`

export let Counter = styled.div``