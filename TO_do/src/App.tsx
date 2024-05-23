import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Accueil from './pages/Accueil'
import Inscription from './pages/Inscription.tsx'
import Connexion from './pages/Connexion.tsx'
import Presentation from './pages/presentation/Presentation'
import CategorieForm from './pages/formulaire/CategorieForm.tsx'
import AffichageTaches from './pages/AffichageTaches.tsx'
import TasksForm from './pages/formulaire/TasksForm.tsx'
import AffichageCat from './pages/AffichageCat.tsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} >
          <Route index element={<Presentation />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/catForm" element={<CategorieForm />} />
          <Route path="/cat" element={<AffichageCat />} />
          <Route path="/tacheForm" element={<TasksForm />} />
          <Route path="/tache" element={<AffichageTaches />} />

          {/* ProductList */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App