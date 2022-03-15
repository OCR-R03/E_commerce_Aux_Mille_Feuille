/*
|--------------------------------------------------------------------------
| Importation des dépendences 
|--------------------------------------------------------------------------
*/

import {BrowserRouter, Routes, Route } from "react-router-dom";

/*
|--------------------------------------------------------------------------
| Importation des components
|--------------------------------------------------------------------------
*/

import Annoncement from './Components/Annoncement/Annoncement'
import Navbar from './Components/Navbar/Navbar'

/*
|--------------------------------------------------------------------------
|Importations des pages
|--------------------------------------------------------------------------
*/

import Accueil from "./Pages/Accueil"
import Connexion from "./Pages/Connexion/Connexion";
import Senregistrer from "./Pages/Senregistrer/Senregistrer"

function App() {



  return (
    
    <div> 
      <BrowserRouter>
      
        <Annoncement />
        <Navbar />
        
          <Routes>
           <Route path='/' element={<Accueil />} />
           <Route path='/Connexion' element={<Connexion />} />
           <Route path='/Senregistrer' element={<Senregistrer />} />
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
