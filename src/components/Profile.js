import React, { Component } from 'react'

class Profile extends Component {
    state = {
        present: false
    }
    
    // TODO list to make a presence button 
    // X Hardcode a state
    // X Use it in my component
    // X Change the state in the code to test
    // X Component (some button?)
    // X Event listener & handler
    // X Event handler -> change present to true

    markAsPresent = () => {
        console.log('hello')
        // this.state.present = true // Wrong :( 
        // By calling this.setState React knows the underlying data
        // has changed, and it rerenders the component
        // which updates what the user sees on the page
        this.setState({ present: true })
    }

    render(){
        console.log('PROFILE GOT RENDERED')
        if(this.props.codename === undefined){
            return <h1>CLASSIFIED</h1>
        }

        return <div className="Profile">
            {/* INTERPOLATE VALUES using {} -> this.props.name */}
            USERNAME: { this.props.name }
            <br />
            DESIGNATION: { this.props.designation }
            <br />
            CODENAME: { this.props.codename }
            <p>{ this.state.present ? 'PRESENT!' : 'ABSENT' }</p>
            <button onClick={this.markAsPresent} >Mark as present</button>
        </div>
    }
}

export default Profile
