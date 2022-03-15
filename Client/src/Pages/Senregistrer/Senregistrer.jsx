import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import FacebookIcon from '../../Assets/Logo_Social/f_logo_RGB-Blue_58.png'
import GoogleIcon from '../../Assets/Logo_Social/logo_google.svg'

const Senregistrer = () => {

    const [state, setState] = useState({
      displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const {email, password, displayName, passwordConfirm} = state
   
    const handleSubmit = () => {}
    const handleChange = () => {}

    return (
        <div className='Container'>
            <div className='register-form'>

                <form className='form-signup' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{textAlign: "center", color: 'white'}}>
                        Se connecter
                    </h1>

                    <input 
                    type="text" 
                    id="displayName" 
                    className="form-control" 
                    placeholder="Nom" 
                    name="displayName"
                    onChange={handleChange} 
                    value={displayName}
                    required
                    />

                    <br/>

                    <input 
                    type="email" 
                    id="user-email" 
                    className="form-control" 
                    placeholder="Adresse email" 
                    name="email"
                    onChange={handleChange} 
                    value={email}
                    required
                    />

                    <br/>

                    <input 
                    type="password" 
                    id="inputPassword" 
                    className="form-control" 
                    placeholder="Mot de passe" 
                    name="password"
                    onChange={handleChange} 
                    value={password}
                    required
                    />

                    <br/>

                    <input 
                    type="password" 
                    id="inputRePassword" 
                    className="form-control" 
                    placeholder="Confirmer mot de passe" 
                    name="passwordConfirm"
                    onChange={handleChange} 
                    value={passwordConfirm}
                    required
                    />

                    <br/>
                    
                    <button className='btn-connecter' type="submit">
                        <i className="fas fa-user-plus"></i> S'enregistrer
                    </button>

                    <Link to="/Connexion">
                      <i className='fas fa-angle-left'></i> Retour
                    </Link>
                </form> 
                <br/>
            </div>
        </div>
    )
}

export default Senregistrer
