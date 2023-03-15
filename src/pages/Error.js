import React from "react";
import { Link } from "react-router-dom"


const Error = () => {
    return (
      <div className='error__page'>
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link className="backlink" to="/">Retourner sur la page d'ccueil</Link>
      </div>
    )
  }
  
  export default Error