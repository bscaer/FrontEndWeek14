
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import Unicorn from './components/Unicorn';
import { AddUnicorn } from './components/AddUnicorn';
import { unicornService } from './UnicornService';

// Using the crudcrud API, I created a single page that allows for the four crud operations,
// create, read, update, and delete for managing a list of unicorns. I created two React components. 
//
// The Unicorn class represents a unicorn and has fields for updating the unicorn's fields: first name, 
// last name, feature, and collection. 
//
// AddUnicorn represents a form for creating a unicorn.

// This is the main App class
export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Set up the functions for adding, deleting, and updating a unicorn.
    this.addUnicorn = this.addUnicorn.bind(this);
    this.deleteUnicorn = this.deleteUnicorn.bind(this);
    this.updateUnicorn = this.updateUnicorn.bind(this);

    // Initialize the list of unicorns in the state.
    this.state = {
      unicorns: []
    }
  }

  // When the page is displayed for the first time, update the
  // list of unicorns.
  componentDidMount() {
    this._refreshData();
  }

  // The addUnicorn function uses the UnicornService to create a unicorn
  // and redisplays the list of unicorns.
  addUnicorn = async(unicorn) => {
    await unicornService.create(unicorn);
    this._refreshData();
  }

  // The updateUnicorn function uses the UnicornService to update a unicorn
  // and redisplays the list of unicorns.
  updateUnicorn = async(unicorn) => {
    await unicornService.update(unicorn);
    this._refreshData();
  }

  // The deleteUnicorn function uses the UnicornService to delete a unicorn
  // and redisplays the list of unicorns.
  deleteUnicorn = async(id) => {
    await unicornService.delete(id);
    this._refreshData();
  }

  // The _refreshData function fetches the list of unicorns from the
  // UnicornService, updates the list of unicorns, which triggers render
  // to display the list of unicorns.
  _refreshData = async() => {
    const unicorns = await unicornService.getAll();
    this.setState({ unicorns });
  }

  // Render the AddUnicorn form and the list of unicorns.
  render() {
    // Instantiate a Unicorn object for each unicorn and
    // hook up the deleteUnicorn and updateUnicorn functions.
    let unicorns = this.state.unicorns.map(unicorn => {
      return <Unicorn {...unicorn} key={unicorn._id} 
        deleteUnicorn={this.deleteUnicorn} 
        updateUnicorn={this.updateUnicorn} />
    });

    // Render everything
    return (
      <div className="container">
        <div className="row">
          <div className="col">
              <h2>Add Unicorn</h2>
              <AddUnicorn addUnicorn={this.addUnicorn}></AddUnicorn>
          </div>
          <div className="col">
            <h2>Unicorns</h2>
            {unicorns}
          </div>
        </div>
      </div>
    );
  }
}