import React from 'react';
import Table from './Table';
import Form from './Form';
//const linkData = ["Hello World", "How does this work?", "It uses props", "And Passes them Down!"]

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            favLinks: []
        }
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       this.setState({
           favLinks: this.state.favLinks.filter((link, i) => i !== index)
       })
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                <Table 
                    linkData={this.state.favLinks}
                    removeLink={this.removeCharacter}
                />
                <br/>

                <h3>Add New</h3>
                <Form
                
                />
            </div>
        );
    }
}

export default LinkContainer;