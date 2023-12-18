import { api } from '@/app/config'
import axios from 'axios'
import React from 'react'
import { Card, CardBody, CardImg, CardTitle, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
async function getProduct() {

    const response = await axios.get(api + "/products/1/10")

    if (response.status === 200) {
        return response.data.data
    } else {
        throw new Error('Cannot find product')
    }

}

export default async function Page() {
    const product = await getProduct();
    // console.log(product);

    return (
        <>
            <Container>
                <Row className='justify-content-center' >
                    {
                        product.map((pro: any, index: number) => (
                            <Col md={2} className='mb-3' key={index}>
                                <Card>
                                    <CardImg variant="top" src="/image/no_image.png" />
                                    <CardBody>
                                        <CardTitle>{pro.pro_name}</CardTitle>
                                    </CardBody>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>฿{pro.pro_sellprice}</ListGroupItem>
                                    </ListGroup>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>


    )
}
