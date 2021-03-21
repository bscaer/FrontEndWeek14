import { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// The AddUnicorn function creates a form for creating a unicorn.
export const AddUnicorn = (props) => {
    // Instantiate the state values and set functions for
    // the unicorn properties.
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [feature, setFeature] = useState('');
    const [collection, setCollection] = useState('');

    // The addUnicorn function calls the addUnicorn function passed
    // in by the caller, passing in the unicorn properties, to create a
    // unicorn.
    const addUnicorn = (event) => {
        props.addUnicorn({firstName, lastName, feature, collection});
        event.preventDefault();
    }

    // Return the JSX for rendering the form for creating a unicorn and
    // prompting for properties first name, last name, feature, and collection.
    return (
        // When the user hits "Add Unicorn," call the addUnicorn function
        <form onSubmit={addUnicorn}>
            <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input name="firstNameText" id="firstName" value={firstName} type="text" className="form-control"
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input name="lastNameText" id="lastName" type="text" className="form-control"
                    onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="feature">Feature</label>
                <input name="featureText" id="feature" type="text" className="form-control"
                    onChange={(e) => setFeature(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="collection">Collection</label>
                <input name="collectionText" id="collection" type="text" className="form-control"
                    onChange={(e) => setCollection(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Add Unicorn</button>
        </form>
    );
}