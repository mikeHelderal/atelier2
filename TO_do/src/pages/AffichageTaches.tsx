import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { URL } from '../utils/constant/URL';
import { RootState, Todo, taches } from '../interfaces/interfaces/To_do';
import { useSelector } from 'react-redux';
import { getToken } from '../services/selector/Todo.selector';
import { Link, useNavigate } from 'react-router-dom';
import "../utils/style/AffichageT.css";

const AffichageTaches = () => {

    /* récupérer les taches
    les trier par catégorie
    envoyer à l'affichage
    faire une boucle */
    const store: Todo = useSelector((state: RootState) =>getToken(state));
    const [taches , setTaches] = useState<any>();
    const [categories, setCategories] = useState([]);
    const [rafraichir, setRafraichir] = useState<boolean>();

    useEffect(  () => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(URL.CATEGORIES);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        const config = { headers: { Authorization: `Bearer ${store["token"]}`}};
        const response = axios.get(URL.GET_OR_CREATE_TASK, config);
        response.then(res => {
            setTaches(res.data);
            fetchCategories();
        })              
    },[rafraichir])

   

    const supprimer = async(tac: any) => {
        /// traitement axios pour la suppression
        const config = { headers: { Authorization: `Bearer ${store["token"]}` } };
        const response = await axios.delete(URL.GET_OR_CREATE_TASK+'/'+tac,  config);
        console.log(response.data);
        setRafraichir(true);
    }
  return (
    <div>
         <p>
       
        <Link to={"/tacheForm"} className="home__list-card">
           <button>Créer tâche</button>
        </Link>
        </p>        
        <div className="grid">            
        {categories != null ?            
         categories.map(cat => (
            <div >
            <h2>{cat.name}</h2>
            <p>
                {taches.map(tac =>(
                    tac.categoryId == cat.id ? 
                    <div>
                        <p>titre : {tac.title}</p>
                        <p>id user :{tac.userId}</p>
                        <p>priorité :{tac.priority}</p>
                        <p>description :{tac.content}</p>
                        <p>terminer :{JSON.stringify(tac.done)}</p>
                        <button   onClick={() => {supprimer(tac.id)}}>supprimer</button>
                    </div> : null
                ))}
            </p>  
            </div>  
        )) : <p>Veuillez créer une catégorie</p> }
        </div>
    </div>
  )
}

export default AffichageTaches

