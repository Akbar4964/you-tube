import React from 'react';
import { Bar, Col, Img, Line, List, Option, Select, Side, Title } from './style';
import img1 from "../assets/img/a1.png";
import img2 from "../assets/img/a2.png";
import img3 from "../assets/img/a3.png";
import img4 from "../assets/img/a4.png";
import img5 from "../assets/img/a5.png";
import img6 from "../assets/img/a6.png";
import img7 from "../assets/img/a7.png";
import img8 from "../assets/img/a8.png";
import img9 from "../assets/img/a9.png";
import img10 from "../assets/img/a10.png";
import img11 from "../assets/img/a11.png";
import img12 from "../assets/img/a12.png";
import img13 from "../assets/img/a13.png";
import img14 from "../assets/img/a14.png";
import img15 from "../assets/img/a15.png";
import img16 from "../assets/img/a16.png";
import img17 from "../assets/img/a17.png";
import img18 from "../assets/img/a18.png";
import img19 from "../assets/img/a19.png";
import img20 from "../assets/img/a20.png";
// import Content from '../content';

export default function Sidebar() {
    return (
        <>
            <Side>
                <Bar>
                    <List href='#'>
                        <Img src={img1}></Img>
                        Home
                    </List >
                    <List href='#'>
                        <Img src={img2}></Img>
                        Explore
                    </List>
                    <List href='#'>
                        <Img src={img3}></Img>
                        Subscriptions
                    </List>
                    <Line></Line>
                    <List href='#'>
                        <Img src={img4}></Img>
                        Lİbrary
                    </List >
                    <List href='#'>
                        <Img src={img5}></Img>
                        History
                    </List>
                    <List href='#'>
                        <Img src={img6}></Img>
                        Your Videos
                    </List>
                    <List href='#'>
                        <Img src={img7}></Img>
                        Watch Later
                    </List >
                    <List href='#'>
                        <Img src={img8}></Img>
                        Liked Videos
                    </List>
                    <List href='#'>
                        <Img src={img9}></Img>
                        Show More
                    </List>
                    <Line></Line>

                    <Title>SUBSCRIPTIONS</Title>
                    <List href='#'>
                        <Img src={img10}></Img>
                        James Gouse
                    </List>
                    <List href='#'>
                        <Img src={img11}></Img>
                        Alan Cooper
                    </List>
                    <List href='#'>
                        <Img src={img12}></Img>
                        Marcus Levin
                    </List>
                    <List href='#'>
                        <Img src={img13}></Img>
                        Alexis Sears
                    </List>
                    <List href='#'>
                        <Img src={img14}></Img>
                        Jesica Lambert
                    </List>
                    <List href='#'>
                        <Img src={img15}></Img>
                        Anna White
                    </List>
                    <List href='#'>
                        <Img src={img16}></Img>
                        Skylar Dias
                    </List>
                    <List href='#'>
                        <Img src={img9}></Img>
                        Show 13 more
                    </List>
                    <Line></Line>

                    {/* <Col> */}
                        <Title>MORE FROM YOUTUBE</Title>
                        <List href='#'>
                            <Img src={img17}></Img>
                            Youtube Premium
                        </List>
                        <List href='#'>
                            <Img src={img18}></Img>
                            Gaming
                        </List>
                        <List href='#'>
                            <Img src={img19}></Img>
                            Live
                        </List>
                    {/* </Col> */}
                    <Line></Line>
                    <List href='#'>
                        <Img src={img20}></Img>
                        Settings
                    </List>
                </Bar>
            </Side>
        </>
    )
}
