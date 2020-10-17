import React,{Component} from 'react';
import '../Styles/Welcome.css'
class Welcome extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="block">
                <h1 style={{color: "orange"}}>Welcome</h1><h4 style={{color: "white"}}>Be Fit n Lift</h4>
                <h4 style={{color: "white"}}>Your BMI calculator and health Guide</h4>
            </div>
        )
    }
}
export default Welcome