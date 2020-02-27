import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons1: [
      { id: "aaa", name: "Ons", age: "25" },
      { id: "bbb", name: "Fadwa", age: "29" },
      { id: "ccc", name: "Safa", age: "24" }
    ],
    persons2: [

    ],
    showPersons: true,
    ElementStyle: {
      color: '#DA70D6'

    }
  }
  movePersonHandler = (person) => {
    const newPersons1 = [...this.state.persons1]
    const newPersons2 = [...this.state.persons2]

    if (newPersons1.findIndex((person) => {
      return person.id === this.id
    })) {
      newPersons2.push(person)
      const index1 = newPersons1.indexOf(person)
      newPersons1.splice(index1, 1)

    }

    else {
      newPersons1.push(person)
      const index2 = newPersons2.indexOf(person)
      newPersons2.splice(index2, 1)

    }
    this.setState({
      persons1: newPersons1,
      persons2: newPersons2
    })
  }



  changeNameHandler1 = (event, id) => {
    const newPersons1 = [...this.state.persons1];
    const index = newPersons1.findIndex((person) => {
      return person.id === id
    })
    newPersons1[index].name = event.target.value
    this.setState({
      persons1: newPersons1,
    }
    )
  }

  changeNameHandler2 = (event, id) => {
    const newPersons2 = [...this.state.persons1];
    const index = newPersons2.findIndex((person) => {
      return person.id === id
    })
    newPersons2[index].name = event.target.value
    this.setState({
      persons2: newPersons2,
    }
    )
  }

  // deleteNameHandler = (person) => {
  //   const newPersons1 = [...this.state.persons1]
  //   const newPersons2 = [...this.state.persons2]
  //   if (person in newPersons1) {
  //     const index = newPersons1.indexOf(person)
  //     newPersons1.splice(index, 1)
  //   }
  //   else {
  //     const index = newPersons2.indexOf(person)
  //     newPersons2.splice(index, 1)
  //   }
  //   this.setState({
  //     persons1: newPersons1,
  //     persons2: newPersons2
  //   }
  //   )
  // }
  deleteNameHandler1 = (person) => {
    const newPersons1 = [...this.state.persons1]
    const index = newPersons1.indexOf(person)
    newPersons1.splice(index, 1)

    this.setState({
      persons1: newPersons1,
    }
    )
  }

  deleteNameHandler2 = (person) => {
    const newPersons2 = [...this.state.persons2]
    const index = newPersons2.indexOf(person)
    newPersons2.splice(index, 1)

    this.setState({
      persons2: newPersons2,
    }
    )
  }

  showPersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  switchColorHandler = () => {
    this.setState({

    })
  }
  render() {

    let personsComponents1 = null
    if (this.state.showPersons)
      personsComponents1 = (<div>
        {this.state.persons1.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => { this.changeNameHandler1(event, person.id) }}
              deleted={() => { this.deleteNameHandler1(person) }}
              moved={() => { this.movePersonHandler(person) }}
              key={person.id}
            />
          )
        })}

      </div>)

    let personsComponents2 = null
    if (this.state.showPersons)
      personsComponents2 = (<div>
        {this.state.persons2.map((person) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              changed={(event) => { this.changeNameHandler2(event, person.id) }}
              deleted={() => { this.deleteNameHandler2(person) }}
              moved={() => { this.movePersonHandler(person) }}
              key={person.id}
            />
          )
        })}

      </div>)


    return (
      <div className="App">
        <h1>
          Hello React !!
        </h1>
        <button onClick={this.showPersonsHandler}>
          Toggle persons
        </button>
        <button onClick={this.switchColorHandler}>
          Change color
        </button>
        <div id="global">
          <div id="liste1">
            <h2> Liste A </h2>
            {personsComponents1}
          </div>
          <div id="liste2">
            <h2> Liste B </h2>
            {personsComponents2}
          </div>
        </div>
      </div>
    )
  }
}
export default App