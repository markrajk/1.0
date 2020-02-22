import React, { Component  } from 'react';
import Constants from '../../constants/Constants';

export default class TeamDetail extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			TeamData		:	Constants.TeamDetail,
			chartDataA		:	Constants.TeamDetail.teamPerformanceMonth,
			chartDataB		:	Constants.TeamDetail.peoplePerformanceMonth,
			TeamSelect		:	'month',
			PeopleSelect	:	'month',
			TeamCat			:	'team',
		};
	}
	
	componentDidMount(){
	}
	handleChartTypeA=(type)=>{
		var data	=	'';
		if(type	==	'month'){
			data	=	this.state.TeamData.teamPerformanceMonth;
		}else{
			data	=	this.state.TeamData.teamPerformanceWeek;
		}
		this.setState({ TeamSelect:type,chartDataA:data })
	}	
	handleChartTypeB=(type)=>{
		var data	=	'';
		if(type	==	'month'){
			data	=	this.state.TeamData.peoplePerformanceMonth;
		}else{
			data	=	this.state.TeamData.peoplePerformanceWeek;
		}
		this.setState({ PeopleSelect:type,chartDataB:data })
	}
	
   render(){
      return(
		  <div className="teams-results-example">
        <div className="teams-results-example-header">
            <div className="teams-results-example-header-logout d-flex justify-content-between">
                <p className="mb-0 d-flex align-items-center"><i className="material-icons">keyboard_arrow_left</i>Back to overview</p>
                <p className="text-right align-middle"><a href="../people-signin/index.html">Logout</a> <i
                        className="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 className="mt-1 align-middle">Team { this.state.TeamData.name }</h2>
            <div className="d-flex justify-content-between align-items-center">
               
                <p className="choose"><span><a className={ this.state.TeamCat =='team' ?"active" : 'font-weight-normal text-secondary' } onClick={ ()=> this.setState({ TeamCat : 'team' }) }   href="javascript:void(0)">Team</a></span>
				<span className="mx-2 divider"> I </span>
				<span><a className={ this.state.TeamCat =='team_lead' ?"active" : 'font-weight-normal text-secondary' } onClick={ ()=> this.setState({ TeamCat : 'team_lead' }) }  href="javascript:void(0)">Team lead</a></span><span className="mx-2"> I </span>
				<span><a className={ this.state.TeamCat =='people' ?"active" : 'font-weight-normal text-secondary' } onClick={ ()=> this.setState({ TeamCat : 'people' }) }  href="javascript:void(0)">People</a></span></p>

                <div>
                    <div className="buttons d-none d-lg-block">
                        <a href="javascript:void(0)" className="btn-custom-blue">Export</a>
                        <a href="javascript:void(0)" className="btn-custom-blue">Edit Team</a>
                        <a href="javascript:void(0)" className="btn-custom-blue">Add team to my favorites</a>
                    </div>
                    <div className="icons d-sm-block d-lg-none">
                        <a href="javascript:void(0)"><i className="material-icons archive">save_alt</i></a>
                        <a href="javascript:void(0)"><i className="material-icons settings">settings</i></a>
                        <a href="javascript:void(0)"><i className="material-icons add">person_add</i></a>
                    </div>
                </div>
               
            </div>

        </div>

        <div className="teams-results-example-body">

            <div className="teams-results-example-body-right">
                <div className="teams-results-example-body-right-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div className="text-truncate">
                            <h3 className="text-truncate mr-2"><span>How our team works</span></h3>
                            <p className="choose"><span ><a className={ this.state.TeamSelect =='weeks' ?"active" : 'font-weight-normal text-secondary' } href="javascript:void(0);" onClick={ ()=> this.handleChartTypeA('weeks') } >Weeks</a></span><span className="mx-2 divider"> I </span> <span ><a className={ this.state.TeamSelect =='month' ?"active" : 'font-weight-normal text-secondary' } href="javascript:void(0);" onClick={ ()=> this.handleChartTypeA( 'month' ) } >Months</a></span> </p>
                           </div>
                           <a className="share" href="javascript:void(0)">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                            
							{ 	this.state.chartDataA.map(( item, key ) =>
								(
									<div className="bar d-none d-xl-block" key={key}>
										<div className={"bar-fill bar-fill-"+( item.color )} style={{height:  item.performance }}></div>
										<div className="bar-info">{ item.label }</div>
									</div>
                            	))
							 }
                           
                        </div>
                    </div>
                </div>

                <div className="teams-results-example-body-right-bottom">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div className="text-truncate">
                            <h3 className="text-truncate mr-2"><span>How happy people feel in this team</span></h3>
                            <p className="choose"><span ><a className={ this.state.PeopleSelect =='weeks' ?"active" : 'font-weight-normal text-secondary' } href="javascript:void(0);" onClick={ ()=> this.handleChartTypeB( 'weeks' ) } >Weeks</a></span><span className="mx-2 divider"> I </span> <span ><a className={ this.state.PeopleSelect =='month' ?"active" : 'font-weight-normal text-secondary' } href="javascript:void(0);" onClick={ ()=> this.handleChartTypeB( 'month') } >Months</a></span> </p>
                           </div>
                           <a className="share" href="javascript:void(0)">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                            
							 { 	this.state.chartDataB.map(( item, key ) =>
								(
									<div className="bar d-none d-xl-block" key={key}>
										<div className={"bar-fill bar-fill-"+( item.color )} style={{height:  item.performance }}></div>
										<div className="bar-info">{ item.label }</div>
									</div>
								))
							 }
                            
                          
                        </div>
                    </div>
                </div>
            </div>

            <div className="teams-results-example-body-left">
                <div className="teams-results-example-body-left-header">
                    <h3 className="text-truncate mr-2">Improvement ideas</h3>
                    <select name="comment" id="comment">
                        <option value="april" >April</option>
                        <option value="april">May</option>
                        <option value="april">Jun</option>
                    </select>

                   
                </div>
                <div className="teams-results-example-body-left-body">
                <ul className="list-group list-group-flush">
					{ 	this.state.TeamData.Improvements.map(( item, key ) =>
						(	
							<li className="list-group-item" key={key}>
								<p className="m-0 p-0">
									{ item.title }
								</p>
							</li>
						))
					 }
                </ul>
            </div>
        </div>

        </div>
    </div>
 


     
      );
   }
}

