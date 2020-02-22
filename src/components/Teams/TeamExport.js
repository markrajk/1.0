import React, { Component  } from 'react';
import Constants from '../../constants/Constants';
export default class TeamExport extends Component{
	
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
		  <div className="teams-export">
            <div className="teams-export-header">
                <div className="teams-export-header-logout d-flex justify-content-between">
                    <p className="subtitle back mb-0 d-flex align-items-center"><a href="#">Team</a></p>
                    <p className="text-right align-middle"><a href="login">Logout</a> <i className="material-icons align-middle">exit_to_app</i></p>
                </div>
                <h2 className="mt-1 align-middle">Export report</h2>
              
            </div>

            <div className="teams-export-body">
                

                <div className="input-container">
                    <div className="input">
                    <label >1. Select team</label>
                        <i className="material-icons i-1">search</i>
                        <i className="material-icons i-2">check</i>
                        <input className="mb-0" type="text" name="search" id="search" placeholder="Choose Team" />
                        <div className="suggestion-container">
                            <div className="search-suggestion">
							 { 	this.state.CompanyTeams.map(( item, key ) =>
								(
									<div className="search-suggestion-item d-flex flex-column align-items-start justify-content-center" key={key}>
										<p className="team">{ item.teamName }</p>
										{/* <p className="people">Javascript Developer</p>*/}
									</div>
								))
							 }
                              
                            </div>
                        </div>
                    </div>
                </div>

                <div className="input-container">
                    <h3>2. Start export</h3>
                    <a href="#" className="btn-custom-blue">Start report</a>
                </div>
            </div>

        </div>

       
      );
   }
}

