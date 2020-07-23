import React from 'react';
import "./input.scss";
export default class Input extends React.Component {
    render() {
        return (
            <div className="main">
                
                    <div><p className="from">FROM</p></div>
                    <div><p className="to">TO</p></div>
                
                
                <div className="text">
                    <div >
                        <input type="text" className="input1" >
                        </input>
                    </div>
                    <div >
                        <input type="text" className="input2" >
                        </input>
                    </div>
                </div>
                <div className="dropDown">
                    <div >
                        <select name="Length" className="dropDown1" >
                            <option >centimeter</option>
                            <option >inch</option>
                            <option >Yaad</option>
                            <option >meter</option>
                        </select>
                    </div>
                    <div >
                        <select name="Length" className="dropDown1">
                            <option >centimeter</option>
                            <option >inch</option>
                            <option >Yaad</option>
                            <option >meter</option>
                        </select>
                    </div>

                </div>
            </div>
        );
    }
}