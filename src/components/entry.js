import React, { Component } from 'react'
import '../App.css'

class entry extends Component {

    constructor(props) {
        super(props);
        this.state = {
          firstName:"",
          lastName:"",
          emailId:"",
          date:""
        };

        this.submitClicked = this.submitClicked.bind(this)
      }

    submitClicked() {
        const {firstName,lastName,emailId,date} = this.state
        if (firstName == "" || lastName == "" || emailId == "" || date == "") {
            return
        }
        this.props.addEntry({firstName,lastName,emailId,date})
        this.setState({
            firstName:"",
            lastName:"",
            emailId:"",
            date:""
        })
    }

    render() {

        let {firstName,lastName,emailId,date} = this.state

        return (
            <div className="entryBox">
                <input type="text" placeholder="First Name" className="inputField" onChange={(e)=>this.setState({firstName:e.target.value})} value={firstName}/>
                <input type="text" placeholder = "Last Name" className = "inputField" onChange={(e)=>this.setState({lastName:e.target.value})} value={lastName}/>
                <input type="email" placeholder="Email id" className="inputField" onChange={(e)=>this.setState({emailId:e.target.value})} value={emailId}/>
                <input type="date" className="inputField" onChange={(e)=>this.setState({date:e.target.value})} value={date}/>
                <button className="submit" style={{margin:"5px"}} onClick={this.submitClicked}>Submit</button>
            </div>
        )
    }
}

export default entry
