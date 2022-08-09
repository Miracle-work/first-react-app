import {React,useState} from 'react';
// Bootstrap Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { AiOutlineSetting } from "react-icons/ai";
import { AiTwotoneBank } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// End Of Bootstrap Components
import classes from './NavBar.module.scss';

const NavBar = () => {
    const [arrow,setArrow]= useState('down')
    const arrowHandler=()=>{
        if(arrow == 'down'){
            setArrow('up');
        }else{
            setArrow('down');
        }
    }

    return (

        <Navbar expand="lg" dir='rtl' className={`${classes.navbar}`}>
            <Container>
                <Navbar href="" className={`justify-content-start ${classes.navbar_link}`}>Logo</Navbar>

                <Navbar.Toggle/>

                <Navbar.Collapse className={`justify-content-start ${classes.navbar_link}`}>
                    <Nav>
                        <NavDropdown className={`${classes.dropdown}`} title={
                            <span className={`${classes.navbar_link}`}>
                                <AiOutlineSetting className={`${classes.nav_icon}`} /> 
                                التصنيع
                                {
                                    arrow == 'down' ? <IoIosArrowDown className={`${classes.nav_icon_down}`} /> : <IoIosArrowUp className={`${classes.nav_icon_down}`} /> 
                                }
                            </span>
                        } onClick={arrowHandler}>
                            <NavDropdown.Item href="">1</NavDropdown.Item>
                            <NavDropdown.Item href="">2</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className={`${classes.dropdown}`} title={
                            <span className={`${classes.navbar_link}`}> 
                                <AiTwotoneBank className={`${classes.nav_icon}`} />
                                الاصول
                                {
                                    arrow == 'down' ? <IoIosArrowDown className={`${classes.nav_icon_down}`} /> : <IoIosArrowUp className={`${classes.nav_icon_down}`} /> 
                                } 
                            </span>
                        } onClick={arrowHandler}>
                            <NavDropdown.Item href="">1</NavDropdown.Item>
                            <NavDropdown.Item href="">2</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
                
                <Navbar.Collapse className={`justify-content-end ${classes.navbar_link}`}>
                    <Navbar  href="" className={` ${classes.navbar_link} ${classes.dropdown}`}>
                        <FaUserCircle className={`${classes.nav_icon} ${classes.nav_icon_user}`} />  اسم المستخدم 
                    </Navbar>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      
    );
};

export default NavBar;