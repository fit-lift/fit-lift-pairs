import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import '../Styles/Visitor.css';

class Visitors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      current: '',
      currentCalorie: 0,
      CalCalories: 0,
      showIt : false
    }
    this.calculate = this.calculate.bind(this);
    this.quantity = this.quantity.bind(this);
    this.current = this.current.bind(this);
  }
  calculate() {
    const lookUp = this.props.list.filter(food => food.name === this.state.current);
    console.log(lookUp[0].calories)
    this.setState({
      currentCalorie: lookUp[0].calories,
      calCalories: this.state.quantity * (lookUp[0].calories * 0.01),
      showIt: true
    })
  }
  quantity(e) {
    this.setState({ quantity: e.target.value })
  }
  current(e) {
    this.setState({ current: e.target.value })
  }

  render() {
    return (
      <div className="visitor-area">
        <div style={{ display: "flex" }} className="form">
          <h2 className="title">Calories Calculator</h2>
          <div className="food-options">
            <div className="move">
               <h3 className="foodSelect">Food: </h3>
                <select custom onChange={this.current} className='select'>
                  <option  ></option>
                  {this.props.list.map(food => {
                    return (
                      <option key={food.id} value={food.name} >{food.name}</option>
                    )
                  })}
                </select>
          </div>
          </div>
          <span className='calInput'><input type="number" placeholder="Quanitity" onChange={this.quantity} className="input"/> Grams</span>
          <button onClick={this.calculate} className="calorieButton">Get calories</button>
        </div>
          <div><h4 className="caloriesCal">Calories in your food:{this.state.calCalories} Kcal </h4></div> 
           <div className="definition">Calorie: a unit of energy, often used as a measurement of the amount of energy that food provides:
            ... An athlete in training needs a lot of calories. 
           This drink can only help you to lose weight as a part of a calorie-controlled diet.
            He found calorie-counting the best way of losing weight</div>
       {this.state.showIt &&  <div className="suggestions">
          <div> Cycling: {Math.floor(this.state.calCalories / 10.8)} min</div>
          <div> Jogging: {Math.floor(this.state.calCalories / 9.2)} min</div>
          <div> Weight Lifting: {Math.floor(this.state.calCalories / 5)} min</div>
          <div> Swimming: {Math.floor(this.state.calCalories / 11.8)} min</div>
        </div> }
      </div>
    )
  }
}

export default Visitors;