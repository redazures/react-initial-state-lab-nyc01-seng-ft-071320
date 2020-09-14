// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
    constructor(props){
        console.log(props.initialCount)
        super()
        this.state={
            secondsLeft:props.initialCount
        }

    }

    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        // if (this.state.secondsLeft>=0){this.setState.({secondsLeft:`${secondsLeft-1}`})} //this.setState({color:"blue"})
        return(
            <div>
                {message}
            </div>
        )
    }
}

export default Bomb;