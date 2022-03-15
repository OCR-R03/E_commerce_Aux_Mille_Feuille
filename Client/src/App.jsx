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
import Success from "./Pages/SuccessFul_Register/Success"
import SuccessConnexion from './Pages/SuccessFul_Connexion/Success_connexion'

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
           <Route path='/Success' element={<Success />} />
           <Route path='/SuccessConnexion' element={<SuccessConnexion />} />
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
