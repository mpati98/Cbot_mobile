import React from "react";
import { Container, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import './services.css'
import serviceData from "../assets/data/serviceData"
const Services = () => {
    return <section className="services">
        <Container>
            <Row>
                {
                    serviceData.map((item, index) => (
                <Col lg='3' md='4' xs='3' key={index}>
                    <motion.div whileHover={{scale: 1.1}}
                     className="service__item" style={{background: `${item.bg}`}}>
                        <span><i class={item.icon}></i></span>
                        {/* <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div> */}
                    </motion.div>
                </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
}

export default Services