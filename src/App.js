import React, { Component } from 'react'
import Entry from './components/entry.js'
import List from './components/list.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      entries:[]
    };

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry(entry) {
    let entries_copy = this.state.entries.slice();
    entries_copy.push(entry)
    this.setState({entries:entries_copy})
  }

  render() {
    return (
      <div>
         <Entry addEntry = {this.addEntry}/>
         {this.state.entries.length != 0 && <List entries={this.state.entries}/>}
      </div>
    )
  }
}

export default App
