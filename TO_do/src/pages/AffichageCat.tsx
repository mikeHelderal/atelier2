import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../utils/constant/URL';
import { Link } from 'react-router-dom';

const AffichageCat = () => {
    const [categories, setCategories] = useState([]);


    useEffect(  () => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(URL.CATEGORIES);
                setCategories(response.data);
                console.log("categori => ",response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCategories();
    },[])

    return (
        <div> 
            <p>
                <Link to={"/catForm"} className="home__list-card">
                    <button>Créer catégorie</button>
                </Link>                
            </p>
            <div className="grid">            
            {categories != null ? categories.map(cat => (
                <div >
                    <h2>{cat.name}</h2>
                    
                </div>
            )) : <p>Veuillez créer une catégorie</p> }
            </div>
</div>
  )
}

export default AffichageCat