export default {
  Teams		:	[{
						id:1,
						name:'Software',
						value:'software',
					},{
						id:2,
						name:'Sales',
						value:'sales',
					},{
						id:3,
						name:'Management',
						value:'management',
					},
				],  
	UserTeams		:	[{
						id:1,
						name:'Software',
						position:'Team Lead',
					},{
						id:2,
						name:'Sales',
						position:'Basic Member',
					},{
						id:3,
						name:'Management',
						position:'Basic Member',
					},
				], 
	Boss		:	[{
						id:1,
						name:'Franz Liebcneth',
						position:'Lawyer',
						feedback:'Weekly',
					},{
						id:2,
						name:'John Walter',
						position:'CEO',
						feedback:'Every 2nd week',
					},{
						id:3,
						name:'Rosa Luxemburg',
						position:'CEO',
						feedback:'Once per month',
					},
				],	
	Persons		:	[{
						id:1,
						name:'Piter Brown',
						team_name:'Sales',
						position:'Software Engg',
						boss_name:'Steve Jobs',
						feedback:'Every 2nd week',
					},{
						id:2,
						name:'John Smith',
						team_name:'Management',
						position:'Python dev',
						boss_name:'Steve Jobs',
						feedback:'Weekly',
					},{
						id:3,
						name:'Max',
						team_name:'Software',
						position:'Node dev',
						boss_name:'Steve Jobs',
						feedback:'Once per month',
					},
				],
  CompanyTeams:	[{
						id:1,
						teamName:'Martketing',
						teamLead:'Vishal',
						teamSize:20,
					},{
						id:2,
						teamName:'Sales',
						teamLead:'Max',
						teamSize:25,
					},{
						id:3,
						teamName:'Frontend',
						teamLead:'Jill Bowow',
						teamSize:18,
					},{
						id:4,
						teamName:'Martketing',
						teamLead:'Vishal',
						teamSize:20,
					},{
						id:5,
						teamName:'Sales',
						teamLead:'Max',
						teamSize:25,
					},{
						id:6,
						teamName:'Frontend',
						teamLead:'Jill Bowow',
						teamSize:18,
					}
				], 
 TeamMembers:	[{
						id:1,
						name:'vishal',
						position:'Engineer',
					},{
						id:2,
						name:'sumit',
						position:'Engineer',
					},{
						id:3,
						name:'Max',
						position:'CEO',
					},{
						id:4,
						name:'sumit',
						position:'Engineer',
					},{
						id:5,
						name:'Max',
						position:'CEO',
				}],
	TeamLeads:	[{
						id:1,
						name:'John Walter',
						position:'Engineer',
					},{
						id:2,
						name:'Radha',
						position:'Engineer',
					},{
						id:3,
						name:'Sham',
						position:'Engineer',
				}],
	AdminRights:	[{
							id:1,
							name:'Vishal',
							position:'Engineer',
							Right:'Admin rights',
						},{
							id:2,
							name:'Radha',
							position:'Engineer',
							Right:'Admin rights',
						},{
							id:3,
							name:'Sham',
							position:'Engineer',
							Right:'View rights only',
						},{
							id:4,
							name:'Max',
							position:'CEO',
							Right:'Admin rights',
					}],
	PersonDetail:	{
							id:1,
							name:"Jess Gregory's",
							TeamName:"Software",
							Position:"Junior Developer",
							Improvements	:	[
												{
													id:1,
													title:'I think the best solution is to kill our enemies first and then start our launch.'
												},{
													id:2,
													title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?'
												},{
													id:3,
													title:'Lorem ipsum dolor sit amet.'
												},{
													id:4,
													title:'I think the best solution is to kill our enemies first and then start our launch'
												},{
													id:5,
													title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?'
												},{
													id:6,
													title:'Lorem ipsum dolor sit amet.'
												}
											],		
							Compliments	:	[
												{
													id:1,
													title:'I think the best solution is to kill our enemies first and then start our launch.'
												},{
													id:2,
													title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?'
												}
											],
							performanceWeek	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											],
												
						performanceMonth	:	[
												{
													id:1,
													label:'JAN',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'FEB',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'MAR',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'APR',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'MAY',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'JUN',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'JUL',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'AUG',
													color:'orange',
													performance:'48%'
												},{
													id:9,
													label:'SEP',
													color:'green',
													performance:'60%'
												},{
													id:10,
													label:'OCT',
													color:'green',
													performance:'55%'
												},{
													id:11,
													label:'NOV',
													color:'orange',
													performance:'48%'
												},
										],
					},
											
	MyTeams:	[{
							id:1,
							name:'Marketing',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
						},{
							id:2,
							name:'Sales',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
						},{
							id:3,
							name:'UX/UI',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
						},{
							id:4,
							name:'Cleaning',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
						},{
							id:5,
							name:'UX/UI',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
						},{
							id:6,
							name:'Cleaning',
							performance	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											]
					}],
	TeamDetail	:	{
							id:1,
							name:'Cleaning',
							teamPerformanceWeek	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
											],				
						teamPerformanceMonth	:	[
												{
													id:1,
													label:'JAN',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'FEB',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'MAR',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'APR',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'MAY',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'JUN',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'JUL',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'AUG',
													color:'orange',
													performance:'48%'
												},{
													id:9,
													label:'SEP',
													color:'green',
													performance:'60%'
												},{
													id:10,
													label:'OCT',
													color:'green',
													performance:'55%'
												},{
													id:11,
													label:'NOV',
													color:'orange',
													performance:'48%'
												},
											],
							
							peoplePerformanceWeek	:	[
												{
													id:1,
													label:'Wk 1',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'Wk 2',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'Wk 3',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'Wk 4',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'Wk 5',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'Wk 6',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'Wk 7',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'Wk 8',
													color:'orange',
													performance:'48%'
												},
							],
							peoplePerformanceMonth	:	[
												{
													id:1,
													label:'JAN',
													color:'red',
													performance:'30%'
												},{
													id:2,
													label:'FEB',
													color:'red',
													performance:'38%'
												},{
													id:3,
													label:'MAR',
													color:'orange',
													performance:'45%'
												},{
													id:4,
													label:'APR',
													color:'green',
													performance:'49%'
												},{
													id:5,
													label:'MAY',
													color:'green',
													performance:'70%'
												},{
													id:6,
													label:'JUN',
													color:'green',
													performance:'60%'
												},{
													id:7,
													label:'JUL',
													color:'green',
													performance:'55%'
												},{
													id:8,
													label:'AUG',
													color:'orange',
													performance:'48%'
												},{
													id:9,
													label:'SEP',
													color:'green',
													performance:'60%'
												},{
													id:10,
													label:'OCT',
													color:'green',
													performance:'55%'
												},{
													id:11,
													label:'NOV',
													color:'orange',
													performance:'48%'
												},
							],
							Improvements	:	[
												{
													id:1,
													title:'I think the best solution is to kill our enemies first and then start our launch.'
												},{
													id:2,
													title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?'
												},{
													id:3,
													title:'Lorem ipsum dolor sit amet.'
												},{
													id:4,
													title:'I think the best solution is to kill our enemies first and then start our launch'
												},{
													id:5,
													title:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores asperiores delectus, aliquam autem possimus deleniti ipsum officia minus ratione iure?'
												},{
													id:6,
													title:'Lorem ipsum dolor sit amet.'
												}
											]				
					}
};