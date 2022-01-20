import './Personaje.css'

const Personaje = ({name, image, status, species}) => {
    return ( 
        <div className='col-3 my-3'>
            <div className="card shadow radius bg-dark" style={{width: '18rem'}}>
                <img src={image} className='radius'/>
                <div className="card-body">
                    <h5 className="card-title" style={{color: 'white'}}>{name}</h5>
                    <p className="card-text texto">{status}</p>
                    <p className="card-text texto">{species}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
     );
}
 
export default Personaje;