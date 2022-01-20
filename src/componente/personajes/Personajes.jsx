import axios from 'axios';
import { useEffect, useState } from 'react';
import Personaje from '../personaje/Personaje';
import './Personajes.css'

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])

    useEffect(()=>{
        axios
    .get('https://rickandmortyapi.com/api/character')
    .then((response)=>{
        setPersonajes(response.data.results)
    })
    },[])
    
    return ( 
        <>
        <div className='negro'>
            {personajes.length == 0 ? 
                ''
            :
                <div className='row container-fluid'>
                {personajes.map((personaje)=>(
                    <Personaje key={personaje.id} {...personaje}/>
                ))}
                </div>
            }
        </div>
        </>
     );
}
 
export default Personajes;