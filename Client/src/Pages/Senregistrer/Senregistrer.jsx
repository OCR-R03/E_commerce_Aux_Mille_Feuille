import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import { registerInitiate } from '../../Redux/actions'

const Senregistrer = () => {

    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })

    const { currentUser } = useSelector((state) => state.user)

    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser) {
            navigate("/")
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch()

    const {email, password, displayName, passwordConfirm} = state

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== passwordConfirm) {
            return
        }
        dispatch(registerInitiate(email, password, displayName))
        setState({email: "", displayName: "", password: "", passwordConfirm: ""})
    }
    
    const handleChange = (e) => {
        let {name, value} = e.target;
        setState({ ...state, [name]: value })
    }

    return (
        <div className='Container'>
            <div className='register-form'>

                <form className='form-signup' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{textAlign: "center", color: 'white'}}>
                        S'enregistrer
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
                    <Link to="/Success">
                    <button className='btn-connecter' type="submit">
                        <i className="fas fa-user-plus"></i> S'enregistrer
                    </button>
                    </Link>

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
