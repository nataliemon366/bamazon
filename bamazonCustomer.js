var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"",
	password:"",
	database:"bamazon_db"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

var display = function(){
	var query = "SELECT * FROM products";
	connection.query(query, function(err, res){
        if(err) throw err;
        console.log("*********************************************");
        console.log("******** Welcome to Bamazon! ****************");
        console.log("*********************************************");
        console.log("");
        console.log("*Find your products below : ");
        console.log("");
		var table = new Table ({
            // (itemId,product_name, department_name, price, stock_quantity)
			head: ["Item ID", "Product Name", "Department", "Price", " Stock Quantity"],
            colWidths: [12,50,8,15,10],
            colAligns: ["center", "left", "right"],
            style: {
                head: ["aqua"],
                compact:true
            }
		});
		for(var i = 0; i < res.length; i++){
			table.push(
				[res[i].item_id,res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(table.toString());
	});
}
display();

// function purchasePrompt(){
// 	inquirer.prompt([
// 	{
// 		name: "ID",
// 		type: "input",
// 		message:"Please enter Item ID you like to purchase.",
// 		filter:Number
// 	},
// 	{
// 		name:"Quantity",
// 		type:"input",
// 		message:"How many items do you wish to purchase?",
// 		filter:Number
// 	},

//  ]).then(function(answers){
//  	var quantityNeeded = answers.Quantity;
//  	var IDrequested = answers.ID;
//  	purchaseOrder(IDrequested, quantityNeeded);
//  });
// };

// function purchaseOrder(ID, amtNeeded){
// 	connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res){
// 		if(err){console.log(err)};
// 		if(amtNeeded <= res[0].stock_quantity){
// 			var totalCost = res[0].price * amtNeeded;
// 			console.log("Good news your order is in stock!");
// 			console.log("Your total cost for " + amtNeeded + " " +res[0].product_name + " is " + totalCost + " Thank you!");

// 			connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = " + ID);
// 		} else{
// 			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
// 		};
// 		displayProducts();
// 	});
// };

// displayProducts(); 