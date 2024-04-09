import React, { useRef } from "react";
import './header.css'
import { NavLink, useNavigate } from "react-router-dom";

import logo from '../../assets/images/logo-homepage.png'
import userIcon from '../../assets/images/user-icon.png'
import { motion } from "framer-motion";
import { Container, Row } from "reactstrap";

// import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";

// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase.config";
// import { toast } from "react-toastify";

const nav__links = [
    {
        path: 'home',
        display: 'Trang chủ'
    },
    {
        path: 'shop',
        display: 'Cửa hàng'
    },
    {
        path: 'cart',
        display: 'Giỏ hàng' 
    }
]

const Header = () => {

    const headerRef = useRef(null)

    const menuRef = useRef(null)

    const profileActionRef = useRef(null)

    const navigate = useNavigate()

    const { currentUser } = useAuth()

    // const totalQuantity = useSelector(state => state.cart.totalQuantity)

    // const stickyHeaderFunc = () => {
    //     window.addEventListener('scroll', () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             headerRef.current.classList.add('sticky__header')
    //         } else {
    //             headerRef.current.classList.remove('sticky__header')
    //         }
    //     })
    // }

    // const logout = () => {
    //     signOut(auth).then(()=>{
    //         toast.success('Logged out')
    //         navigate('/home')
    //     }).catch(err => {
    //         toast.error(err.message)
    //     })
    // }

    // useEffect(() => {
    //     stickyHeaderFunc()
    //     return () => window.removeEventListener('scroll', stickyHeaderFunc)
    // })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu')

    // const navigateToCart = () => {
    //     navigate('/cart')
    // }
    const navigateToHome = () => {
        navigate('/home')
    }
    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show_profileActions')

    return <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo" onClick={navigateToHome}>
                        <img src={logo} alt="logo" />
                        <h1>Hoang Tho Fruit</h1>
                        {/* <p>Trái cây sạch vì sức khỏe mọi nhà</p> */}
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {nav__links.map((item, index) => (
                                <li className="nav_item" key={index}>
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__icons">
                        {/* <span className="fav__icon">
                            <i class="ri-heart-3-line"></i>
                            <span className="badge">1</span>
                        </span>
                        <span className="cart__icon" onClick={navigateToCart}>
                            <i class="ri-shopping-cart-2-line"></i>
                            <span className="badge">{totalQuantity}</span>
                        </span> */}
                        <div className="profile">
                            <motion.img whileTap={{ scale: 1.2 }} src={currentUser ? currentUser.photoURL : userIcon} alt="user icon" onClick={toggleProfileActions}/>
                                {/* <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}> */}
                                    {/* {
                                        currentUser ? <span onClick={logout}>Logout</span> : <div className="d-flex align-items-center justify-content-center flex-column">
                                            <Link to='/signup'>Signup</Link>
                                            <Link to='/login'>Login</Link>
                                            <Link to='/dashboard'>Dashboard</Link>
                                        </div>
                                    } */}
                                {/* </div> */}
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
}

export default Header