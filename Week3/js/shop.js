var shop = {
	customerName: "Mitushi",
	totalPrice: 0,
	products: [
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"
	],
	prices: [0,10,199,159],

	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name");
		customerElement.textContent = this.customerName;
	},
	displayProductList: function() {
		var productsText = "";
var productsElements = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$"	+ this.prices[0]+"</span>" + this.products[0]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ this.prices[1]+"</span>" + this.products[1]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ this.prices[2]+"</span>" + this.products[2]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ this.prices[3]+"</span>" + this.products[3]+ "</li>";

productsElements.innerHTML = productsText;
	},

 calculateTotalPrice: function() {
 	return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;

 	},

 	displayTotalPrice: function() {
 		this.totalPrice=this.calculateTotalPrice();
 		var totalPriceELement= document.getElementById("total-price");
 		totalPriceELement.textContent=this.totalPrice;
 	}
 }

 shop.displayCustomerName();
 shop.displayProductList();
 shop.displayTotalPrice();







// var customerName = "Mitushi";
// var totalPrice = 0;

// var customerElement = document.getElementById("customer-name");
// customerElement.textContent = customerName;

// var totalPriceELement = document.getElementById("total-price");
// totalPriceELement.textContent = totalPrice;


// var products = [	
// 	"Brooklyn T-Shirt White",
// 	"Brooklyn T-Shirt Black",
// 	"Apple Watch",
// 	"Android Phone"
// ];

// var prices = [10, 10, 199, 159];

// var productsText = "";
// var productsElements = document.getElementById("product-list");

// productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[0]+"</span>" + products[0]+ "</li>";

// productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[1]+"</span>" + products[1]+ "</li>";

// productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[2]+"</span>" + products[2]+ "</li>";

// productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[3]+"</span>" + products[3]+ "</li>";

// productsElements.innerHTML = productsText;

// totalPrice = prices [0] +prices [1] + prices [2] + prices [3];
// var totalPriceELement = document.getElementById("total-price");
// totalPriceELement.textContent = totalPrice;

// var greeting;
// var time = new Date().getHours();
// if (time < 12) {
// 	greeting = "Good Morning";
// } else if (time < 23) {
// 	greeting = "Good Afternoon";
// }else {
// 	greeting = "Good Evening";
// }

// var hoursText = document.getElementById("hours");
// hoursText.textContent = greeting;