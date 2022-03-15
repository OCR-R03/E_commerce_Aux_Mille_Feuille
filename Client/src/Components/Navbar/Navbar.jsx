import React from 'react'
import {Link} from 'react-router-dom'
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import { FaUser } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi"
import { Badge } from '@material-ui/core'

export default function Navbar() {

    return (
        
        <div className='Container_Navbar'>

            <div className='Wrapper_Navbar'>

                <div className='Left_Navbar'>

                    <div className='Langage_Navbar'>FR</div>

                    <div className='SearchContainer_Navbar'>

                        <input className='Search_Navbar' placeholder='Recherche de produits' />

                        <Search style={{ color:"gray", fontSize:16}} />

                    </div>
                
                </div> 

                <nav className='Center_Header'>
            
                    <div>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <h1 className='Logo_Header'>Aux Mille Feuilles</h1>
                        </Link>
                    </div>

                </nav>

                <nav className='Right_Navbar'>

                    <div>
                    
                        <div id='MenuItem_Navbar_1'>
                            <Link to="/Senregistrer" style={{textDecoration: "none",  color: "white"}}><FaUser className="Logo_Register" /> S'enregistrer</Link>
                        </div> 
                    
                        <div id='MenuItem_Navbar_2'>
                            <Link to="/Connexion" style={{textDecoration: "none", color: "white"}}><FiLogIn className='Logo_User' />Connexion</Link>
                        </div>
                        
                    </div>
        
                </nav>

                <div id="MenuItem_Navbar_3">

                    <Badge badgeContent={4} color="secondary">

                        <ShoppingCartOutlined  />

                    </Badge>

                </div>

            </div>

        </div>
    )
}