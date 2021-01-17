import s from "./ContactForm.module.css";
import { Component } from 'react'
import shortid from 'shortid'

export default class ContactForm extends Component {
    state = {
        name: ' ',
        number: ' ',
    }
    handeInputCange = e => {
        const { name, value } = e.currentTarget;
        this.setState(
            { [name]: value }
        )
    }
    handeInputSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({
            name: ' ',
            number: ' ',
        })
    }

    render() {
        const { name, number } = this.state
        const idName = shortid.generate()
        const idNumber = shortid.generate()
        return (
            <form onSubmit={this.handeInputSubmit} className={s.wraper}>
                <label htmlFor={idName} className={s.labelTitle}> Name </label>
                <input type="text"
                    name="name"
                    value={name}
                    id={idName}
                    className={s.inputText}
                    onChange={this.handeInputCange} />

                <label htmlFor={idNumber} className={s.labelTitle}> Number </label>
                <input type="text"
                    name="number"
                    id={idNumber}
                    value={number}
                    className={s.inputText}
                    onChange={this.handeInputCange} />

                <button type="submit" className={s.btnSubmit}> Add Contact</button>

            </form>
        )
    }
}