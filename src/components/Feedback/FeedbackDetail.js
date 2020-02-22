import React, { Component  } from 'react';
import { Button, ButtonToolbar, Modal, Carousel } from 'react-bootstrap';


class FeedbackDetail extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
			 <div className="give-feedback-to-all-people">
            <div className="give-feedback-to-all-people-header">
                <div className="give-feedback-to-all-people-header-logout d-flex justify-content-between">
                    <p className="subtitle back mb-0 d-flex align-items-center"><i className="material-icons">keyboard_arrow_left</i> <a href="Feedback">Back</a></p>
                    <p className="text-right align-middle"><a href="../people-signin/index.html">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Give feedback</h2>
                <h3>To all my employees</h3>
            </div>

            <div className="give-feedback-to-all-people-body">
                <div className="employee bg-white">
                    <div className="employee-header">
                        <div className="employee-header-info d-flex justify-content-between align-items-center">
                            <div className="personal-info d-flex align-items-center">
                                <img src="../../../assets/img/p-07.png" alt="#" />
                                <p className="name mb-0">Rebeca Lee</p>
                            </div>
                            <div className="score d-flex align-items-center justify-content-center"><span>1/12</span></div>
                        </div>
                        
                        <span className="separator-line"></span>

                        <div className="rating d-flex align-items-center">
                            <p className=" align-middle">Great</p>

                            <div className="stars">
                                <input type="radio" name="star" id="star1" />
                                <label sfor="star1"></label>

                                <input type="radio" name="star" id="star2"/>
                                <label sfor="star2"></label>

                                <input type="radio" name="star" id="star3"/>
                                <label sfor="star3"></label>

                                <input type="radio" name="star" id="star4"/>
                                <label sfor="star4"></label>

                                <input type="radio" name="star" id="star5"/>
                                <label sfor="star5"></label>
                            </div>

                        </div>

                        <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea" placeholder="Drag and drop image or enter text"></textarea>
                        </div>

                        <button className="btn-custom-confirm">Confirm <i className="material-icons">arrow_forward</i></button>
                        <p>
                            <a href="#">Back to previous</a>
                        </p>
                    </div>
                    <div className="employee-body"></div>
                </div>
            </div>

        </div>

      );
   }
}
export default FeedbackDetail;
