import React, { Component } from 'react';
import axios from 'axios';
import Visitor from './components/Visitors.jsx';
import User from './components/User.jsx'
import './Styles/Main.css';
import Welcome from './components/Welcome.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      view: 'none',
      main: 'not'
    }
    this.changeIt= this.changeIt.bind(this)
  }
  componentDidMount() {
    axios.get('http://localhost:5000/visitors')
      .then(res => {
        this.setState({ list: res.data })
      })
  }
  changeView(option){
    this.setState({
      view: option,
      main: "main"
    })
  }
  changeIt(){
    this.setState({main: "not"})
  }
  render() {
    return (
      <div className="App">
          <div className="nav">
              <span className="logo" onClick={this.changeIt}>Fit-Lift</span>
              <div className="menu"><span onClick={()=>{this.changeView('visitors')}}>Visitors</span>
              <span className="userMenu" onClick={()=>{this.changeView('User')}}>User</span></div>
          </div>
          <div className="Main">
            <div className="content">{this.state.main === "main" ? <div> {this.state.view === 'visitors'
            ? <Visitor list={this.state.list} /> 
              : <User list={this.state.list} />
              }</div> :  <div><Welcome /></div>}
          </div>
      </div>
      </div>
    );
  }
}

export default App;
