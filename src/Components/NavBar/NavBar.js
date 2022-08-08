import React from 'react';
// Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { AiOutlineSetting } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";
// End Of Bootstrap Components

import classes from './NavBar.module.scss';

const NavBar = () => {
    return (

        <Navbar expand="lg" dir='rtl' className={`${classes.navbar}`}>
            <Container>
                <Navbar href="" className={`justify-content-start ${classes.navbar_link}`}>Logo</Navbar>

                <Navbar.Toggle className={`${classes.navbar_link}`} />

                <Navbar.Collapse className={`justify-content-start ${classes.navbar_link}`}>
                    <Nav>
                        <NavDropdown title={
                            <span className={`${classes.navbar_link}`}> <AiTwotoneBank className={`${classes.nav_icon}`} />الاصول</span>
                        } className={`${classes.dropdown_link}`}>
                            <NavDropdown.Item href="">1</NavDropdown.Item>
                            <NavDropdown.Item href="">2</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={
                            <span className={`${classes.navbar_link}`}><AiOutlineSetting className={`${classes.nav_icon}`} /> التصنيع</span>
                        }>
                            <NavDropdown.Item href="">1</NavDropdown.Item>
                            <NavDropdown.Item href="">2</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                
                <Navbar.Collapse className={`justify-content-end ${classes.navbar_link}`}>
                    <Navbar href="" className={` ${classes.navbar_link}`}>اسم المستخدم</Navbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;