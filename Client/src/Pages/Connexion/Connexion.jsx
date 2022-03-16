import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import FacebookIcon from '../../Assets/Logo_Social/f_logo_RGB-Blue_58.png'
import GoogleIcon from '../../Assets/Logo_Social/logo_google.svg'
import { loginInitiate, googleSignInInitiate, fbSignInInitiate } from '../../Redux/actions'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup" 
import "bootstrap/dist/css/bootstrap.css";


const Connexion = () => {

    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const {email, password} = state
    
    const { currentUser } = useSelector((state) => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser) {
            navigate("/")
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch()
    
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate())
    }
    
    const handleFBSignIn = () => {
        dispatch(fbSignInInitiate())
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !password) {
            return
        }

        dispatch(loginInitiate(email, password))
        setState({ email: "", password: ""})
    }
    
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state, [name]: value })
    }

    const ConnexionSchema = Yup.object().shape({
        email: Yup.string()
        .email("Format de l'adresse email incorrect")
        .required("Email obligatoire"),
      
        password: Yup.string()
        .min(3, "Le mot de passe doit contenir 3 caratères au minimun")
        .required("Mot de passe obligatoire"),
    });

    return (
        
        <div className="Container_Connex">
            <div className="row">
                <div className="col-lg-12">
                    <Formik 
                        initialValues={{ email: "", password: "" }}
                        validationSchema={ConnexionSchema}
                        onSubmit={(values) => {
                            handleSubmit
                            console.log(values); 
                            alert("Form is validated! Submitting the form...");
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                        !isSubmitting ? (
                        
                        <div>
                            
                            <div className="row mb-5">
                                
                                <div className="col-lg-12 text-center">
                                    
                                    <h1 className="mt-5">Se connecter</h1>
                                
                                </div>
                            </div>
                            
                            <Form>
                                
                                <div className="form-group">
                                    
                                    <Field
                                        type="email" 
                                        id="inputEmail" 
                                        placeholder="Adresse email" 
                                        name="email"
                                        onChange={handleChange} 
                                        value={email}
                                        required
                                        autocomplete="off"
                                        className={`col-lg-12 text-center" 
                                        ${touched.email && errors.email ? "is-invalid" : ""}`}
                                    />
                                    
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>
                        
                                <div className="form-group">
                            
                                    <Field
                                        type="password" 
                                        id="inputPassword"  
                                        placeholder="Mot de passe" 
                                        name="password"
                                        onChange={handleChange} 
                                        value={password}
                                        required
                                        className={`mt-2 form-control
                                        ${
                                        touched.password && errors.password
                                            ? "is-invalid"
                                            : ""
                                        }`}
                                    />
                            
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                        
                                </div>

                                <br/>

                                <Link to="/SuccessConnexion">
                                <button className='btn-connecter' type="submit">
                                    <i className="fas fa-sign-in-alt"></i> Se connecter
                                </button>
                                </Link>

                                <hr />
                                
                                <p style={{textAlign: "center", color: 'white'}}>OU</p>

                                <div className='social-login'>
                                    <button className='btn google-btn social-btn' type="button" onClick={handleGoogleSignIn}>
                                        <span>
                                            <img className='Logo_Google' src={GoogleIcon} alt="Logo Google"></img> Se connecter via Google +
                                        </span>
                                    </button>
                                </div>
                                
                                <br/>

                                <div className='social-login2'>
                                    <button className='btn facebook-btn social-btn' type="button" onClick={handleFBSignIn}>
                                        <span>
                                            <img className='Logo_Facebook' src={FacebookIcon} alt="Logo Facebook"></img> Se connecter via Facebook
                                        </span>
                                    </button>
                                </div>

                                <p style={{display: 'flex', justifyContent: 'center', color: "white", paddingTop: 30}}>Vous n'avez pas de compte ?</p>
                                
                                <div className='box_create_account'>
                                    <Link to='/Senregistrer'>
                                        <button
                                            className='create_account'
                                            type='button'
                                            id="btn-signup"
                                    >
                                            <i className='fas fa-user-plus'></i> Créer un nouveau compte
                                        </button>
                                    </Link>  
                                </div>

                            </Form>
                        </div>
                    ) : (
                    
                    <div></div>
                    )
                }
                </Formik>
            </div>
            </div>
        </div>
    );
}

export default Connexion