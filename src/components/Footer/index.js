import React from "react";
import "./style.scss";
import Logo from "../../assets/img/Logo.png";
import {InputGroup, Button, FormControl, Form, Container, Row, Col} from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <Container fluid>
                <Row>
                    <Col lg={6} md={12}>
                        <Row>
                            <Col md={4} sm={12} className="logo-box">
                                <img src={Logo} alt="logo"/>
                            </Col>
                            <Col md={4} sm={12}>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </Col>
                            <Col md={4} sm={12}>
                                <ul>
                                    <li>
                                        <span><i className="fa-brands fa-facebook-f"></i></span>
                                        Facebook
                                    </li>
                                    <li>
                                        <span><i className="fa-brands fa-twitter"></i></span>
                                        Twitter
                                    </li>
                                    <li>
                                        <span><i className="fa-brands fa-instagram"></i></span>
                                        Instagram
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12} className="mt-md-4 mt-lg-0">
                        <Row>
                            <Col md={6} sm={12}>
                                Subscribe to our newsletter
                                <Form>
                                    <InputGroup className="mt-4">
                                        <FormControl
                                          placeholder="Email Address"
                                          className="py-2 px-4"
                                        />
                                        <Button className="py-1 px-3">
                                          OK
                                        </Button>
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col md={6} sm={12}>
                                <div style={{paddingLeft: "80px"}}>
                                    <p>Đông Mỹ, Thanh Trì, Hà Nội</p>
                                    <p>(+84) 983 42 8177</p>
                                    <p>dgranin8012000@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}