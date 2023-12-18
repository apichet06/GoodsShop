'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import { handleSubmit } from './actionsubmit'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col md={4}>
            <Card className='shadow'>
              <Card.Body>
                <Card.Title className='text-center'>ล็อกอินเข้าสู่ระบบ</Card.Title>
                <hr />
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" className="mb-2">
                      <Form.Label>ชื่อล็อกอิน</Form.Label>
                      <Form.Control type="text" placeholder="Username" required />
                      <Form.Control.Feedback type="invalid">
                        กรุณากรอก ชื่อล็อกอิน
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12">
                      <Form.Label>รหัสผ่าน</Form.Label>
                      <Form.Control type="text" placeholder="Password" required />
                      <Form.Control.Feedback type="invalid">
                        กรุณากรอก รหัสผ่าน
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Stack className='mb-3'>
                    <hr />
                    <Button type="submit">ยืนยัน</Button>
                  </Stack>
                  <Stack >
                    <Link href={""} className='text-center'>ลงทะเบียน</Link>
                  </Stack>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} className='text-center m-3'>
            -- หรือล็อกอินผ่าน --
          </Col>
          <Col md={5} className='text-center'>
            <Button type="submit" className='shadow' variant="outline-primary"><FaFacebookF />{' '}Facebook</Button>{' '}
            <Button type="submit" className='shadow' variant="outline-danger"><FaGoogle /> {' '}Google</Button>
          </Col>
        </Row>
      </Container >
    </>
  )
}
