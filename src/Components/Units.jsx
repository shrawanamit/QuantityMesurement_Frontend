import React from 'react';
//import  inActiveLength from '../image/inActiveLength.png';
//import  inActiveVolume from "../image/inActiveVolume.jpg";
//import  inActiveTemp from "../image/inActiveTemp.jpg";
import "./Unit.scss";

export default class Mesurement extends React.Component {
    render() {
        return (
            <div className="body">
                <p>CHOOSE Type</p>
                <div className="image">
                    <div className="length"></div>
                    <div className="temperature" ></div>
                    <div className="volume"></div>
                    
                </div>
            </div>


        );
    }
}