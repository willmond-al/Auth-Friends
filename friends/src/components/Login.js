import React from 'react'

import axios from 'axios'

class Login extends React.Component{
    state ={
        credentials:{
            username: '',
            password: ''
        }
    }

    handleChange= e =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }



    login= e =>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", this.state.credentials)
        .then(res=>{
            localStorage.setItem('token', res.data.payload)
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                <label>Username:
                <input
                type='text'
                name='username'
                placeholder='username'
                onChange={this.handleChange}/>
                </label>
                <label>Password:
                <input
                type='password'
                name='password'
                placeholder='password'
                onChange={this.handleChange}/>
                </label>
                <button>Login</button>
                </form>
            </div>
        )
    }


}

export default Login 