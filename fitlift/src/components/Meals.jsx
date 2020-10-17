import React,{Component} from 'react';
import { extend } from 'underscore';
import axios from 'axios'

class Meals extends Component{
        constructor(props){
            super(props);
            this.state={
                plan: [],
                msg: ''
            };
        this.mealplan = this.mealplan.bind(this)
        }
    mealplan(){
        const {msg} = this.state

        if(this.props.BMI > 24){
            this.setState({msg: 'overweight'})

            axios.post('http://localhost:5000/users/user/info/meals',{msg:'overweight'})
            .then(res=>{
                this.setState({
                    plan : res.data
                })
            })
        }else if(this.props.BMI < 20){
            this.setState({msg: 'underweight'})
            axios.post('http://localhost:5000/users/user/info/meals',{msg:'underweight'})
            .then(res=>{
                this.setState({
                    plan : res.data
                })
            })
        }else{
            this.setState({msg: 'optimal'})
            axios.post('http://localhost:5000/users/user/info/meals',{msg:'optimal'})
            .then(res=>{
                this.setState({
                    plan : res.data
                })
            })
        }
        console.log(this.state)
       
    }
    
    render(){
        return(
            <div>
                <button onClick={this.mealplan} className="getMeals">Get meals plan</button>
                <div className="informeals">
                  {this.state.plan.map((e,i) => {
                      return (
                          <div key={i}>
                              <span> meal{i+1} : {e.carbs} </span>
                              <span> , {e.protein} </span>
                              <span> , {e.fats} </span>
                          </div>
                      )
                  } )}
                </div>
            </div>
        )
    }
}
export default Meals;