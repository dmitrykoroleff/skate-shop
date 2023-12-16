import React, { useEffect, useState, useNavigate as navigate } from "react"
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './UpdateElements';

function UpdatePage() {
    const [values, setValues] = useState({
        title: '',
        email: '',
        phone: ''
    
    })
   const [data, setData] = useState([])
   const {id} = useParams();
   useEffect(() => {
    axios.get('http://0.0.0.0:8888/decks/' + id)
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }, [])
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.post('http://0.0.0.0:8888/decks/' + id, values)
        .then(res => {
            console.log(res);
            navigate('/decks');
        }).catch(err => console.log(err));
    }
  return (
    <>
      <Container>
        <FormWrap>
        <Icon>   </Icon>
          <FormContent>
            <Form onSubmit={handleUpdate}>
              <FormH1>Обновить данные</FormH1>
              <FormInput  placeholder='Наименование' value={data.title} onChange={e=> setValues({...values, name:e.target.title})} />
              <FormInput  placeholder='Наименование' value={values.title} onChange={e=> setValues({...values, name:e.target.name})}  />
              <FormInput  placeholder='Наименование' value={values.title} onChange={e=> setValues({...values, name:e.target.name})}  />
              <FormButton > Продолжить</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container >
    </>
  );
};

export default UpdatePage;
