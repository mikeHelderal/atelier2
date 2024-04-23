import axios from 'axios';
import React, { useState } from 'react'
import { URL } from '../../utils/constant/URL';
import { useSelector } from 'react-redux';
import { RootState, Todo } from '../../interfaces/interfaces/To_do';
import { getToken } from '../../services/selector/Todo.selector';
import { useNavigate, redirect } from 'react-router-dom';


const CategorieForm = () => {

    const navigate = useNavigate();
    const [cat, setCat] = useState({})
    // a remplacer par redux
    const store: Todo = useSelector((state: RootState) =>getToken(state));
    console.log(store.token);


    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setCat((user: any) => ({...user, [name]: value}));
    }
    const createCat = async (e: any) => {
        e.preventDefault();
        console.log(cat);
        try {
            console.log(store);
            const config = { headers: { Authorization: `Bearer ${store["token"]}`}};                 
            const response = await axios.post(URL.CATEGORIES, cat, config);
            console.log(response.data);
            navigate("/");
        } catch (error: any) {
            console.log(error.response.data);           
        }
    }
    return (
    <div>
    <form onSubmit={createCat} >
            <label htmlFor="name" >Name :</label>
            <input id="name" type='name' name="name" onChange={handleChange} />            
            <button>Creer</button>
        </form>
</div>
  )
}

export default CategorieForm