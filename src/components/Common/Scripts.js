import React, { Component } from 'react';
import {Helmet} from "react-helmet";
class Header extends Component{
   render(){
      return(
		 <div className="application">
            <Helmet>
				<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
				<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
				<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
				<script>

					   $(document).ready(function() {
						   
						$(window).on("scroll", function() {   
						  if ($(window).scrollTop() >= 5) {
							$("nav.navbar").addClass("affix");                      
						  }            
						  else {             
							$("nav.navbar").removeClass("affix");     
						  }
						})


						  //~ $(".fancybox").fancybox()



						$(document).on("click","#sendEmailBtn",function(){
						   $("#sendtomail").toggle();
						});

						$(document).on("click","#calories-range",function(){
						   $("#calories-range-show").toggle();
						});

						var slider = document.getElementById("Caloriesslideinput");
						  var output = document.getElementById("Caloriesslider-range");
						  output.value = slider.value;
						  slider.oninput = function() {
							output.value = this.value;
						  }

						 
						 $(document).on("click","#modalsendemail",function(){
						
							$("#emailaddressModal").modal("show");
							  
							$(".inside-shop-modal").addClass("after_modal_appended");
						  

							$('.modal-backdrop').appendTo('.inside-shop-modal');   
						  

							$('body').removeClass("modal-open");
							$('body').css("padding-right","");     
						});

						});   
   
				</script>
            </Helmet>
        </div>
     
      );
   }
}
export default Header;
