import React from 'react';
import inActiveLength from "../assets/image/inActiveLength.png";
import inActiveVolume from "../assets/image/inActiveVolume.jpg";
import inActiveTemp from "../assets/image/inActivTemp.jpg";
import activeLength from "../assets/image/activeLength.jpg";
import activeVolume from "../assets/image/activeVolume.jpg";
import activeTemp from "../assets/image/activeTemp.jpg";
import "./Unit.scss";
import Input from './Input';


export default class Mesurement extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            //unitType1: ['Length'],
            unit1: ['Inch', 'Feet', 'Yard', 'Centimeter'],
            //unitType2: ['Temperature'],
            unit2: ['Celsius', 'Fahrenheit','Kelvin'],
            //unitType3: ['Volume'],
            unit3: ['Liter', 'Gallon', 'Millilitre'],
            options:[],
            
           
            openImg: false,
            imagetrue: true,
            openImg1: false,
            imagetrue1: true,
            openImg2: false,
            imagetrue2: true
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
      handleToggle=()=>{
        this.setState({ imagetrue: !this.state.imagetrue });
      }
      handleToggle1=()=>{
        this.setState({ imagetrue1: !this.state.imagetrue1 });
      }
      handleToggle2=()=>{
           this.setState({ imagetrue2: !this.state.imagetrue2 });
      }
      lengthOption=()=>{
        this.setState({options:this.state.unit1});
       console.log(this.state.options);
 
     }
 
     temperatureOption=()=>{
       this.setState({options:this.state.unit2});
       console.log("temperature array",this.state.options);
     }
     volumeOption=()=>{
       this.setState({options:this.state.unit3});
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
                        this.state.openImg ?
                            <div class="length" onClick={() => this.lengthOption()}
                                onMouseOver={this.handleColorToggle}
                                onMouseLeave={this.handleColorToggle}
                            ><img src={activeLength} class="lengthimage" alt="Length" />Length</div> :

                            <div class="image1" onClick={() => this.lengthOption()}
                                onMouseOver={this.handleColorToggle}
                                onMouseLeave={this.handleColorToggle}
                            ><img src={inActiveLength} class="lengthimage" alt="Length" />Length</div>
                    }

                    {
                        this.state.openImg1 ?
                            <div class="temperature" onClick={() => this.temperatureOption()}
                                onMouseOver={this.handleColorToggle1}
                                onMouseLeave={this.handleColorToggle1}
                            ><img src={activeTemp} class="tempimage" alt="Temperature" />Temperature</div> :
                            <div class="image2" onClick={() => this.temperatureOption()}
                                onMouseOver={this.handleColorToggle1}
                                onMouseLeave={this.handleColorToggle1}
                            ><img src={inActiveTemp} class="tempimage" alt="Temperature" />Temperature</div>
                    }

                    {
                        this.state.openImg2 ?
                            <div class="volume" onClick={() => this.volumeOption()}
                                onMouseOver={this.handleColorToggle2}
                                onMouseLeave={this.handleColorToggle2}
                            ><img src={activeVolume} class="volumeimage" alt="Volume" />Volume</div> :
                            <div class="image3" onClick={() => this.volumeOption()}
                                onMouseOver={this.handleColorToggle2}
                                onMouseLeave={this.handleColorToggle2}
                            ><img src={inActiveVolume} class="volumeimage" alt="Volume" />Volume</div>
                    }
                </div>

                <Input  Units={this.state.options}/>
            </div>
        );
    }
}