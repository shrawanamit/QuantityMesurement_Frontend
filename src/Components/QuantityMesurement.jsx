import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Quantity.scss";
import Mesurement from './Mesurement';


export class QuantityMesurement extends React.Component {
    render() {
        return (
            <div className="body">
                <div className="hedder">
                    <div className="history_btn">
                    <Button color="primary">History</Button>
                    </div>
                </div>
                <div className="appbar">
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" align="center">
                                Welcome To Quantity Mesurement
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <Mesurement />
            </div>
        );
    }
}