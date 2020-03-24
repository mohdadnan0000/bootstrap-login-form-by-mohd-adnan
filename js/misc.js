//Script For Vertically Centered An Element
var h = window.innerHeight;
var h1=(h/2)-200;
$(document).ready(function(){
    $('.login-form').css(
        {"margin-top":""+h1+"px"},
    );
});

//Scripts For Toggling Of Password
$(document).ready(function(){
	$('.toggle-password').on('click',function(){
		var x = document.getElementById("password");
		if (x.type == "password") 
		{
			x.type = "text";
			$('#pw-toggle').removeClass("fa-eye-slash");
			$('#pw-toggle').addClass("fa-eye");
		}
		else 
		{
			x.type = "password";
			$('#pw-toggle').removeClass("fa-eye");
			$('#pw-toggle').addClass("fa-eye-slash");
		}
	});
});
