import React, { Component } from 'react'
import axios from 'axios';
import '../Styles/SignIn.css'
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            visible: true
        }
        this.saveChange = this.saveChange.bind(this);
        this.sendAuto = this.sendAuto.bind(this)
    }
    saveChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    sendAuto(e){
        e.preventDefault();
        const {user,password} = this.state
        this.props.onUserDone(user)
        axios.post('http://localhost:5000/users/signin',{user,password})
        .then(res=>{
            if(res.data === 'OK'){
                this.setState({visible: false})
            }else{
                this.setState({visible: true})
            }
            this.props.onResponse(res.data)
        })
    }
    render() {
        const {user,password,visible} = this.state
        return (
            <div>
          { visible && <div className="logIn">
                    <h1 className="greet">Log In</h1>
                <form action="" onSubmit={this.sendAuto} className="singIn">
                    <input type="text" placeholder="Username or email" name='user' onChange={this.saveChange} className="nameInput"/>
                    <input type="password" placeholder="Password" name='password' onChange={this.saveChange} className="passwordInput"/>
                    <button type="submit" className="submitInput">Sign in</button>
                    <div className="text">
                    The user has a unique id, name , and password.
                    So please keep your informations safe and we will help you to keep track of your bodyweight
                   </div>
                </form>
                
            </div> }
            </div>

        )
    }
}

export default SignIn;