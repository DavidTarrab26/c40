import './Nav.css'
import foto from '../../img/rick.png'

const Nav = () => {
    return ( 
        <div className='conteiner-fluid'>
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <img src={foto} width="80" height="54"/>
                </div>
                <div className='d-flex'>
                    <h5 className='navtext'>Docs</h5>
                    <h5 className='navtext'>About</h5>
                    <h5 className='navtext'>HELP US</h5>
                </div>
            </nav>
        </div>
     );
}
 
export default Nav;