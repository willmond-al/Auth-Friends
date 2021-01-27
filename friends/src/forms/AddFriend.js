import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

class AddFriend extends React.Component{

state = {
    newFriend:{
        name: '',
        age:'',
        email:''
    }
}

handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  submit = () =>{
      axiosWithAuth()
      .post('http://localhost:5000/api/friends', this.state.newFriend)
      .then(res=>{
        console.log(res)
      })
      .catch(err =>{
          console.log(err)
      })
  }


    render(){
    return(
    <div>
        <h2>Add a new Friend to the list:</h2>
    <form onSubmit={this.submit}>
        <label>name:
            <input
            type='text'
            name='name'
            value={this.state.newFriend.name}
            onChange={this.handleChange}
            />
        </label>
        <label>age:
            <input
            type='text'
            name='age'
            value={this.state.newFriend.age}
            onChange={this.handleChange}
            />
        </label>
        <label>email:
            <input
            type='text'
            name='email'
            value={this.state.newFriend.email}
            onChange={this.handleChange}
            />
        </label>
        <button>submit</button>
</form>
    </div>
    )
    }
}

export default AddFriend