import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Friend from './Friend'
import AddFriend from '../forms/AddFriend'

class Friends extends React.Component{
    state = {
        friends: []   
    }

    componentDidMount(){
        this.getFriends()
    }

    getFriends = () =>{
        axiosWithAuth()
        .get('/friends')
        .then(res =>{
            this.setState({
                friends: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    



    render(){
        return(
            <div>
                <h2>The Friends:</h2>
                <ol>
                {this.state.friends.map(friend=>{
                    return(
                        <li>
                            <Friend key={friend.id} friend={friend}/>
                        </li>
                    )
                })}
                </ol>
                <AddFriend/>
                
            </div>
        )
    }

}

export default Friends