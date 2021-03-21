import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// The Unicorn class represents a unicorn and allows
// the user to edit the unicorn's properties: first name,
// last name, feature, and collection and allows the user
// to delete the unicorn.
export default class Unicorn extends React.Component {
    constructor(props) {
        super(props);

        // Set up the function for handling text field changes.
        this.handleChange = this.handleChange.bind(this);

        // Set up the functions for updating and deleting the unicorn.
        this.updateUnicorn = this.updateUnicorn.bind(this);
        this.deleteUnicorn = this.deleteUnicorn.bind(this);

        // Save the properties to the state.
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            feature: props.feature,
            collection: props.collection,
            _id: props._id
        }
    }

    // When a text field value changes, save it in the state.
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // The deleteUnicorn function deletes a unicorn.
    deleteUnicorn() {
        this.props.deleteUnicorn(this.props._id);
    }

    // The updateUnicorn function updates a unicorn
    updateUnicorn(event) {
        this.props.updateUnicorn(this.state);
        event.preventDefault();
    }

    // The JSX that renders the unicorn and the fields and buttons
    // for editing it.
    render() {
        return (
            <div className="card">              
                <h2 className="card-title">Unicorn {this.props.firstName} {this.state.lastName} with {this.props.feature} of {this.props.collection}</h2>
                <div className="card-body">
                    <form onSubmit={this.updateUnicorn}>
                        <h3>Update Unicorn</h3>
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input name="firstName" id="firstName" value={this.state.firstName} type="text" className="form-control"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input name="lastName" id="lastName" value={this.state.lastName} type="text" className="form-control"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="feature">Feature</label>
                            <input name="feature" id="feature" value={this.state.feature} type="text" className="form-control"
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="collection">Collection</label>
                            <input name="collection" id="collection" value={this.state.collection} type="text" className="form-control"
                                onChange={this.handleChange} />
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.deleteUnicorn}>Delete</button>
                </div>          
            </div>
        );
    }
}
