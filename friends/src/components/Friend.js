import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'


const Friend = props =>{
    const deleteFriend = e =>{
        e.preventDefault()
        axiosWithAuth()
        .delete(`friends/${props.friend.id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
     }

        return(
            <div>
            {props.friend.name}, age:{props.friend.age}<br/>
            email:{props.friend.email}<br/>
            <button onClick={deleteFriend}>delete</button>
        </div>
        )

    
}

export default Friend



