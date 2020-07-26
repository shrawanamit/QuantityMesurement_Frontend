import React from 'react';
import "./input.scss";
import options from '../Services/Service';
let service = new options();

export default class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedUnitType: '',
            inputValue: 0,
            outputValue: 0
        };
    }

    onChangeFirst=(e)=>{  
        let value = e.target.value;
        this.setState({ inputUnit: value}, ()=>this.optiontype());
        
    }
    onChangeSecond=(e)=>{
        let value = e.target.value;
        this.setState({ outputUnit: value}, ()=>this.optiontype());
        
    }

    onChangeInput=(e)=>{
        this.setState({  inputValue: e.target.value }, ()=>this.optiontype());
    }
    optiontype(){
        
        // var unitVal = `${String(this.state.inputUnit)}To${String(this.state.outputUnit)}`;
        var str2="To";
        var unitVal=this.state.inputUnit.concat(str2, this.state.outputUnit);
        
        var inputValue={
            Value: this.state.inputValue,
            OptionType: unitVal
        }
        service.optiontype(inputValue).then((data)=>{
            if(this.state.numberValue !== 0 || this.state.numberValue !== null){
                this.setState({ outputValue: data.data.data.result });
            }
            }).catch((err)=>{
                console.log(err);
            })
    }


    render() {
        let Quantity=this.props.Units;
        return (
            <div className="inputBody">
                <div className="from">FROM<br />
                    <input className="input" type={"number"} value={this.state.inputValue} onChange={(event)=>this.onChangeInput(event)}></input>
                    <br />
                    <select className="inputSelect" value={this.state.inputUnit} onChange={(element)=>this.onChangeFirst(element)}>
                    {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
                <div className="to">TO <br />
                    <input className="output" type={"number"} value={this.state.outputValue} onChange={(event)=>this.onChangeInput(event)}></input>
                    <br />
                    <select className="outputSelect" value={this.state.outputUnit} onChange={(element)=>this.onChangeSecond(element)}>
                    {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
            </div>
        );
    }
}