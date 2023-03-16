import React, {useState} from "react";
import { Stack, Container, Nav } from "react-bootstrap";
import "./style.scss";
import Logo from "@assetsImg/Logo.png";
import Menu from "@assetsImg/menu.png";
import Close from "@assetsImg/close.png";
import SearchForm from "@componentsHeader/SearchForm";

export default function Header() {
    const [isToggleMenu, setIsToggleMenu] = useState(false);
    const [isToggleSearch, setIsToggleSearch] = useState(false);

    const handleToggleMenu = () => {
        setIsToggleMenu(!isToggleMenu);
    } 

    const handleToggleSearch = () => {
        setIsToggleSearch(!isToggleSearch);
    }

    return (
        <header className="position-relative">
            <Container fluid="lg">
                <Nav className="d-flex justify-content-between align-items-center">
                    <div onClick={handleToggleMenu} className="btn-toggle-header">
                        {isToggleMenu ? <img src={Close} alt="close"/> : <img src={Menu} alt="menu"/>}
                    </div>
                    <Stack direction="horizontal" style={{top: isToggleSearch ? "147px" : "87px"}} className={`header-left ${isToggleMenu ? "show" : "hide"}`}>
                        <div className="nav-item">Home</div>
                        <div className="nav-item">Clothes</div>
                        <div className="nav-item">Shoes</div>
                        <div className="nav-item">Accessories</div>
                    </Stack>
                    <div className="web-logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <Stack direction="horizontal" className="header-right">
                        <SearchForm isToggleSearch={isToggleSearch} />
                        <Stack direction="horizontal" className="top-icons">
                            <div onClick={handleToggleSearch} className="search-user"><i className="fa-solid fa-magnifying-glass"></i></div>
                            <div className="account-user"><i className="fa-solid fa-user"></i></div>
                            <div className="cart-user"><i className="fa-solid fa-cart-shopping"></i></div>
                            <div className="favourite-user"><i className="fa-solid fa-heart"></i></div>
                        </Stack>
                    </Stack>
                </Nav>
            </Container>
        </header>
    );
}