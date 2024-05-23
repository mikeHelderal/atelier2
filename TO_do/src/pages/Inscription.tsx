import React, { useState } from 'react';
import axios from 'axios'; // Ajout de l'import d'axios
import { URL } from '../utils/constant/URL';

const Inscription: React.FC = () => {
  const [user, setUser] = useState({
    
    email: '',
    password: '',
   
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(URL.SIGNUP,user ); // Utilisation de axios avec une URL définie
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };

  const { email, password} = user;

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="email">Adresse email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit">S'inscrire</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>} {/* Affichage de l'erreur si elle existe */}
    </div>
  );
};

export default Inscription;
