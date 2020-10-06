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
       this.setState({
           favLinks: this.state.favLinks.filter((link, i) => i !== index)
       })
    }

    handleSubmit = favLink => {
       this.setState({
           favLinks: this.state.favLinks.concat(favLink)
       })
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
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default LinkContainer;