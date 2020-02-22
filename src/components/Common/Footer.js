import React, { Component } from 'react';

import MailchimpSubscribe from "react-mailchimp-subscribe"
const mailChimpUrl = 'https://martinronquillo.us12.list-manage.com/subscribe/post?u=2bf47353b0ec1083d076f08af&id=c336a410cf';
class Footer extends Component{
	
	constructor(props) {
		super(props);
		this.state = {
		  openFancyBox	: false,
		  signUpMail	: null,
		};
	}
	
	componentDidMount(){
      window.addEventListener('scroll', (event) => {
		 var stickyclass	=null;
         if(event.pageY>=5){
             stickyclass = 'affix';
         }else{
             stickyclass = null;
         }
			var el= document.getElementById('navBarId');
			el.classList.add(stickyclass);
      });
	}
	
	openFancyBox = (picIndex) => {
		if(picIndex != false){
			var el= document.getElementById('navBarId');
			el.classList.remove('affix');
		}
		this.setState({	openFancyBox: !this.state.openFancyBox, picIndex: picIndex });
	}	
	
	
   render(){
      return(
      <div>
		<section className="newsletter-block">
			  <div className="container">
				 <div className="row m-0 justify-content-center">
					<div className="col-md-11 col-lg-8 card">
					   <span className="newsletter-mail-icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>          
					   <div className="row">
						  <div className="col-md-6 align-self-center">
							 <p>Sign up for the Bites Newsletter and get inspiration delivered to you every week. Mindset hacks, food tips, and more! </p>
						  </div>
						  <div className="col-md-6 mail-chimp">
						  <MailchimpSubscribe url={mailChimpUrl}/>

						  </div>
					   </div>
					</div>
				 </div>
			  </div>
		   </section>
		  <footer>
			<div className="instagram-block">
			  <div className="container p-0">
				 <div className="row justify-content-center">
				  <div className="col-10">
					<div className="row text-center">
					  <div className="col socail-icons m-auto p-0">
						<span className="faceboock-icon"><a href="https://www.facebook.com/papayame/"><img src="../../../assets/images/Facebook.svg" /></a></span>
						<span className="instagram-icon"><a href="https://www.instagram.com/papaya_me/"><img src="../../../assets/images/Instagram.svg" /></a></span>
					  </div>
					</div>
					{/*<div className="row mt-4 pt-2">
					
						<Lightbox isOpen={this.state.openFancyBox} picIndex={this.state.picIndex} openFancyBox={ (val)=>this.openFancyBox(val) } />
				
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(0) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/01.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(1) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/02.jpg" alt="" className="thumb-img" />
					  </a>
					 <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(2) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/03.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(3) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/04.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(4) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/05.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(5) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/06.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(6) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/07.jpg" alt="" className="thumb-img" />
					  </a>
					 <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(7) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/08.jpg" alt="" className="thumb-img" />
					  </a>
					  <a className="fancybox col p-0" onClick={ ()=>this.openFancyBox(8) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/09.jpg" alt="" className="thumb-img" />
					  </a>
					   <a className="fancybox col p-0 d-none d-md-flex" onClick={ ()=>this.openFancyBox(9) } href="javascript:void(0)">
						<img src="../../../assets/images/instagram/10.jpg" alt="" className="thumb-img" />
					  </a>
					 
					</div>*/}
					<div className="row mt-4">
					  <div className="col m-auto text-center p-0 pt-2">
						<img src="../../../assets/images/S-papaya-logo.svg" className="footer-logo" />
					  </div>
					</div>
				   </div>
				 </div>

			  </div>
			</div>

			{/*<div className="footer-menu">
			  <div className="container">
				<div className="row">
				  <div className="col">
					<ul className="footer-navbar">
					  <li><a href="#">About us</a></li>
					  <li><a href="#">Meal Planning</a></li>
					  <li><a href="#">Bites</a></li>
					  <li><a href="#">Courses</a></li>
					  <li><a href="#">Meditations</a></li>
					</ul>
				  </div> 
				</div>
			  </div>
			</div>*/}
			<div className="copy-right-block">
			  <p>Change your mind, change your life</p>
			</div>

		  </footer>
	  </div>

      );
   }
}
export default Footer;
