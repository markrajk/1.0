import React, { Component  } from 'react';
import Constants from '../../constants/Constants';
class MyTeam extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			chooseType	:	[],
			MyTeams		:	Constants.MyTeams,
		};
	}
	
	componentDidMount(){
	}
	handleType=(val,type)=>{
		var array 	= this.state.chooseType;
		array[val]	=	type
		this.setState({ chooseType :array })	
	}
	
	
   render(){
      return(
			 <div className="teams-results-favourites">
            <div className="teams-results-favourites-header">
                <div className="teams-results-favourites-header-logout d-flex justify-content-between">
                    <p className="subtitle mb-0">Teams</p>
                    <p className="text-right align-middle"><a href="login">Logout <i className="material-icons align-middle">exit_to_app</i></a></p>
                </div>
                <h2 className="mt-1 align-middle">Overview</h2>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="choose"><span className="active"><a href="MyTeam">My teams</a></span> <span className="mx-1">|</span>
                        <a href="AllTeam">All teams</a></p>
                    <a href="#" className="btn-custom-blue">Remove team from favourites</a>
                </div>
            </div>

            <div className="teams-results-favourites-body">

                <div className="row">
                   
					 { 	this.state.MyTeams.map(( item, key ) =>
						(
							<div className="col-12 col-md-6 col-xl-4 mb-5" key={key}>
								<div className="graph-card bg-white graph-team-marketing">
									<div className="graph-card-header">
										<h3>Team { item.name }</h3>
										<p className="choose">
											<span className={ this.state.chooseType[item.id]	==	undefined ? 'active': this.state.chooseType[item.id]=='team'?"active":null }>
											<a href="javascript:void(0);" onClick={ ()=> this.handleType(item.id,'team') }>Team</a></span>
											<span className="mx-1">|</span>
											<span className={ this.state.chooseType[item.id]=='team_lead'?"active":null }>
											<a href="javascript:void(0);" onClick={ ()=> this.handleType(item.id,'team_lead') }>Team lead</a></span>
										</p>
									</div>
									<div className="graph-card-body">
										 { 	item.performance.map(( item1, key1 ) =>
											(
												<div className="bar" key={key1} >
													<div className={"bar-fill bar-fill-"+item1.color} style={{height: item1.performance}}></div>
													<div className="bar-info">{ item1.label }</div>
												</div>
												))
										 }

									</div>
									<div className="graph-card-footer d-flex justify-content-center align-items-center">
									   
										<a href={'TeamDetail/'+(item.id)} className="btn-custom-blue" >View Team</a>
									</div>
								</div>
							</div>
						))
					 }
                </div>

            </div>
        </div>
       
      );
   }
}
export default MyTeam;
