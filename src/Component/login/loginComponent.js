import React,{Component} from 'react';
//import Header from '../../header.js'
import './login.css';
const url = "https://loginlogoutapp.herokuapp.com/api/auth/login";

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'oyash@gmail.com',
            password:'64233402',
            message:''
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    login = () => {
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.auth === false){
                this.setState({message:data.token})
            }else{
                sessionStorage.setItem('ltk',data.token)
                this.props.history.push('/')
            }
        })
    }

    render(){
        return(
            <>
            
            <div className="container">
                
                <div className="register_box">
                    <div className="registerHeading">
                        Login
                    </div>
                    <div className="loginBody">
                        <h3 style={{color:'red'}}>{this.state.message}</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange}/>
                            </div>
                             <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange}/>
                            </div>
                            
                        </div>
                        <button className="btn btn-info btnLogin" onClick={this.login}>Login</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Login;