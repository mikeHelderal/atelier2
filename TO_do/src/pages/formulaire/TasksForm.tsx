import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { URL } from '../../utils/constant/URL';
import "../Pages.css"
import { RootState, Todo } from '../../interfaces/interfaces/To_do';
import { useSelector } from 'react-redux';
import { getToken } from '../../services/selector/Todo.selector';
import { useNavigate } from 'react-router-dom';

const TasksForm = () => {
    const [task, setTask] = useState({
        title: '',
        content: '',
        priority: 0,
        category: 0,
        done: false,
        expiration: new Date().toISOString() // Date actuelle par défaut
    });
    const [categories, setCategories] = useState([]);
    const store: Todo = useSelector((state: RootState) =>getToken(state));
    const navigate = useNavigate();



    useEffect(() => {
        // Récupérer les catégories depuis l'URL
        const fetchCategories = async () => {
            try {
                const response = await axios.get(URL.CATEGORIES);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        // Charger les catégories lors du montage du composant
        fetchCategories();

        // Définir le token (à remplacer par une gestion sécurisée)
        
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask  => ({ ...prevTask, [name]: value }));
    }

    const createTask = async (e) => {
        e.preventDefault();
        console.log(task);
        try {
            console.log('avant axios => ', task);
            const config = { headers: { Authorization: `Bearer ${store["token"]}` } };
            const response = await axios.post(URL.GET_OR_CREATE_TASK, task, config);
            console.log(response.data);
            navigate("/tache");
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <form onSubmit={createTask} className='createTask'>
                <h1>création de tâches</h1>
                <label htmlFor="title">désignations :</label>
                <input id="title" type='text' name="title" onChange={handleChange} />

                <label htmlFor="content">détails :</label>
                <input id="content" type='text' name="content" onChange={handleChange} />

                <label htmlFor="priority">Priorité :</label>
                <input id="priority" type='number' name="priority" onChange={handleChange} />

                <label htmlFor="category">Categories :</label>
                <select id="category" name="category" onChange={handleChange}>
                    <option value="">Selectionnez une catégorie</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>

                

                <label htmlFor="expiration">date d'expiration :</label>
                <input id="expiration" type='datetime-local' name="expiration" onChange={handleChange} />

                <button>valider</button>
            </form>
        </div>
    );
}

export default TasksForm;