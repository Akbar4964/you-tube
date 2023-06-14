import React from 'react'
import Sidebar from '../sidebar'
import Content from '../content'
import { Col } from './style'

export default function Row() {
    return (
        <>
            <Col>
                <Sidebar />
                <Content />
            </Col>
        </>
    )
}
