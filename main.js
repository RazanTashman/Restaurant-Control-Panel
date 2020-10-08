$( document ).ready(function() {

// var orderPriceArray=[]
var insertedItems=[]
// var totalOrderArray=[]
var itemDetails={}
var counter =0
var orderCounter=0
var qty
var value
var priceValue
var subTotal
var totalEarning=0



// // console.log(counter)
// //*******************************logain page**********88888888**********
	$("#myEarningsPage").hide()
	$("#panelPage").hide()
	$("#loginPge").show()
	$("#grid").hide()
	$("#ViewMenuPage").hide()
	$("#ViewMenuTable").hide()
	

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
	$("#ViewMenuPage").hide()
	$("#ViewMenuTable").hide()
	



	})

$("#addingBut").click(function(){
			$("#addingPopUp").show()
			$("#myTable").hide()
			$("#addingBut").hide()
			
			$("#itemNameInp").val("")
			$("#priceInp").val("")
			$("#time").val("")
			$("#size").val("")


	})

$("#submit").click(function(){
	counter++
	$("#myTable").show()
	$("#addingPopUp").hide()
	$("#addingBut").show()

	var name =$("#itemNameInp").val()
	var price =$("#priceInp").val()
	var time =$("#time").val()
	var size =$("#size").val()
	itemDetails=makeItem(name,price,time,size)
	insertedItems.push(itemDetails)
	// orderPriceArray.push(price)
	var itemList = $("<a>"+itemDetails['name']+"</a>").appendTo("#Dropdown").on("click", function toggle(){
     value= $(this).text()
        
    // // var joindArray=orderArray.join()
      console.log("value:" , value)
      $("#Dropdown").hide()
       // $("#searchBox").val("")
      var typingItems= $("<span>"+value+"</span>") 
      $("#editable").append(typingItems)
    }) 

		$.each(insertedItems, function(i,item){
 	var tableMenu = document.getElementById("ViewMenuTable");
  var rowMenu = tableMenu.insertRow(i)
  var cell1Menu = rowMenu.insertCell(0)
  var cell2Menu = rowMenu.insertCell(1)
  var cell3Menu = rowMenu.insertCell(2)
  var cell4Menu = rowMenu.insertCell(3)
   cell1Menu.innerHTML = item['name'];
   cell2Menu.innerHTML = item['price'];
   cell3Menu.innerHTML = item['time'];
   cell4Menu.innerHTML = item['size'];
   
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
	removeBut.setAttribute("class", "actionBut")
	// removeBut.setAttribute("style", "padding: 1px 1px")
	// // removeBut.setAttribute("style", "width: 8%")
	// // removeBut.setAttribute("style", "font-size: 15px")
	

	
	

	// removeBut.ref=counter

	var hideBut = document.createElement("button")
	hideBut.innerHTML = "Hide";
	hideBut.setAttribute("id", "hideItem")
	hideBut.setAttribute("style", "padding: 1px 1px")
	hideBut.setAttribute("class", "actionBut")

	var showBut = document.createElement("button")
	showBut.innerHTML = "Show";
	showBut.setAttribute("id", "showItem")
	showBut.setAttribute("style", "padding: 1px 1px")
	showBut.setAttribute("class", "actionBut")

	var editBut = document.createElement("button")
	editBut.innerHTML = "Edit";
	editBut.setAttribute("id", "editItem")
	editBut.setAttribute("style", "padding: 1px 1px")
	editBut.setAttribute("class", "actionBut")
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
  $.each(insertedItems, function(i,item){
  	if(item["name"]===value){
  		 priceValue=item["price"]
  	}
  })
  subTotal=priceValue*qty
  console.log("price:",priceValue)
  cell3.innerHTML = subTotal
  totalEarning += subTotal
  $("#TotalEarningDiv").text(totalEarning)
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
			$("#ViewMenuPage").hide()
			$("#ViewMenuTable").hide()
		
	})

$(".dropbtn").click(function(){
	$("#Dropdown").show()
})

$("#OrderSubmit").click(function(){
	orderCounter++
	$("#addingOrders").hide()
	$("#ordersTable").show()
	$("#addOrderBut").show()
	

	 qty =$("#QtyInp").val()
	var orderSize =$("#orderSize").val()

	
	
	insertOrderRowFunc(orderCounter)
})


$("#addOrderBut").click(function(){
$("#addingOrders").show()
$("#ordersTable").hide()
$("#addOrderBut").hide()


			// $("#itemNameInp").val("")
			// $("#priceInp").val("")
			// $("#time").val("")
			// $("#size").val("")

	$("#searchBox").empty();
  $("#editable").empty();
  $("#QtyInp").val("");
  $("#orderSize").val("")
})




// $("#addOrdItem").click(function(){
//   // skillsArray.push($("#skills").val());
//   // $("#searchBox").empty();
//   $("#editable").empty();
//   $("#size").empty();
//   $("#itemNameInp").empty();
//   console.log("done")
  
// })

  $("#tab1").hover(function(){
    $(this).css("width", "150%");
    }, function(){
    $(this).css("width", "100%");})

    $("#tab2").hover(function(){
    $(this).css("width", "150%");
    }, function(){
    $(this).css("width", "100%");})

  	$("#tab3").hover(function(){
    $(this).css("width", "150%");
    }, function(){
    $(this).css("width", "100%");})

    $("#tab4").hover(function(){
    $(this).css("width", "150%");
    }, function(){
    $(this).css("width", "100%");})
 
//*****************************************************************************************************************



//===================================View====================================================
$("#tab3").click(function(){
	
	$("#Dropdown").hide()
	$("#myEarningsPage").hide()
	$("#menuTable").hide()
	$("#addingOrders").hide()
	$("#ViewMenuTable").show()
	$("#ViewMenuPage").show()


})




})





