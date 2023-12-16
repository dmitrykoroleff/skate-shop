import React from 'react'
import { FaGit, FaTelegram, FaYoutube } from 'react-icons/fa';
import {
    Container,
    Wrapper,
    Column,
    Row,
    Link,
    Title,
  } from './FooterElements'



export function FooterContainer() {
    return (
        <Container>
            <Wrapper>
            <Row>
                <Column>
                <Title>About Us</Title>
                    <Link href="#">Story</Link>
                    <Link href="#">Clients</Link>
                    <Link href="#">Testimonials</Link>
                </Column>
                <Column>
                <Title>Services</Title>
                    <Link href="#">Marketing</Link>
                    <Link href="#">Consulting</Link>
                    <Link href="#">Development</Link>
                    <Link href="#">Design</Link>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <Link href="#">United States</Link>
                    <Link href="#">United Kingdom</Link>
                    <Link href="#">Australia</Link>
                    <Link href="#">Support</Link>
                </Column>
                <Column>
                <Title>Social</Title>
                    <Link href="#"><FaGit /></Link>
                    <Link href="#"><FaTelegram /> </Link>
                    <Link href="#"><FaYoutube /></Link>
                    
                </Column>
            </Row>
            </Wrapper>
            </Container>
    )
}

export default FooterContainer;