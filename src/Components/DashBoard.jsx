import React from 'react';
import Button from '@material-ui/core/Button';
import "./Quantity.scss";
import Mesurement from './Units';

import { Link } from "react-router-dom";



export class QuantityMesurement extends React.Component {
    state={
        unitType1: ['Length'],
        unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
        unitType2: ['Temperature'],
        unit2: ['Celsius', 'Fahrenheit','Kelvin'],
        unitType3: ['Volume'],
        unit3: ['Liter', 'Gallon', 'Millilitre'],
        options:[],
    };
    render() {
        return (
            <div className="body">
                <div className="hedder">
                    <div className="hedder_body">
                        <div className="quanment">Quanment</div>
                        <div className="history_btn" >
                            <Link to ="/History">
                                    <Button  onClick="/History">History</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="header-container">
                        <span class="header-text" align="center">Welcome To Quantity Measurement</span>
                    </div>
                    <Mesurement />
                </div>
            </div>
        );
    }
}