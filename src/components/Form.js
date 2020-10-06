import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            URL: ""
        }
    }

    handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const favLink = {
            name: this.state.name,
            URL: this.state.URL
        }
        this.props.handleSubmit(favLink)
    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                <label>Name: {this.state.name}</label>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
                <label>URL: {this.state.URL}</label>
                <input name="URL" value={this.state.URL} onChange={this.handleChange}/>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    
    }
}

export default Form;
