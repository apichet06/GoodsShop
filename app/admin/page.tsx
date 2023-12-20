'use client'


import styles from './page.module.css'
import Link from 'next/link'
import { Button, Card, Col, Container, Form, Row, Stack, Image } from 'react-bootstrap'
import { Login } from './action'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState } from 'react'
export default function Home() {
    const [validated, setValidated] = useState(false);
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleSubmit = async (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            await Login(credentials);
        }
        setValidated(true);
    };

    return (
        <>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={4} >
                        <div className='text-center' >
                            <Image src="/image/logo.png" rounded alt="" width={130} className='mb-3' />
                            <h3 className='mb-3'>Goods Shop</h3>
                        </div>
                        <Card className='shadow'>
                            <Card.Body>
                                <Card.Title className='text-center'>ล็อกอินเข้าสู่ระบบ</Card.Title>
                                <hr />
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="12" className="mb-2">
                                            <Form.Label>ชื่อล็อกอิน</Form.Label>
                                            <Form.Control type="text" placeholder="Username"
                                                onChange={(e: any) => setCredentials({ ...credentials, username: e.target.value })} required />
                                            <Form.Control.Feedback type="invalid">
                                                กรุณากรอก ชื่อล็อกอิน
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12">
                                            <Form.Label>รหัสผ่าน</Form.Label>
                                            <Form.Control type="text" placeholder="Password"
                                                onChange={(e: any) => setCredentials({ ...credentials, password: e.target.value })} required />
                                            <Form.Control.Feedback type="invalid">
                                                กรุณากรอก รหัสผ่าน
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Stack className='mb-3'>
                                        <hr />
                                        <Button type="submit">ยืนยัน</Button>
                                    </Stack>

                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container >
        </>
    )
}
