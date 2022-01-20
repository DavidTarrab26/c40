import axios from 'axios';
import { useEffect, useState } from 'react';
import { useGet } from '../../customHooks/useHTTP';
import Personaje from '../personaje/Personaje';
import './Personajes.css'

const Personajes = () => {
    const [info, fetching] = useGet('https://rickandmortyapi.com/api/character')
    const {results} = info 

    /* useEffect(()=>{
        axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response)=>{
        setPersonajes(response.data.results)
    })
    },[]) */
    
    return ( 
        <>
        <div className='negro'>
            {fetching ? 
                <h2>cargando...</h2>
            :
                <div className='row container-fluid'>
                {results.map((personaje)=>(
                    <Personaje key={personaje.id} {...personaje}/>
                ))}
                </div>
            }
        </div>
        </>
     );
}
 
export default Personajes;