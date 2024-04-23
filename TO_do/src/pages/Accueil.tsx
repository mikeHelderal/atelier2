
import {NavLink,Outlet} from 'react-router-dom'
import './Pages.css'
import { useSelector } from 'react-redux';
import { RootState } from '../interfaces/interfaces/To_do';
import { getToken } from '../services/selector/Todo.selector';
import { useEffect } from 'react';


const Accueil = () => {

  const store: [] = useSelector((state: RootState) =>getToken(state));
  console.log(store);



  return (
    
    <div>
    <header className='header'>
    <nav className='nav'>
        <ul>            
            <NavLink to="/" activeClassName="active">accueil</NavLink>
        </ul>    
        <ul>    
            <NavLink to='/connexion' activeClassName="active">connexion</NavLink>            
        </ul>    
        <ul>
            <NavLink to='/inscription' activeClassName="active">inscription</NavLink>            
        </ul>
        <ul>
            <NavLink to='/cat' activeClassName="active">categories</NavLink>            
        </ul>
    </nav>
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