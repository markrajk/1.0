import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


class Feedback extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
		<div className="give-feedback-menu">
            <div className="give-feedback-menu-header">
                <div className="give-feedback-menu-header-logout d-flex justify-content-end">
                    <p className="text-right align-middle"><a href="../people-signin/index.html">Logout</a> <i
                            className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Give feedback</h2>
            </div>

            <div className="give-feedback-menu-body">
                <div className="table-top">
                    <div className="card-header bg-white d-flex justify-content-between align-items-center">
                        <h3 className="m-0">People feedback</h3>
                        <span className="add-btn"></span>
                    </div>
                    <ul className="list-group-flush p-0 m-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To all my employes</p>
                            <div className="text-right"><a href="FeedbackDetail" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To all my colleagues</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">Just to a single person</p>
                            <div className="text-right"><a href="FeedbackSingle" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">Change previously given feedback</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                    </ul>
                </div>

                
                <div className="table-bottom">
                    <div className="card-header bg-white d-flex justify-content-between align-items-center">
                        <h3 className="m-0">Team feedback</h3>
                        <span className="add-btn"></span>
                        
                    </div>
                    <ul className="list-group-flush p-0 m-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To javascript team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To marketing team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To other team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To javascript team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To marketing team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To other team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To javascript team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To marketing team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <p className="name m-0 flex-fill">To other team</p>
                            <div className="text-right"><a href="#" className="btn-custom btn-custom-outline text-center">Start</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

      );
   }
}
export default Feedback;
