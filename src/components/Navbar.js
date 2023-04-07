import React, { Component } from 'react'
import {Menuitems} from './Menuitems'
import {Nav} from './Nav.css'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state={
    clicked:false
  }
  handleClick=()=>{
    this.setState({
      clicked:!this.state.clicked
    })
  }
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Naruto Trips</h1>
        <div className="Menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"}></i>
          

        </div>
        <ul className={this.state.clicked ? "Nav-menu active":"Nav-menu"}>
          { Menuitems.map((item,index)=>{
              return(
                <li key={index}>
                <Link className={item.cName}to={item.url}>
                   <i className={item.icon}></i>
                   {item.title}
                </Link>
              
    
    
              </li>

              );

            }
          )}
          <button>Sign Up</button>
         
        </ul>
        

      </nav>
    )
  }
}
