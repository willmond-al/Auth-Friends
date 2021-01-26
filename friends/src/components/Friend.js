import React from 'react'

// export const Friend = props =>{
//     return(
//         <div>
//             {props.name}
//         </div>
//     )
// }

class Friend extends React.Component{
    render(){
        return(
            <div>
            {this.props.friend.name}
        </div>
        )

    }
}

export default Friend



