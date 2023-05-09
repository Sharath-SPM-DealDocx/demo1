import React, { Component } from 'react'
import './DestinationStyles.css';
import Mountain1 from '../assets/images/1.jpg';
import Mountain2 from '../assets/images/2.jpg';
import Mountain3 from '../assets/images/3.jpg';
import Mountain4 from '../assets/images/4.jpg';

class  DestinatioData extends Component{
    render(){
        return(
            <div className="{this.props.className}">
                <div className = "des-text">
                        <h2>{this.props.heading}</h2>
                        <p>
                            {this.props.text}
                        </p>
                </div>
                <div className ="image" >
                    <img  alt="image not found" src={this.props.image1} />
                    <img  alt="image not found" src={this.props.image2} />
                </div>
            </div>
        );
    }
} 

export default DestinatioData;