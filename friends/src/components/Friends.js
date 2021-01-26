import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

import Friend from './Friend'

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
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                {this.state.friends.map(friend=>{
                    return <Friend friend={friend}/>
                })}
                
            </div>
        )
    }

}

export default Friends