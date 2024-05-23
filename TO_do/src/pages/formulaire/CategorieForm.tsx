import axios from 'axios';
import React, { useState } from 'react'
import { URL } from '../../utils/constant/URL';
import { useSelector } from 'react-redux';
import { RootState, Todo } from '../../interfaces/interfaces/To_do';
import { getToken } from '../../services/selector/Todo.selector';
import { useNavigate } from 'react-router-dom';


const CategorieForm = () => {

    const navigate = useNavigate();
    const [cat, setCat] = useState({})
    const store: Todo = useSelector((state: RootState) =>getToken(state));
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setCat((user: any) => ({...user, [name]: value}));
    }
    const createCat = async (e: any) => {
        e.preventDefault();
        try {
            const config = { headers: { Authorization: `Bearer ${store["token"]}`}};                 
            const response = await axios.post(URL.CATEGORIES, cat, config);
            navigate("/cat");
        } catch (error: any) {
            alert("une erreur est survenue");         
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