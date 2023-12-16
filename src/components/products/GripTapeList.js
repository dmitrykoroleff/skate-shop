import React, { Component, useEffect, useState } from 'react'
import { Link, useParams} from "react-router-dom"

import { InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Title,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    ServicesCard,
    ArrowForward,
    ArrowRight,
    RectangleCardWrapper,
    Button
 } from './ProductsElements';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function GripTapeList() {
    const { id } = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://0.0.0.0:8888/griptapes/?skip=0&limit=100')
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you stupid?');
        if (confirm) {
            axios.delete('http://0.0.0.0:8888/griptapes/' + id)
            .then(res => {
                navigate(0);
                console.log(res);
            }).catch(err => console.log(err));
        }
    }

    return (
        <RectangleCardWrapper>
            {
                data.length ?
                data.map(tape =>
                <InfoContainer><ServicesCard><InfoWrapper><Title key={tape.id}>{tape.title}</Title><Subtitle>{tape.price} рублей</Subtitle></InfoWrapper><Link to='/update'><Button>Update</Button></Link><Button onClick={e => handleDelete(tape.id)}>Delete</Button></ServicesCard></InfoContainer> ) :
                null
            }
        </RectangleCardWrapper>
    )
    }

 

export default GripTapeList;