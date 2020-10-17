import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/SingUp.css'
class SignUp extends Component {
    constructor(props) {
      super(props);
        this.state={
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
            alert: '',
        }
        this.saveChange = this.saveChange.bind(this);
        this.register = this.register.bind(this)
    }
    saveChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
        if(this.state.password !== this.state.repeatPassword){
            this.setState({
                    alert: ''
            })

        console.log(this.state)
    }
}
    register(e){
        e.preventDefault();
        const {username,email,password,repeatedPassword,alert,visible} = this.state
        if((username.length !== 0) && (email.length !==0) && (password.length !==0)){
        axios.post('http://localhost:5000/users',{username,email,password})
        .then(res=>{
            if(res.data === 'Nice'){
                this.props.onAccept(true)
            }
        })
        }else{
            alert('Put A God Damn Name')
        }
    }
    render() {
        const {username,email,password,repeatedPassword,alert,visible} = this.state
        return (
            <div  className="signUp">
                <h1 className="textSign">Sign up</h1>
                <form action="" onSubmit={this.register} className='register-form'>
                    <input type="text" placeholder="Username" name='username' onChange={this.saveChange} className='register'/>
                    <input type="email" placeholder="Email" name='email' onChange={this.saveChange} className='register'/>
                    <input type="text" placeholder="Password" name='password' onChange={this.saveChange} className='register'/>
                    <input type="text" placeholder="Repeat password" name='repeatPassword'onChange={this.saveChange} className='register'/>
                    <p>{alert}</p>
                    <div className="payment">
                        <div><input type="number" placeholder="Card number" className='register'/></div>
                        <span><input type="number" placeholder="MM" className='register'/></span><span><input type="number" placeholder="YY" className='register'/></span>
                        <span><input type="number" placeholder="CV code" className='register'/></span>
                    </div>               
                    <button type="submit" className="buttonregis">Pay/Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;