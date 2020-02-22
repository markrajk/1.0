import React, { Component  } from 'react';
import Constants from '../../constants/Constants';

class Home extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
			Persons				:	Constants.Persons,
			selectedImprove		:	'improvement',
			selectedChartType	:	'month',
			PersonDetail		:	Constants.PersonDetail,
			Ideas				:	Constants.PersonDetail.Improvements,
			chartData			:	Constants.PersonDetail.performanceMonth,
		};
	}
	
	componentDidMount(){
	}
	
	handleImproveAndCompliment=(type)=>{
		var data	=	'';
		if(type	==	'improvement'){
			data	=	this.state.PersonDetail.Improvements;
		}else{
			data	=	this.state.PersonDetail.Compliments;
		}
		this.setState({ selectedImprove	:	type,Ideas:data })
	}	
	
	handleChartType=(type)=>{
		var data	=	'';
		if(type	==	'month'){
			data	=	this.state.PersonDetail.performanceMonth;
		}else{
			data	=	this.state.PersonDetail.performanceWeek;
		}
		this.setState({ selectedChartType:type,chartData:data })
	}
	
	
   render(){
      return(
		   
    <div className="people-results-key-people">
        <div className="people-results-key-people-header">
            <div className="people-results-key-people-header-logout d-flex justify-content-between">
                <p className="mb-0">People</p>
                <p className="text-right align-middle"><a href="login">Logout</a> <i
                        className="material-icons align-middle">exit_to_app</i></p>
            </div>
            <h2 className="mt-1 align-middle">Results</h2>
            <div className="d-flex justify-content-between align-items-center">
                <p className="choose"><span><a href="/" className="active">My key people</a></span><span className="mx-2 divider"> I </span><a href="AllPeople">All people</a></p>
                <button>Remove from my key people</button>
            </div>
            
        </div>

        <div className="people-results-key-people-body">
            <div className="people-results-key-people-body-left">
                <div className="people">
                    <div className="card-header bg-white d-flex justify-content-between align-items-center">
                        <h3 className="m-0">People <span>{ this.state.Persons.length }</span></h3>
                        <span className="add-btn"></span>
                        
                    </div>
                    <ul className="list-group-flush p-0 m-0">
						{ 	this.state.Persons.map(( item, key ) =>
							(                       

						   <li className="list-group-item d-flex align-items-center" key={key}>
								<img className="rounded-circle" src="../../../assets/img/p-01.png" alt="#"/>
								<p className="name m-0 flex-fill">{ item.name }</p>
								<p className="prof m-0 text-start d-none d-xl-block">{ item.position }</p>
								<div className="text-right"><a href="javascript:void(0)" className="btn-custom btn-custom-green text-center">Great</a></div>
							</li>
							))
						}
                      
                    </ul>
                </div>
            </div>
            <div className="people-results-key-people-body-right">
                <div className="people-results-key-people-body-right-top">
                    <div className="graph-card bg-white graph-team-marketing">
                        <div className="graph-card-header d-flex justify-content-between">
                           <div>
                            <h3 className="text-truncate mr-2"><span>{ this.state.PersonDetail.name }</span> development</h3>
                            <p className="choose">
							
							<span className={ this.state.selectedChartType	==	'week' ? "active" : null }>
								
							<a href="javascript:void(0);" onClick={ ()=> this.handleChartType('week') } >Weeks</a></span>
							
							<span className="mx-2"> I </span> <span className={ this.state.selectedChartType == undefined ?"active" :this.state.selectedChartType	==	'month' ? "active" : null }>
								
								<a href="javascript:void(0);" onClick={ ()=> this.handleChartType('month') } >Months</a></span> </p>
                           </div>
                           <a className="share" href="#">Average<i className="material-icons align-middle ml-1">keyboard_arrow_down</i></a>
                        </div>
                        <div className="graph-card-body">
						{ 	this.state.chartData.map(( item, key ) =>
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

                <div className="people-results-key-people-body-right-bottom">
                        <div className="right-container">
                            <div className="people-results-key-people-body-right-bottom-header">
                                <p className="choose text-truncate mr-2">
								<span className={ this.state.selectedImprove	==	'improvement' ? "active" : null }>
								
								<a href="javascript:void(0);" onClick={ ()=> this.handleImproveAndCompliment('improvement') } >Improvement Ideas</a></span><span className="mx-2"> I </span>
								<span className={ this.state.selectedImprove	==	'complement' ? "active" : null }>
								<a href="javascript:void(0);" onClick={ ()=> this.handleImproveAndCompliment('complement') }>Compliments</a> </span>
								
								</p>
                                <select name="comment" id="comment" >
                                    <option   value="april" >April</option>
                                    <option value="may">May</option>
                                    <option value="jun">Jun</option>
                                </select>

                                
                            </div>
                            <div className="people-results-key-people-body-right-bottom-body">
                            <ul className="list-group list-group-flush" style={{ background: '#fff' }}>
                                
								{ 	this.state.Ideas.map(( item, key ) =>
									(
										<li className="list-group-item" key={ key }>
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
export default Home;
