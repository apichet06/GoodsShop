import { Col, Container, Row } from "react-bootstrap";

export default function Loading() {
    return (<>
        <Container>
            <Row className="justify-content-center">
                <Col md={4} className="text-center">Loading...</Col>
            </Row>
        </Container>

    </>)
}
