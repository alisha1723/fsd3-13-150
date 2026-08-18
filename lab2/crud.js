import readline from "readline/promises";
import {writeFile,readFile }from "fs/promises";
import { stdin,stdout } from "process";

const FILE = "product.json"
const saveCart=()=>{
 await writeFile(FILE,JSON.stringify(CaretPosition,null,2))
};
const getCart=()=>{
  const data = await readFile(FILE,"utf-8");
  return JSON.parse(data);
};
const main = async () => {
    const cin = readline.createInterface({ input : stdin, output: stdout});
    let choice;
    do{
    console.log("Welcome to shopping cart "); 
    console.log("1 ---------- Add to cart");
    console.log("2 ---------- Show cart");
    console.log("3 ---------- Remove Item");
    console.log("4 ---------- Update Quantity");
    console.log("5 ---------- Checkout");
    let choice = await cin.question("Enter your choices : ");
    console.log("Entered choice:", choice);
    switch(choice){
        case 1:
            console.log("add to cart");
            break;
        case 2:
            console.log("show cart item");
            break;
        case 3 :
            console.log("remove items");
            break;
        case 4:
            console.log("update quantity");
            break;
        case 5 :
            console.log("see you later...");
            process.exist()
            break;
        default:
            console.log("Invalid choice! try again");

    }
    }
    while(choice != "5");
    cin.close();
};

main();
