import React, { Component } from 'react';

export default class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentDidMount(){ 

	}

   render(){
      return(
		 <div className="teams-settings-header">
                <div className="teams-settings-header-logout d-flex justify-content-between">
                    <p className="subtitle back mb-0 d-flex align-items-center"><a href="javascript:void(0);" >{ this.props.breadCrumb } </a></p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">{ this.props.Title }</h2>
            </div>
     
      );
   }
}

