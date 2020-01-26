import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import Form from "../layout/Form";
import {signup} from "../utils/auth";

export default class Signup extends Component {
    render() {
        debugger
        return (
        <div className="form-wrapper">
            <div className="form-content">
                <h1>Create a Vinylfy account</h1>

                <p>Sign up, import your vinyl collection and start listening to your favourite records.</p>

                <div className="input-wrapper">
                    <label className="">Username</label>
                    <div className="">
                        <input 
                            className="" 
                            name="username" 
                            type="text" 
                            placeholder="username"
                        />
                    </div>
                </div>
                
                <div className="input-wrapper">
                    <label className="">Email</label>
                    <div className="">
                        <input 
                            className="" 
                            name="email" 
                            type="text" 
                            placeholder="email"
                        />
                    </div>
                </div>  

                <div className="input-wrapper">
                    <label className="">Password</label>
                    <div className="">
                        <input 
                            className="" 
                            name="password" 
                            type="password" 
                            placeholder="password"
                        />
                    </div>
                </div>
                
                <button 
                    className="form-button"
                    >
                    Sign Up
                </button>
            </div>
        </div>
        )
    }
}
