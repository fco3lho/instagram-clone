import './Auth.css'

//Components
import {Link} from 'react-router-dom'

//Hooks
import {useState, useEffect} from 'react'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h2>Instagram</h2>
      <p className="subtitle">Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Confirme a senha'/>
        <input type="submit" value="Cadastrar" />
      </form>

      <p>
        Tem uma conta? <Link to="/login">Conecte-se</Link>
      </p>
    </div>
  )
}

export default Register