import { Component} from "react";
import './NavbarStyles.css';
import {Link} from 'react-router-dom';
import { MenuItems } from "../components/MenuItems";

class Navbar extends Component{
state = {clicked: false};
handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
}
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                
                    <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars" }></i>
                    </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key = {index}>
                            <Link className=" nav-links {item.cName}" to={item.url}>
                                <i className={item.icon} style={{color:"red"}}></i>
                                {item.title}
                            </Link>
                        </li>
                        );
                    })}
                    <a href="./signup">
                   <button>signup</button>
                   </a>
                </ul>

            </nav>
        );
    }
}

export default Navbar;