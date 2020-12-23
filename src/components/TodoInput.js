import React, { Component } from 'react';
import DateTimeInput from './DateTimeInput';
import ContactInput from './ContactInput';
import GenderInput from './GenderInput';
import AgeSelectInput from './AgeSelectInput';
import CheckboxInput from './CheckboxInput';
import FileInput from './FileInput';

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props
        return (
            

            <div className="card card-body my-5">
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

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"/>
                            </div>
                        </div>
                        <input 
                            type="text" 
                            className="form-control text-capitalize"
                            placeholder="add a todo item"
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className={
                            editItem
                            ? "btn btn-block btn-success mt-3"
                            : "btn btn-block btn-primary mt-3"
                        }
                    >
                            {editItem ? 'Edit item' : "Add item"}
                            
                    </button>
                    
                </form>
                
            </div>
        );
    }
}
