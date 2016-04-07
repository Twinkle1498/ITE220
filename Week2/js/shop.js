var customerName = "Mitushi";
var totalPrice = 0

var customerElement = document.getElementById("customer-name");
customerElement.textContent = customerName

var totalPriceELement = document.getElementById("total-price");
totalPriceELement.textContent = totalPrice



var products = [	
	"Brooklyn T-Shirt White",
	"Brooklyn T-Shirt Black",
	"Apple Watch",
	"Android Phone"
];

var prices = [10, 10, 199, 159];

var productsText = "";
var productsElements = document.getElementById("product-list");

productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[0]+"</span>" + products[0]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[1]+"</span>" + products[1]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[2]+"</span>" + products[2]+ "</li>";

productsText += "<li class='list-group-item'><span class='badge'>$"	+ prices[3]+"</span>" + products[3]+ "</li>";

productsElements.innerHTML = productsText;

totalPrice = prices [0] +prices [1] + prices [2] + prices [3];
var totalPriceELement = document.getElementById("total-price");
totalPriceELement.textContent = totalPrice;

var hours="";
var hoursText = document.getElementById("hours");

var time = new Date().getHours();
if (time < 12) {
	greeting = "Good Morning";
} else if (time >=12 && time < 18) {
	greeting = "Good Afternoon";
}else if(time >=18 && time <23) {
	greeting = "Good Evening";
}

