$( document ).ready(function() {

var orderPriceArray=[]
var insertedItems=[]
var totalOrderArray=[]
var itemDetails={}
var counter =0
var orderCounter=0
var qty
var value

// // console.log(counter)
// //*******************************logain page**********88888888**********
	// $("#myEarningsPage").hide()
	// $("#panelPage").hide()
	// $("#loginPge").show()
	// $("#grid").hide()

	$("#myEarningsPage").hide()
	
	$("#loginBut").click(function(){
		var password= $("#PW").val()
		var userName= $("#uName").val()

		if(userName==="RazanTashman" && password==="123"){
			$("#loginPge").hide()
			$("#panelPage").show()
			$("#menuTable").hide()
			$("#addingPopUp").hide()
			$("#grid").show()
		}
		else {
			alert("please enter valid password and username")
			$("#panelPage").hide()
			$("#loginPge").show()
		}
		
})
// //**********************************************************************************

//######################### My Menu Page###########################################
$("#tab2").click(function(){
	$("#menuTable").show()
	$("#Dropdown").hide()
	$("#myEarningsPage").hide()

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
	orderPriceArray.push(value)
	var itemList = $("<a>"+itemDetails['name']+"</a>").appendTo("#Dropdown").on("click", function toggle(){
     value= $(this).text()
    
    // // var joindArray=orderArray.join()
      console.log("value:" , value)
      $("#Dropdown").hide()
       // $("#searchBox").val("")
      var typingItems= $("<span>"+value+"</span>") 
      $("#editable").append(typingItems)
    }) 
	
	
	insertRowFunc(counter)
	
	
})

// function toggle(){
//         this.toggleClass("crossed")
//       }

			

 

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

function insertOrderRowFunc(initial){
	var table = document.getElementById("ordersTable");
  var row = table.insertRow(initial)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)
  // cell2.setAttribute("id", "removeItem")
  cell1.innerHTML = initial;
  cell2.innerHTML = value
  // var totalOrderPrice= (itemDetails['price'])*qty
  // totalOrderArray.push()
  var x= this.price
  console.log("price:",x)
  cell3.innerHTML = x*qty
  cell4.innerHTML = new Date().toLocaleDateString()
  
}

// ===================================================================================================
	
	//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



//##############################################################################################################################3


//************************My Earning Page**********************************************************************
$("#tab4").click(function(){
			$("#menuTable").hide()
			$("#myEarningsPage").show()
			$("#addingOrders").hide()
		
	})

$(".dropbtn").click(function(){
	$("#Dropdown").show()
})

$("#OrderSubmit").click(function(){
	orderCounter++
	$("#addingOrders").hide()

	 qty =$("#QtyInp").val()
	var orderSize =$("#orderSize").val()
	
	// itemDetails=makeItem(name,price,time,size)
	// insertedItems.push(itemDetails)
	
	// var itemList = $("<a>"+itemDetails['name']+"</a>").appendTo("#Dropdown").on("click", function toggle(){
 //    var value= $(this).text()
 //    orderArray.push(value)
 //    // var joindArray=orderArray.join()
 //      console.log("value:" , value)
 //      $("#Dropdown").hide()
 //       // $("#searchBox").val("")
 //      var typingItems= $("<span>"+value+"</span>") 
 //      $("#editable").append(typingItems)
 //    }) 
	
	
	insertOrderRowFunc(orderCounter)
})
$("#addOrderBut").click(function(){
$("#addingOrders").show()
})



// $("#addOrdItem").click(function(){
//   // skillsArray.push($("#skills").val());
//   // $("#searchBox").empty();
//   $("#editable").empty();
//   $("#size").empty();
//   $("#itemNameInp").empty();
//   console.log("done")
  
// })



//*****************************************************************************************************************

})





