import React, { Component  } from 'react';
import Constants from '../../constants/Constants';
export default class InvitePeople extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			CompanyTeams	:	Constants.CompanyTeams
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
		   
      <div className="people-invite">
            <div className="people-invite-header">
                <div className="people-invite-header-logout d-flex justify-content-end">
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Invite new people</h2>
            </div>

            <div className="people-invite-body">
                <div className="invite bg-white d-flex flex-column">
                    <h3>Invite new user</h3>

                    <div className="input">
                        <label sfor="name">NAME</label>
                        <input type="name" name="name" id="name" placeholder="Enter your name" />
                    </div>

                    <div className="input">
                        <label sfor="email">EMAIL</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" />
                    </div>

                    <div className="input">
                        <label sfor="search">TEAM</label>
                        <input className="mb-0" type="text" name="search" id="search" placeholder="Find team" aautocomplete="off" />
                        <div className="suggestion-container">
                            <div className="search-suggestion">
                                { 	this.state.CompanyTeams.map(( item, key ) =>
									(
										<div className="search-suggestion-item d-flex flex-column align-items-start justify-content-center" key={key}>
											<p className="team">{ item.teamName }</p>
											<p className="people">{ item.teamSize } people</p>
										</div>
									))
								}

                            </div>
                            <div className="search-suggestion-footer d-flex align-items-center">
                                <i className="material-icons">add</i>
                                <span>Team not found?</span>
                                <a href="#">Register new</a>
                            </div>
                        </div>
                       

                        
                    </div>
                    <button type="submit" className="btn-custom-invitation">Send invitation</button>
                   
                    
                </div>
            </div>

        </div>

   	
      );
   }
}

