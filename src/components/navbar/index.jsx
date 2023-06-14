import React from 'react';
import { Button, Content, Count, Img, Nav, Search, Image, Voice, Counter, Counts, Images, Container } from './style';
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";
import img7 from "../assets/img/7.png";
import img8 from "../assets/img/8.png";

export default function Navbar() {
    return (
        <Nav>
            {/* <Container> */}
                <Content>
                    <Count>
                        <Img src={img1}></Img>
                        <Img src={img2}></Img>
                    </Count>
                    <Counter>
                        <Search placeholder='Search'></Search>
                        <Button> <Image src={img3}></Image> </Button>
                        <Voice src={img4}></Voice>
                    </Counter>
                    <Counts>
                        <Images src={img5}></Images>
                        <Images src={img6}></Images>
                        <Images src={img7}></Images>
                        <Images src={img8}></Images>
                    </Counts>
                </Content>
            {/* </Container> */}
        </Nav>
    )
}
