import React, { Component  } from 'react';
import Header from '../Common/Header';
import Constants from '../../constants/Constants';

class ManageTeam extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			selectedTeam:	'software',
			Teams		:	Constants.Teams,
			TeamMembers	:	Constants.TeamMembers,
			TeamLeads	:	Constants.TeamLeads,
			AdminRights	:	Constants.AdminRights,
		};
	}
	
	componentDidMount(){
	}
	
  remove = (rowId) => {
    const arrayCopy = this.state.TeamMembers.filter((row) => row.id !== rowId);
    this.setState({TeamMembers: arrayCopy});
  }; 
  removeTeamLead = (rowId) => {
    const arrayCopy = this.state.TeamLeads.filter((row) => row.id !== rowId);
    this.setState({TeamLeads: arrayCopy});
  }; 
  removeAdminRight = (rowId) => {
    const arrayCopy = this.state.AdminRights.filter((row) => row.id !== rowId);
    this.setState({AdminRights: arrayCopy});
  };
  
   render(){
      return(
		<div className="teams-settings">
            
            <Header Title='Manage teams' breadCrumb="Team" />
            <div className="teams-settings-body">
                <div className="row no-gutters">
                    <div className="col-6">
                        <div className="team-name d-flex align-items-center justify-content-start text-truncate">
                            <label className="mb-0" afor="team-name ">Select team</label>
                        <div className="d-none d-xl-block">
						
						{ 	this.state.Teams.map(( item, key ) =>
							(
							 <a key={key} href="javascript:void(0);" className={ 'btn-custom-outline '+(this.state.selectedTeam ==item.value ?'active' : null)	 } onClick={()=> this.setState({ selectedTeam : item.value }) }>{ item.name }</a>
							))
						}
                           
                         
                        </div>
                        {/*<select className="d-block d-xl-none team-select" name="teams" id="teams">
                            <option value="software" >Software</option>
                            <option value="software">Sales</option>
                            <option value="software">Management</option>
                        </select>*/}
                        </div>
                       
                        <div className="team-card bg-white team-card-member">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">Team member</p>
                                <a href="#">Add new</a>
                            </div>

                          
                            <div className="team-table team-table-member">
                                <table className="table">
                                    <tbody>
									{ 	this.state.TeamMembers.map(( item, key ) =>
											(<tr key={key}>
												<td className="spacer"></td>
												<td>{item.name}</td>
												<td className="d-none d-lg-table-cell">{item.position}</td>
												<td>
													<a href="javascript:void(0);" onClick={()=> this.remove(item.id)}>Delete</a>
												</td> 
											</tr>)
										) 
									}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="category d-flex align-items-center justify-content-start">
                            <label className="mb-0" sfor="category">Category</label>
                            <div className="category-input">
                                <input type="text" placeholder="Software" />
                                <i className="material-icons">done</i>
                            </div>
                        </div>
                       
                        <div className="team-card bg-white team-card-lead">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">Team lead</p>
                                <a href="#">Add new</a>
                            </div>

                          
                            <div className="team-table team-table-lead">
                                <table className="table">
                                    <tbody>
									{ 	this.state.TeamLeads.map(( item, key ) =>
										(<tr key={key}>
                                            <td className="spacer"></td>
                                           <td>{item.name}</td>
                                            <td className="d-none d-lg-table-cell" className="d-none d-lg-table-cell">{item.position}</td>
                                            <td>
                                               <a href="javascript:void(0);" onClick={()=> this.removeTeamLead(item.id)}>Delete</a>
                                            </td>
										  </tr>)
										) 
									}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                       
                        <div className="team-card bg-white team-card-admin">
                            <div className="team-card-header d-flex justify-content-between align-items-center">
                                <p className="m-0">View / Admin right</p>
                                <a href="#">Add new</a>
                            </div>

                           
                            <div className="team-table team-table-admin">
                                <table className="table">
                                    <tbody>
									
									{ 	this.state.AdminRights.map(( item, key ) =>
										(<tr key={key}>
                                            <td className="spacer"></td>
											<td>{item.name}</td>
                                            <td className="d-none d-xl-table-cell">{item.position}</td>
                                            <td className="d-none d-md-table-cell">{item.Right}</td>
                                            <td>
                                                <a href="javascript:void(0);" onClick={()=> this.removeAdminRight(item.id)}>Delete</a>
                                            </td>
										  </tr>)
										) 
									}
									
                                    
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

               
                <div className="row w-100">
                    <div className="col-12">
                        <div className="card-confirm bg-white d-flex justify-content-between align-items-center">

                            <div className="pr-5">
                                <div className="radio-input-container div d-flex align-items-center mb-4">
                                   <div className="radio-checkbox">
                                       <input type="checkbox" name="checkbox-one" id="checkbox-one"/>
                                        <label afor="checkbox-one">
                                            <span></span>
                                        </label>
                                   </div>
                                    <p className="m-0 ml-3 align-middle">Everyone in team have to give each other regularly feedback</p>
                                </div>
    
                                <div className="radio-input-container div d-flex align-items-center">
                                    <div className="radio-checkbox">
                                        <input type="checkbox" name="checkbox-one" id="checkbox-two" />
                                         <label afor="checkbox-two">
                                             <span></span>
                                         </label>
                                    </div>
                                    <p className="m-0 ml-3 align-middle">Everyone in team have to give regularly feedback how teamwork in total could be improved</p>
                                </div>
                            </div>

                            <div className="feedback-buttons d-flex align-items-center justify-content-end">
                                <a href="" className="feedback-buttons-settings d-flex align-items-center justify-content-center mr-4"><i className="material-icons">layers</i>Settings log</a>
                                <a href="" className="feedback-buttons-delete d-flex align-items-center justify-content-center"><i className="material-icons">delete_forever</i> Delete user</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     
      );
   }
}
export default ManageTeam;
