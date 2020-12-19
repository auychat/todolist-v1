import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import DateTimeInput from './components/DateTimeInput';
import ContactInput from './components/ContactInput';
import GenderInput from './components/GenderInput';
import AgeSelectInput from './components/AgeSelectInput';
import CheckboxInput from './components/CheckboxInput';
import FileInput from './components/FileInput';

import 'bootstrap/dist/css/bootstrap.css';
import {v4 as uuid}  from 'uuid';
import { Collapse } from "bootstrap";


class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }

  handleChange = (e) =>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit = (e) =>{
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }


    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem: false
    });
  };

  clearList = ()=>{
    this.setState({
      items:[]
    });
  };

  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item => 
      item.id !== id)
      this.setState({
        items: filteredItems
      });
  };

  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item =>
      item.id !== id);

      const selectedItem = this.state.items.find(item => item.id === id)
      console.log(selectedItem);

      this.setState({
        items: filteredItems,
        item: selectedItem.title,
        editItem: true,
        id:id
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
              <DateTimeInput />

              <div className="mx-auto mt-4">
                <h3 className="text-capitalize text-center">Customer Contact Detail</h3>
                <ContactInput />
              </div>

              <div className="mx-auto mt-4">
                <GenderInput />
              </div>

              <div className="mx-auto mt-4">
                <AgeSelectInput />
              </div>

              <div className="mx-auto mt-4">
                <CheckboxInput />
              </div>

              <div className="mx-auto mt-4">
                <FileInput buttonProps={{ color: "primary" }} />
              </div>
              
              <TodoInput 
                item={this.state.item} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />

              <TodoList 
                items={this.state.items} 
                clearList={this.clearList} 
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
