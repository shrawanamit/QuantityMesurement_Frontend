import React from 'react';
import "../SCSS/input.scss";
import options from '../Services/Service';
let service = new options();

export default class Input extends React.Component {

    // passing value from parent to child
    constructor(props) {
        super(props);

        // set default to state 
        this.state = {
            inputValue: 12,
            outputValue: 1,
            inputOption: 'Inch',
            outputOption: 'Feet',

        };
    }

    //onchange input option
    onChangeFirst = (e) => {
        let value = e.target.value;
        this.setState({ inputOption: value }, () => { console.log(this.state.inputOption); });

    }

    //on change input option
    onChangeSecond = (e) => {
        let value = e.target.value;
        this.setState({ outputOption: value }, () => { console.log(this.state.inputOption); });

    }

    // on change input value

    onChangeInput = (e) => {
        this.setState({ inputValue: e.target.value }, () => this.optiontype());
        console.log(this.state.inputOption + 'To' + this.state.outputOption);
    }
    optiontype() {

        //concatinate the input and output option
        var unitVal = this.state.inputOption + 'To' + this.state.outputOption;

        // combine the data Value and conversion type into one
        var inputValue = {
            Value: this.state.inputValue,
            ConversionType: unitVal
        }

        // calling service method,passing data to 

        service.optiontype(inputValue).then((data) => {
            if (this.state.numberValue !== 0 || this.state.numberValue !== null) {
                this.setState({ outputValue: data.data.data.result });
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        let Quantity = this.props.Units;
        return (
            <div className="inputBody">
                <div className="from">FROM<br />
                    <input className="input" type={"number"} value={this.state.inputValue} onChange={(event) => this.onChangeInput(event)}></input>
                    <br />

                    <select className="inputSelect" value={this.state.inputOption} onChange={(element) => this.onChangeFirst(element)}>
                        {/* maping the unit to option  */}
                        {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
                <div className="to">TO <br />
                    <input className="output" type={"number"} value={this.state.outputValue} onChange={(event) => this.onChangeInput(event)}></input>
                    <br />
                    <select className="outputSelect" value={this.state.outputOption} onChange={(element) => this.onChangeSecond(element)}>

                        {/* maping the unit to option  */}
                        {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
            </div>
        );
    }
}