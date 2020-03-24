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
			$(this).html('<span class="fas fa-eye field-icon toggle-password" id="pw-toggle"></span>');
		}
		else 
		{
			x.type = "password";
			$(this).html('<span class="fas fa-eye-slash field-icon toggle-password" id="pw-toggle"></span>');
		}
	});
});
