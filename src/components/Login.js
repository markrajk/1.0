import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


export default class Login extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
			<div class="people-signin">
            <div class="header d-flex justify-content-between align-items-center">
                <p class="company">Company name</p>
                <p class="help d-flex align-items-center">Need help <i class="material-icons">room_service</i></p>
            </div>
    
            <div class="signin card card-body">
                <h1 class="signin-header mx-auto">Sign In</h1>
    
                <label for="email">Email address</label>
                <input type="text" id="email" placeholder="Enter email" />
    
                <label for="password">Passwod</label>
                <input type="password" id="password" placeholder="Enter password" />
    
                    <div class="check d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <input type="checkbox" id="check"/>
                            <label class="m-0" for="check">Keep me sign in</label>
                        </div>
                        <p class="m-0"><a href="#">Forgot password?</a></p>
                    </div>
    
                <a type="submit" href="/" class="btn-custom-signin">Sign in</a>
    
                <p class="dont-have">Dont have account? <a href="#">Sign up now</a></p>
            </div>
        </div>
       
      );
   }
}

