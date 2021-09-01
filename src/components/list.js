import React, { Component } from 'react'
import '../App.css'

class list extends Component {
    render() {
        return (
            <div>
                <div className="heading">
                    <h3>Sl no</h3>
                    <h3>first name</h3>
                    <h3>Last Name</h3>
                    <h3>Email id</h3>
                    <h3>DOB</h3>
                </div>
                {this.props.entries.map((e,i)=>{
                    return (
                        <div className="single-entry">
                        <h3>{i+1}</h3>
                        <h3>{e.firstName}</h3>
                        <h3>{e.lastName}</h3>
                        <h3>{e.emailId}</h3>
                        <h3>{e.date}</h3>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default list
