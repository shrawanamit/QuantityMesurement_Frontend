import React from 'react';
import Button from '@material-ui/core/Button';
import "../SCSS/Quantity.scss";
import Mesurement from './Units';

import { Link } from "react-router-dom";



export class QuantityMesurement extends React.Component {
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