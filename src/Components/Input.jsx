import React from 'react';
import "./input.scss";
import options from '../Services/Service';
let service = new options();

export default class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedUnitType: '',
            inputValue: 12,
            outputValue: 1,
            inputOption:'Inch',
            outputOption:'Feet',
        };
    }

    onChangeFirst=(e)=>{  
        let value = e.target.value;
        this.setState({ inputOption: value},()=>{console.log(this.state.inputOption);});
        
    }
    onChangeSecond=(e)=>{
        let value = e.target.value;
        this.setState({ outputOption: value},()=>{console.log(this.state.inputOption);});
        
    }

    onChangeInput=(e)=>{
        this.setState({  inputValue: e.target.value },()=>this.optiontype());
        console.log(this.state.inputOption +'To'+ this.state.outputOption);
            
    }
    optiontype(){
           var unitVal = this.state.inputOption +'To'+ this.state.outputOption;
            var inputValue={
                Value: this.state.inputValue,
                ConversionType: unitVal
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
                    <select className="inputSelect" value={this.state.inputOption} onChange={(element)=>this.onChangeFirst(element)}>
                    {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
                <div className="to">TO <br />
                    <input className="output" type={"number"} value={this.state.outputValue} onChange={(event)=>this.onChangeInput(event)}></input>
                    <br />
                    <select className="outputSelect" value={this.state.outputOption} onChange={(element)=>this.onChangeSecond(element)}>
                    {Quantity.map((element, key) => {
                            return <option key={key}>{element}</option>;
                        })}
                    </select>
                </div>
            </div>
        );
    }
}