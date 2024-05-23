
import {NavLink,Outlet} from 'react-router-dom'
import './Pages.css'
import { useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfaces/To_do';
import { getToken } from '../services/selector/Todo.selector';
import { useEffect } from 'react';


const Accueil = () => {

  const store: [] = useSelector((state: RootState) =>getToken(state));
  console.log("arriver sur l'accueil => ",store["token"]);



  return (
    
    <div>
    <header className='header'>
      { store["token"] === undefined ?
        <nav className='nav'>      
          <ul>    
            <NavLink to='/connexion' activeClassName="active">Connexion</NavLink>            
          </ul>    
          <ul>
            <NavLink to='/inscription' activeClassName="active">Inscription</NavLink>            
          </ul>      
        </nav>
    :
        <nav className='nav'>
          <ul>            
            <NavLink to="/" activeClassName="active">Accueil</NavLink>
          </ul>
          <ul>
            <NavLink to='/cat' activeClassName="active">Catégorie</NavLink>            
          </ul>
          <ul>
            <NavLink to='/tache' activeClassName="active">Tâche</NavLink>            
          </ul>
        </nav> 
    }
    
    </header>
    <section>
        <Outlet/>
        
    </section>
    <footer className='footer'>
      <h1></h1>
    </footer>
    </div>

  )
}

export default Accueil