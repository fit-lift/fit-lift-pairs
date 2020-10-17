import React,{Component} from 'react';
import moment from 'moment';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import Meals from './Meals'
import '../Styles/Info.css'
const _ = require('underscore');

class Info extends Component{
        constructor(props){
            super(props);
            this.state={
                weight: 0,
                height: 0,
                BMI: 0,
                date: '',
                allData: [],
                user: '',
                display: false,
                labels: [],
                datasets: [
                    {
                        label: 'Body-weight Track',
                        fillColor: 'rgba(220,220,220,0.2)',
                        strokeColor: 'rgba(220,220,220,1)',
                        pointColor: 'rgba(220,220,220,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        backgroundColor: 'grba(220,220,0,1)',
                        data: []
                    }
                ]
            }
            this.calculate = this.calculate.bind(this);
            this.getBMI = this.getBMI.bind(this);
            this.saveInfo = this.saveInfo.bind(this);
            this.getAllData = this.getAllData.bind(this)
        }
    calculate(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
   async getBMI(){
       await this.setState({
            BMI: Math.floor(((this.state.weight / this.state.height) *100) / 2),
            date:  moment().format('LLLL')
        })
    }
    saveInfo(){
        const {weight,BMI,date} = this.state
        this.setState({user: this.props.username})
        axios.post('http://localhost:5000/users/user/info',{username:this.props.username,weight,BMI,date})
        .then(res=>{console.log(res)})
    }
    getAllData(){
        axios.post('http://localhost:5000/users/user/info/track',{username: this.state.user})
        .then(res=>{
            const allTime = _.pluck(res.data,'date');
            const progressWeight = _.pluck(res.data,'weight')
            this.setState((previous)=>({
                display: true,
                labels: allTime,
                datasets: [
                    {
                        label: previous.label,
                        fillColor: previous.fillColor,
                        strokeColor: previous.pointColor,
                        pointColor: previous.pointColor,
                        pointStrokeColor: previous.pointStrokeColor,
                        pointHighlightFill: previous.pointHighlightFill,
                        pointHighlightStroke: previous.pointHighlightStroke,
                        backgroundColor: 'grba(220,0,0,1)',
                        data: progressWeight,
                        
                    }
                ]
            }))      
        })
     }
    render(){
        const {weight,height,BMI} = this.state
        return(
            <div class="mainBody">
            <div className="informations">
            <div className="bmi">
                <input type="number" placeholder="Body weight" name="weight" className="inputweight" onChange={this.calculate}/>
                <input type="number" placeholder="height"  name="height" className="inputHeight" onChange={this.calculate}/>
                <button onClick={this.getBMI} className="calculatebmi">Calculate BMI</button>
            </div>
            <div style={{color:"black",fontSize:"20px"}} className="bodymass">
                Your body mass index is : {BMI}
            </div>
            <div>
                <button onClick={this.saveInfo} style={{color:"black"}} className="savingInfo">Save your informations</button>
            </div>
            <div style={{color:"black",fontSize:"20px"}} >
                <Meals BMI={BMI}/>
            </div>
            <button onClick={this.getAllData} className="progress">Progress History</button>
            </div>
            
            <div className="chartColor">
                
               {this.state.display && <Line 
                    data={this.state}
                    options={{
                        title:{
                            display: true,
                            text: 'Body-weight/Time',
                            fontSize: 20
                        },
                        legend:{
                            display: true,
                            position: 'right'
                        }
                    }}
               />}
            </div>
            </div>
        )
    }
}
export default Info;