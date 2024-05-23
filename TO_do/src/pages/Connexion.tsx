import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { URL } from '../utils/constant/URL';
import {useDispatch} from  'react-redux';
import * as ACTION from '../redux/reducers/To_do';
import { useNavigate } from 'react-router-dom';



const Connexion = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setUser((user: any) => ({...user, [name]: value}));
    }
    const connexion =  (e: any) => {
        e.preventDefault();
        dispatch(ACTION.FETCH_START());
        const enregistrer = async () => {
            try {
                const response = await axios.post(URL.LOGIN, user);
                 dispatch(ACTION.FETCH_SUCCES(response.data));
                 /* utiliser de préférence navigate plutot que window.location... */
                 navigate("/");    
            } catch (error: any) {
                //dispatch(ACTION.FETCH_FAILLURE());
                if(error.response.data.message == "user not found"){
                    alert("utilisateur introuvable veuillez vous incscrire");
                }
            }
        }
        enregistrer();        
    }
  return (
    <div>
        <form onSubmit={connexion} >
                <label htmlFor="email" >Email :</label>
                <input id="email" type='email' name="email" onChange={handleChange} />
                <label htmlFor="password">Mot de passe : </label>
                <input id='password' type='password' name='password'  onChange={handleChange}/>
                <button>Connexion</button>
            </form>
    </div>
  )
}

export default Connexion