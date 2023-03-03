import React from "react";
import "./style.scss";
import Logo from "../../assets/img/Logo.png";
import {InputGroup, Button, FormControl, Form} from "react-bootstrap";

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 logo-box">
                                <img src={Logo} alt="logo"/>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12">
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
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 mt-md-4 mt-lg-0">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
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
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div style={{paddingLeft: "80px"}}>
                                    <p>Đông Mỹ, Thanh Trì, Hà Nội</p>
                                    <p>(+84) 983 42 8177</p>
                                    <p>dgranin8012000@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}