import React from 'react';
import inActiveLength from "../assets/image/inActiveLength.png";
import activeLength from "../assets/image/activeLength.jpg";
import activeHot from "../assets/image/activehot.svg";
import activeBekar from "../assets/image/activeBekar.svg";
import inActiveBekar from "../assets/image/inActiveBekar.svg";
import inActiveHot from "../assets/image/inActiveHot.svg";
import "../SCSS/Unit.scss";
import Input from './Input';


export default class Mesurement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            unit2: ['Celsius', 'Fahrenheit','Kelvin'],
            unit3: ['Litre', 'Gallon', 'Millilitre'],
            options:[],
            openImg: false,
            openImg1: false,
            openImg2: false,
            selected:'Length',
        };
    }

    handleColorToggle = () => {
        this.setState({ openImg: !this.state.openImg });
        console.log(this.state.openImg);
    }
    handleColorToggle1 = () => {
        this.setState({ openImg1: !this.state.openImg1 });
        console.log(this.state.openImg1);
      }
      handleColorToggle2 = () => {
        this.setState({ openImg2: !this.state.openImg2 });
        console.log(this.state.openImg2);
      }


      lengthOption=()=>{
        this.setState({options:this.state.unit1,selected:'Length'});
       console.log(this.state.options);
       //this.handleColorToggle();
     }
 
     temperatureOption=()=>{
       this.setState({options:this.state.unit2,selected:'Temperature'});
       console.log("temperature array",this.state.options);
     }
     volumeOption=()=>{
       this.setState({options:this.state.unit3,selected:'Volume'});
       console.log(this.state.options);
     }



    render() {
        return (
            <div className="body">
                <div class="header">
                    <span class="header-span">CHOOSE TYPE</span>
                </div>
                <div class="home">

                    {
                        this.state.openImg || this.state.selected == 'Length' ?
                            <div class="length" onClick={() => this.lengthOption() }
                                onMouseOver={this.handleColorToggle}
                                onMouseLeave={this.handleColorToggle}
                            ><img src={activeLength} class="lengthimage" alt="Length" />Length</div> :

                            <div class="image1" onClick={() => this.lengthOption()}
                                onMouseOver={this.handleColorToggle}
                                onMouseLeave={this.handleColorToggle}
                            ><img src={inActiveLength} class="lengthimage" alt="Length" />Length</div>
                    }

                    {
                        this.state.openImg1 || this.state.selected == 'Temperature' ?
                            <div class="temperature" onClick={() => this.temperatureOption()}
                                onMouseOver={this.handleColorToggle1}
                                onMouseLeave={this.handleColorToggle1}
                            ><img src={activeHot} class="tempimage" alt="Temperature" />Temperature</div> :
                            <div class="image2" onClick={() => this.temperatureOption()}
                                onMouseOver={this.handleColorToggle1}
                                onMouseLeave={this.handleColorToggle1}
                            ><img src={inActiveHot} class="tempimage" alt="Temperature" />Temperature</div>
                    }

                    {
                        this.state.openImg2 || this.state.selected == 'Volume'?
                            <div class="volume" onClick={() => this.volumeOption()}
                                onMouseOver={this.handleColorToggle2}
                                onMouseLeave={this.handleColorToggle2}
                            ><img src={activeBekar} class="volumeimage" alt="Volume" />Volume</div> :
                            <div class="image3" onClick={() => this.volumeOption()}
                                onMouseOver={this.handleColorToggle2}
                                onMouseLeave={this.handleColorToggle2}
                            ><img src={inActiveBekar} class="volumeimage" alt="Volume" />Volume</div>
                    }
                </div>

                 {/* passing value to input component  */}
                <Input  Units={this.state.options}/>
            </div>
        );
    }
}