import React, { Component  } from 'react';
import Constants from '../../constants/Constants';

export default class ManagePeople extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			Bosses 			:	Constants.Boss,
			Persons			:	Constants.Persons,
			People			:	Constants.Persons,
			AdminRights		:	Constants.AdminRights,
			UserTeams		:	Constants.UserTeams,
		};
	}
	
	componentDidMount(){
	}
	
  removeBosses = (rowId) => {
    const arrayCopy = this.state.Bosses.filter((row) => row.id !== rowId);
    this.setState({Bosses: arrayCopy});
  }; 
  removePersons = (rowId) => {
    const arrayCopy = this.state.Persons.filter((row) => row.id !== rowId);
    this.setState({Persons: arrayCopy});
  }; 
  removePeople = (rowId) => {
    const arrayCopy = this.state.People.filter((row) => row.id !== rowId);
    this.setState({People: arrayCopy});
  }; 
  removeAdminRight = (rowId) => {
    const arrayCopy = this.state.AdminRights.filter((row) => row.id !== rowId);
    this.setState({AdminRights: arrayCopy});
  };  
  removeUserTeams = (rowId) => {
    const arrayCopy = this.state.UserTeams.filter((row) => row.id !== rowId);
    this.setState({UserTeams: arrayCopy});
  };
	
   render(){
      return(
	    <div className="people-settings">
            <div className="people-settings-header">
                <div className="people-settings-header-logout d-flex justify-content-between ">
                    <p className="mb-0">Settings</p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Manage people's settings</h2>
               
                <div className="people-settings-header-search border rounded">
                    <div className="input-group h-100">
                        <i className="material-icons">search</i>
                        
                        <input className="m-auto" type="text" placeholder="Search..." />
                      </div>
                </div>
            </div>
            <div className="people-settings-body d-flex flex-column">
               <div className="row h-100">
                 
                   <div className="col-6">
                       <div className="feedback-from card h-100 card-body bg- white p-0" style={{ maxHeight:'211px'}}>
                            <div className="feedback-from-header d-flex justify-content-between">
                                <h3 className="text-truncate">People who give feedback to Peter</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-from-body h-100 d-glex flex-column">
                                { 	this.state.Persons.map(( item, key ) =>
									(
										<div className="feedback-from-item d-flex justify-content-between align-items-center" key={key}>
											<div className="feedback-from-item-name">{ item.name }</div>
											<div className="feedback-from-item-title d-none d-md-block">{ item.position }</div>
											<div className="feedback-from-item-time d-none d-xl-block">{ item.feedback }</div>
											<a href="javascript:void(0);" onClick={()=> this.removePersons(item.id)} className="feedback-from-item-delete text-right">Delete</a>
										</div>
									))
								}
                            </div>
                       </div>
                   </div>
                   
                   <div className="col-6">
                    <div className="feedback-to card card-body h-100 bg- white p-0" style={{ maxHeight:'211px'}}>
                        <div className="feedback-to-header d-flex justify-content-between">
                            <h3 className="text-truncate">People to who Peter gives feedback</h3>
                            <a className="align-middle" href="#">Add new</a>
                        </div>
                        <div className="feedback-to-body d-glex flex-column">
						 { 	this.state.People.map(( item, key ) =>
							(
								<div className="feedback-to-item d-flex justify-content-between align-items-center" key={key}>
									<div className="feedback-to-item-name">{ item.name }</div>
									<div className="feedback-to-item-title d-none d-md-block">{ item.position }</div>
									<div className="feedback-to-item-time d-none d-xl-block">{ item.feedback }</div>
									<a href="javascript:void(0);" onClick={()=> this.removePeople(item.id)} className="feedback-to-item-delete text-right">Delete</a>
								</div>
							))
									
						 }
                         
                        </div>
                   </div>
                   </div>
               </div>
               <div className="row my-4">
                  
                    <div className="col-6">
                        <div className="feedback-boss card card-body h-100 bg- white p-0">
                            <div className="feedback-boss-header d-flex justify-content-between align-items-center">
                                <h3 className="text-truncate">Bosses who Peter gives feedback</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-boss-body d-glex flex-column">
								{ 	this.state.Bosses.map(( item, key ) =>
									(
										<div className="feedback-boss-item d-flex justify-content-between align-items-center">
											<div className="feedback-boss-item-name">{ item.name }</div>
											<div className="feedback-boss-item-title d-none d-md-block">{ item.position }</div>
											<div className="feedback-boss-item-time d-none d-xl-block">{ item.feedback }</div>
											<a href="javascript:void(0);" onClick={()=> this.removeBosses(item.id)} className="feedback-boss-item-delete text-right">Delete</a>
										</div>
									))
								}
                            </div>
                       </div>
                    </div>
                    <div className="col-6">
                        
                        <div className="feedback-team card card-body h-100 bg- white p-0">
                            <div className="feedback-team-header d-flex justify-content-between">
                                <h3 className="text-truncate">Peter is memeber of team</h3>
                                <a className="align-middle" href="#">Add new</a>
                            </div>
                            <div className="feedback-team-body d-glex flex-column">
							{ 	this.state.UserTeams.map(( item, key ) =>
								(
									<div className="feedback-team-item d-flex justify-content-between align-items-center" key={key}>
										<div className="feedback-team-item-name">{ item.name }</div>
										<div className="feedback-team-item-title d-none d-lg-block">{ item.position }</div>
										<p className="d-none d-none d-xl-block">-</p>
										<a href="javascript:void(0);" onClick={()=> this.removeUserTeams(item.id)} className="feedback-team-item-delete text-right">Delete</a>
									</div>
								))
							}
                            </div>
                        </div>
                    </div>              
                </div>
                <div className="row">
                        <div className="col-6">
                           
                            <div className="feedback-team card card-body h-100 bg- white p-0">
                                <div className="feedback-team-header d-flex justify-content-between">
                                    <h3 className="text-truncate">Admin rights to Peter's profile</h3>
                                    <a className="align-middle" href="#">Add new</a>
                                </div>
                                <div className="feedback-team-body d-glex flex-column">
								{ 	this.state.AdminRights.map(( item, key ) =>
									(
										<div className="feedback-admin-item d-flex justify-content-between align-items-center" key={key}>
											<div className="feedback-admin-item-name">{ item.name }</div>
											<div className="feedback-admin-item-title d-none d-md-block">{ item.position }</div>
											<div className="feedback-admin-item-time d-none d-xl-block">{ item.Right }</div>
											<a href="javascript:void(0);" onClick={()=> this.removeAdminRight(item.id)} className="feedback-admin-item-delete text-right">Delete</a>
										</div>
									))
								}
                                </div>
                            </div>
                    </div>
                    <div className="col-6">
                        <div className="feedback-buttons d-flex align-items-center justify-content-end">
                            <a href="" className="feedback-buttons-settings d-flex align-items-center justify-content-center"><i className="material-icons">layers</i>Settings log</a>
                            <a href="" className="feedback-buttons-delete d-flex align-items-center justify-content-center"><i className="material-icons">delete_forever</i> Delete user</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
   	
      );
   }
}

