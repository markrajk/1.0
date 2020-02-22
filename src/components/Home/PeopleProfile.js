import React, { Component  } from 'react';
import Constants from '../../constants/Constants';

export default class PeopleProfile extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			PersonDetail		:	Constants.PersonDetail,
			selectedChartTypeA	:	'month',
			selectedChartTypeB	:	'month',
			chartDataA			:	Constants.PersonDetail.performanceMonth,
			chartDataB			:	Constants.PersonDetail.performanceMonth,
		};
	}
	
	componentDidMount(){
	}
	
	handleChartTypeA=(type)=>{
		var data	=	'';
		if(type	==	'month'){
			data	=	this.state.PersonDetail.performanceMonth;
		}else{
			data	=	this.state.PersonDetail.performanceWeek;
		}
		this.setState({ selectedChartTypeA:type,chartDataA:data })
	}	
	handleChartTypeB=(type)=>{
		var data	=	'';
		if(type	==	'month'){
			data	=	this.state.PersonDetail.performanceMonth;
		}else{
			data	=	this.state.PersonDetail.performanceWeek;
		}
		this.setState({ selectedChartTypeB:type,chartDataB:data })
	}
	
	
   render(){
      return(
		   
      <div className="people-results-one-user">
        <div className="people-results-one-user-header">
            <div className="people-results-one-user-header-logout d-flex justify-content-between">
                <p className="mb-0 d-flex align-items-center"><i className="material-icons">keyboard_arrow_left</i>Back</p>
                <p className="text-right align-middle"><a href="login">Logout</a> <i
                        className="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 className="mt-1 align-middle">{ this.state.PersonDetail.name }</h2>
            <div className="d-flex justify-content-between align-items-center mt-4">
               <div className="profile-info d-flex text-truncate">
                <p className="m-0 profile-info-team mr-4 text-truncate"><span className="mr-1 d-none d-md-inline-block">Team:</span> { this.state.PersonDetail.TeamName }</p>
                <p className="m-0 profile-info-position text-truncate"><span className="mr-1 d-none d-md-inline-block">Position:</span> { this.state.PersonDetail.Position }</p>
               </div>

                <div>
                    <div className="buttons d-none d-lg-block">
                        <a href="javascript:void(0)" className="btn-custom-blue">Export</a>
                        <a href="javascript:void(0)" className="btn-custom-blue">Settings</a>
                        <a href="javascript:void(0)" className="btn-custom-blue">Add to my key people</a>
                    </div>
                    <div className="icons d-sm-block d-lg-none">
                        <a href="javascript:void(0)"><i className="material-icons archive">save_alt</i></a>
                        <a href="javascript:void(0)"><i className="material-icons settings">settings</i></a>
                        <a href="javascript:void(0)"><i className="material-icons add">person_add</i></a>
                    </div>
                </div>
            </div>

        </div>

        <div className="people-results-one-user-body">
            <div className="people-results-one-user-body-left">
                <div className="people-results-one-user-body-left-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>Colleagues feedback</span></h3>
						   <p className="choose">
							
							<span className={ this.state.selectedChartTypeA	==	'week' ? "active" : null }>
								
							<a href="javascript:void(0);" onClick={ ()=> this.handleChartTypeA('week') } >Weeks</a></span>
							
							<span className="mx-2"> I </span> <span className={ this.state.selectedChartTypeA == undefined ?"active" :this.state.selectedChartTypeA	==	'month' ? "active" : null }>
								
								<a href="javascript:void(0);" onClick={ ()=> this.handleChartTypeA('month') } >Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                           { 	this.state.chartDataA.map(( item, key ) =>
							(
								<div className="bar d-none d-xl-block" key={key}>
									<div className={"bar-fill bar-fill-"+(item.color)} style={{height: item.performance}}></div>
									<div className="bar-info">{ item.label }</div>
								</div>
							))
						}
                            
                        </div>
                    </div>
                </div>

                <div className="people-results-one-user-body-left-bottom">
                        <div className="right-container">
                            <div className="people-results-one-user-body-left-bottom-header">
                                <p className="choose text-truncate mr-2"><span className="active"><a href="#">Improvement Ideas</a></span></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                               
                            </div>
                            <div className="people-results-one-user-body-left-bottom-body">
                            <ul className="list-group list-group-flush">
							{ 	this.state.PersonDetail.Improvements.map(( item, key ) =>
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

            <div className="people-results-one-user-body-right">
                <div className="people-results-one-user-body-right-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>Bosses feedback</span></h3>
							<p className="choose">
							
							<span className={ this.state.selectedChartTypeB	==	'week' ? "active" : null }>
								
							<a href="javascript:void(0);" onClick={ ()=> this.handleChartTypeB('week') } >Weeks</a></span>
							
							<span className="mx-2"> I </span> <span className={ this.state.selectedChartTypeB == undefined ?"active" :this.state.selectedChartTypeB	==	'month' ? "active" : null }>
								
								<a href="javascript:void(0);" onClick={ ()=> this.handleChartTypeB('month') } >Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Export<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
                            { 	this.state.chartDataB.map(( item, key ) =>
							(
								<div className="bar d-none d-xl-block" key={key}>
									<div className={"bar-fill bar-fill-"+(item.color)} style={{height: item.performance}}></div>
									<div className="bar-info">{ item.label }</div>
								</div>
							))
						}
                           
                        </div>
                    </div>
                </div>

                <div className="people-results-one-user-body-right-bottom">
                        <div className="right-container">
                            <div className="people-results-one-user-body-right-bottom-header">
                                <p className="choose text-truncate mr-2"><span className="active"><a href="#">Compliments</a></span></p>
                                <select name="comment" id="comment">
                                    <option value="april" selected>April</option>
                                    <option value="april">May</option>
                                    <option value="april">Jun</option>
                                </select>

                               
                            </div>
                            <div className="people-results-one-user-body-right-bottom-body">
                            <ul className="list-group list-group-flush"  style={{ background: '#fff' }}>
    
							{ 	this.state.PersonDetail.Compliments.map(( item, key ) =>
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
        </div>
    </div>


   	
      );
   }
}

