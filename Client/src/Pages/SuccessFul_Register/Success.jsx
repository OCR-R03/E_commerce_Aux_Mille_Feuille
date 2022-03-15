import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const LoadingToRedirect = () => {

    const [count, setCount] = useState(5);
    
    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        },1000)

        count === 0 && navigate("/Accueil")
        return () => clearInterval(interval)
    }, [count, navigate])

  return (
    
    <div className='Container'>
      
      <div className='Wrapper'>
        <h1 className="p-3 mt-5">Formulaire soumis</h1>
      </div>
      
      <div className="alert alert-success mt-3">
        Vous êtes connecté !
      </div>
      <div className='Container_text_count'>
        <p className='count-text'>Vous allez être rediriger dans {count} secondes</p>
      </div>
      
    
    </div>
  )
}

export default LoadingToRedirect