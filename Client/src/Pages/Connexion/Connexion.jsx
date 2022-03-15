import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useHistory, Link} from 'react-router-dom'
import FacebookIcon from '../../Assets/Logo_Social/f_logo_RGB-Blue_58.png'
import GoogleIcon from '../../Assets/Logo_Social/logo_google.svg'

const Connexion = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const {email, password} = state
    const handleGoogleSignIn = () => {}
    const handleFBSignIn = () => {}
    const handleSubmit = () => {}
    const handleChange = () => {}

    return (
        <div className='Container'>
            <div className='logreg-forms'>

                <form className='form-signin' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{textAlign: "center", color: 'white'}}>
                        Se connecter
                    </h1>

                    <input 
                    type="email" 
                    id="inputEmail" 
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
                    
                    <button className='btn-connecter' type="submit">
                        <i className="fas fa-sign-in-alt"></i> Se connecter
                    </button>

                    <hr />
                    <p style={{textAlign: "center", color: 'white'}}>OU</p>

                    <div className='social-login'>
                        <button className='btn google-btn social-btn' type="button" onClick={handleGoogleSignIn}>
                            <span>
                                <img className='Logo_Google' src={GoogleIcon} alt="Logo Google"></img> Se connecter via Google +
                            </span>
                        </button>
                    </div>

                    <div className='social-login2'>
                        <button className='btn facebook-btn social-btn' type="button" onClick={handleFBSignIn}>
                                <span>
                                    <img className='Logo_Facebook' src={FacebookIcon} alt="Logo Facebook"></img> Se connecter via Facebook
                                </span>
                        </button>
                    </div>

                    <p style={{display: 'flex', justifyContent: 'center', color: "white", paddingTop: 30}}>Vous n'avez pas de compte ?</p>
                    <Link to='/Senregistrer'>
                        <button
                            className='btn_create_account'
                            type='button'
                            id="btn-signup"
                        >
                            <i className='fas fa-user-plus'></i> Créer un nouveau compte
                        </button>
                    </Link>    
                </form> 
            </div>
        </div>
    )
}

export default Connexion
