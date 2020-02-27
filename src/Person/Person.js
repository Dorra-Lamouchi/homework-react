import React from 'react'
import classes from './Person.module.css'
const person = (props) => {
    return (
        <div className={classes.Person} >
            <h3 onClick={props.moved}> My name is {props.name} and I am {props.age} years old </h3>
            <button onClick={props.deleted}> X </button>
            <br /><br />
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person
