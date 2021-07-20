import React, { Component } from 'react';
import '../styles/contactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }
    hadleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: "",
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render() {
        return (<>
            <div className="contact">
                <form onSubmit={this.hadleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="wpisz wiadomość..."
                        cols="30" rows="10"></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="masz nie wypewniony formularz. Czy napewno czcesz opuścić strone?"
                />
            </div>
        </>);
    }
}

export default ContactPage;