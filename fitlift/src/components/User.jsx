import React,{Component} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Info from './Info';
import '../Styles/User.css'

class User extends Component{
     constructor(props){
         super(props);
         this.state={
             username: '',
             toggle: true,
             visible: true
         }
        this.changeView = this.changeView.bind(this);
    }
    changeView(){
        this.setState({toggle: !this.state.toggle})
    }
    response(r){
        if(r === 'OK'){
            this.setState({visible: false})
        }else{
            this.setState({visible: true})
        }     
    }
    responded(u){
        this.setState({username: u})
    }
   async logOn(a,u){
      await  this.setState({toggle: a, username: u})
      console.log(this.state)
    }
    render(){
        const {toggle} = this.state
            return(
                <div>
                <div>
                   {this.state.visible && toggle && <div><SignIn onResponse={(r,u)=>{this.response(r,u)}} onUserDone={(u)=>{this.responded(u)}}/>
                    <h3 className="tags">Not registred?</h3><h4 onClick={this.changeView} className="tags" style={{cursor:"pointer"}}>Register</h4></div>} 

                   {this.state.visible && !toggle && <div><SignUp onAccept={(a)=>{this.logOn(a)}}/>
                    <h3 className="tags">Already registred?</h3><h4 onClick={this.changeView} className="tags" style={{cursor:"pointer"}}>Go back</h4></div>} 
                </div>
                   {!this.state.visible && <div>
                     <Info username={this.state.username}/>
                    </div>}
                </div>
            )
    }
}
export default User;