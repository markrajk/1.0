import React, { Component  } from 'react';
import Constants from '../../constants/Constants';
export default class AllPeople extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			Persons			:	Constants.Persons,
		};
	}
	
	componentDidMount(){
	}
	
	
   render(){
      return(
	        <div className="people-results-all-people">
            <div className="people-results-all-people-header">
                <div className="people-results-all-people-header-logout d-flex justify-content-between">
                    <p className="mb-0">People</p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i
                            className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Results</h2>
                <p className="choose"><a href="/">My key people</a> <span className="mx-2 divider"> I </span> <a href="AllPeople" className="active">All people</a></p>
            </div>
            <div className="people-results-all-people-body">


                <div className="h3 d-flex">
                    <h3>All people</h3>
                </div>


                <div className="inputs d-flex mb-3">
                    <div className="search ">
                        <i className="material-icons">search</i>
                        <input className="m-auto" type="text" placeholder="Search..."/>
                    </div>
                    <div className="select d-none d-md-block">
                        <select name="category" id="category">
                            <option value="1" >All categories</option>
                            <option value="2">All categories</option>
                            <option value="3">All categories</option>
                        </select>
                    </div>
                </div>

                <div className="row table-row">
                    <div className="col-sm-12">
                        <div className="panel-body">
                            <table className="table flex-table">
                                <thead>
                                    <tr>
                                        <th className="border-0 border-bottom spacer-left"></th>
                                        <th className="team-name border-0 border-bottom">Name</th>
                                        <th className="border-0 border-bottom team-lead-name d-none d-xl-flex">Team</th>
                                        <th className="border-0 border-bottom d-none d-lg-flex">Job title</th>
                                        <th className="team-index border-0 border-bottom d-none d-md-flex">His/her boss</th>
                                        <th className="team-lead-rating border-0 border-bottom">Latest feedback</th>
                                        <th className="team-view d-none d-sm-flex border-0 border-bottom"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   
								{ 	this.state.Persons.map(( item, key ) =>
									(
									   <tr>
											<td className="spacer-left"></td>
											<td className="team-name">
												<img src="../../../asset../../../assets/img/p-03.png" alt="#" />
												<p className="m-0">{ item.name }</p>
											</td>
											<td className="team-lead-name d-none d-xl-flex">{ item.team_name }</td>
											<td className="team-size d-none d-lg-flex">{ item.position }</td>
											<td className="team-index d-none d-md-flex">{ item.boss_name }</td>
											<td className="team-lead-rating">
												<button className="btn-table btn-table-green">Good</button>
											</td>
											<td className="team-view d-none d-sm-flex">
												<a href={ "/PeopleProfile/"+(item.id) }>Open profile</a>
											</td>
										</tr>
									))
								}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="table-footer bg-white d-flex justify-content-end align-items-center">
                    <p className="align-middle d-none d-md-block mr-4">Rows per page <span className="ml-2">20</span></p>

                    <p className="align-middle mx-5">page <span className="mx-1">1</span> of <span className="mx-1">1</span></p>

                    <div>
                        <a href="#"><i
                                className="material-icons text-left align-middle disabled">keyboard_arrow_left</i></a>
                        <a href="#"><i className="material-icons text-right align-middle ml-2">keyboard_arrow_right</i></a>
                    </div>
                </div>
            </div>
        </div>
    
    
   	
      );
   }
}

