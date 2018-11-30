import React from 'react'

import Layout from '../components/layout'
import '../styles/main.css'

const IndexPage = () => (
  <>
    <Layout />

    <div className="hero">
      <img src={require('../images/hero.jpg')} alt="hero woods" />
      <h1 className="centered">Todo lo que necesitas para poder estar siempre listo</h1>
    </div>

    <div className="parragraph">
      <h3>¿Qué es la Scoutpedia?</h3>
      <p>Es un proyecto comunitario en el cual se busca recabar la mayor cantidad de conocimiento referente al movimiento scout, siempre 
        cumpliendo con las siguientes características en su información</p>
      <ul>
        <li>Confiabilidad </li>
        <li>Claridad </li>
        <li>Certeza</li>
        <li>Precisión </li>
        <li>Relevancia</li>
      </ul>
    </div>

    <div className="parragraph">
      <h3>¿Qué puedo encontrar aquí?</h3>
      <p>Podrás consultar información dependiendo del momento en el que 
        te encuentres en tu vida scout además de recursos útiles como 
        pueden ser códigos de mensajes, ejemplos de formaciones, etc.
      </p>
    </div>

    <div className="eco">
      <h3>Intenta dejar el mundo mejor de lo que te lo encontraste</h3>
      <img src={require('../images/leaf.png')} className='leaf'/>
      <p>Uno de los propósitos generales de la Scoutpedia es reducir
         considerablemente el material impreso que suele repartirse 
         entre las diferentes secciones con el único fin de informar.
          Siendo esta plataforma un recurso accesible a cualquier persona 
          sin la necesidad de gastar una sola hoja de papel.
      </p>
    </div>
    <footer></footer>
  </>
)

export default IndexPage
