import React, {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { clearCarrito } from '../../Redux/Actions/Actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';


//ServiceID: service_db1lpkd
//Public_Key: F-jlerFc9kQmnHiSA
//TemplateID: template_upt9d5c

function Success() {
    const { user } = useAuth0(); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form = useRef();

    useEffect(()=>{
        clearCarrito([]).then((action) => {
            dispatch(action);
        }
        )
    }, [])


    async function handledHome(e) {
        e.preventDefault();
        if(user){
            emailjs.sendForm('service_db1lpkd', 'template_upt9d5c', form.current, 'F-jlerFc9kQmnHiSA')
            .then((result) => {
                navigate(`/home`);
            }, (error) => {
                console.log(error.text);
            });
        }   
    }



    return (
        <Body>
            <h1>Success!</h1>
            <h2>You can click in the botton to go home to be redirect</h2>
            <p>We gone to seend you to your email acount {user? user.email : "(loading acount...)"} your ticket of purchase</p>
            <Button onClick={handledHome}>Home</Button>
            <Form ref={form} onSubmit={handledHome}>
                <input type="text" name="from_name" value={user?user.name:"Esperando"} />
                <input type="email" name="reply_to" value={user?user.email:"Esperando"}/>
                <textarea name="message" value={'We are pleased to report that your service was successfully purchased. You can view your billing in the Stripe link that will come to you below. If it does not arrive in your inbox, please, check the Span or Advertisements tray.'} />
            </Form>
        </Body>
  )
}

export default Success


const Form = styled.form`
    display: none;
`

const Button = styled.button`
  background-color: #1C5D99;
  border-radius: 5px;
  border: 1px solid white;
  color: white;
  padding: 7px 10px 7px 10px ;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: #222222;
    background-color: #FFFFFF;
  }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 5px);
    background-color: #1C5D99;
    color: white;
    padding: 10px;
    transition: all 300ms;
    h1{
        margin-bottom: 10px;
        font-size: 2.5rem;
        font-weight: bold;
    }
    h2{
        margin-bottom: 10px;
        color: #dddddd;
    }
    p{
        margin-bottom: 10px;
    }   
`;