$( document ).ready(function() {

	$("#panelPage").hide()
	$("#loginPge").show()
	
	$("#loginBut").click(function(){
	var password= $("#PW").val()
	var userName= $("#uName").val()
	console.log(password,userName)
	if(userName==="RazanTashman" && password==="123"){
		alert("right pw")
	}
	else {
	alert("please enter valid password and username")
	}	
		$("#loginPge").hide()
		$("#panelPage").show()

})
})
