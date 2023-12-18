'use client'
import { api } from '@/app/config'
import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

async function getProduct() {

    const response = await axios.get(api + "/products/1/10")

    if (response.status === 200) {
        return response.data.data
    } else {
        throw new Error('Cannot find product')
    }

}

export default function Page() {

    const [products, setProduct] = useState([])

    const initProduct = async () => {
        try {
            const result = await getProduct()
            setProduct(result)
        } catch (error) {
            throw error
        }

    }


    useEffect(() => {
        initProduct()

    }, [])

    return (
        <>

            <Container>
                <Row className='justify-content-center' >
                    <Suspense fallback={<div>Loading...</div>}>
                        {products.map((pro: any, index: number) => (
                            <Col md={2} className='mb-3' key={index}>
                                <Card>
                                    <Card.Img variant="top" src="/image/no_image.png" />
                                    <Card.Body>
                                        <Card.Title>{pro.pro_name}</Card.Title>
                                    </Card.Body>
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item>฿{pro.pro_sellprice}</ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))}
                    </Suspense>
                </Row>
            </Container>
        </>
    )
}