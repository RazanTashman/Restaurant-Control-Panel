$( document ).ready(function() {

var insertedItems=[]
var itemDetails={}
var counter =0


// console.log(counter)
//*******************************logain page**********88888888**********
	$("#myEarningsPage").hide()
	$("#panelPage").hide()
	$("#loginPge").show()
	
	$("#loginBut").click(function(){
		var password= $("#PW").val()
		var userName= $("#uName").val()

		if(userName==="RazanTashman" && password==="123"){
			$("#loginPge").hide()
			$("#panelPage").show()
			$("#menuTable").hide()
			$("#addingPopUp").hide()
		}
		else {
			alert("please enter valid password and username")
			$("#panelPage").hide()
			$("#loginPge").show()
		}
		
})
//**********************************************************************************

//######################### My Menu Page###########################################
$("#tab2").click(function(){
	$("#menuTable").show()
	})

$("#addingBut").click(function(){
			$("#addingPopUp").show()
	})

$("#submit").click(function(){
	counter++
	$("#addingPopUp").hide()
	var name =$("#itemNameInp").val()
	var price =$("#priceInp").val()
	var time =$("#time").val()
	var size =$("#size").val()
	itemDetails=makeItem(name,price,time,size)
	insertedItems.push(itemDetails)
	insertRowFunc(counter)
	
	
})


			

 

function makeItem(name,price,time,size){
	return{
		name:  	name,
		price: 	price,
		time: 	time,
		size: 	size 
	}
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//====================================ACTIONS OOP====================================================
// function removeItemFunc(){
// console.log("ddd")
// }

// function insertRowFunc(initial){
// var obj={}
// obj.counter=initial
// obj.inserting=inserting
// obj.butCreation= butCreation
// obj.invojing
// return obj
// }

// var inserting =function(){
// 	var table = document.getElementById("myTable");
//   var row = table.insertRow(counter);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   // cell2.setAttribute("id", "removeItem")
//   var invojing1 = insertRowFunc(counter)
// 	invojing1.butCreation()

//   cell2.document.insertAdjacentElement("beforeend", this.removeBut) 
//   cell2.insertAdjacentElement("beforeend", this.hideBut) 
//   cell2.insertAdjacentElement("beforeend", showBut) 
//   cell2.insertAdjacentElement("beforeend", editBut) 
// }

// var butCreation=function(){

//   var removeBut = document.createElement("button")
// 	removeBut.innerHTML = "Remove";
// 	removeBut.setAttribute("onClick", "removeItemFunc()")
// 	removeBut.setAttribute("id", "removeItem")
// 	removeBut.setAttribute("class", "actions")

// 	// removeBut.ref=counter

// 	var hideBut = document.createElement("button")
// 	hideBut.innerHTML = "Hide";
// 	hideBut.setAttribute("id", "hideItem")
// 	hideBut.setAttribute("class", "actions")

// 	var showBut = document.createElement("button")
// 	showBut.innerHTML = "Show";
// 	showBut.setAttribute("id", "showItem")
// 	showBut.setAttribute("class", "actions")

// 	var editBut = document.createElement("button")
// 	editBut.innerHTML = "Edit";
// 	editBut.setAttribute("id", "editItem")
// 	editBut.setAttribute("class", "actions")

// }
//======================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//======================================ACTIONS Normal function====================================
function insertRowFunc(initial){


	var table = document.getElementById("myTable");
  var row = table.insertRow(counter);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  // cell2.setAttribute("id", "removeItem")
  cell1.innerHTML = itemDetails['name'];

  // *******************ACTIONS BUTTONS*******************************
  var removeBut = document.createElement("button")
	removeBut.innerHTML = "Remove";
	removeBut.setAttribute("onClick", "removeItemFunc()")
	removeBut.setAttribute("id", "removeItem")
	removeBut.setAttribute("class", "actions")

	// removeBut.ref=counter

	var hideBut = document.createElement("button")
	hideBut.innerHTML = "Hide";
	hideBut.setAttribute("id", "hideItem")
	hideBut.setAttribute("class", "actions")

	var showBut = document.createElement("button")
	showBut.innerHTML = "Show";
	showBut.setAttribute("id", "showItem")
	showBut.setAttribute("class", "actions")

	var editBut = document.createElement("button")
	editBut.innerHTML = "Edit";
	editBut.setAttribute("id", "editItem")
	editBut.setAttribute("class", "actions")
	// *********************************************************************

  cell2.insertAdjacentElement("beforeend", removeBut) 
  cell2.insertAdjacentElement("beforeend", hideBut) 
  cell2.insertAdjacentElement("beforeend", showBut) 
  cell2.insertAdjacentElement("beforeend", editBut) 

  
}

// ===================================================================================================
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//##############################################################################################################################3


//************************My Earning Page**********************************************************************
$("#tab4").click(function(){
			$("#menuTable").hide()
			$("#myEarningsPage").show()
		
	})

function searchDropdown() {
  document.getElementById("Dropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("searchBox");
  filter = input.value.toUpperCase();
  div = document.getElementById("Dropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

//*****************************************************************************************************************

})



