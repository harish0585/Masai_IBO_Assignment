




/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// First Question - 
const getUniqueProductCount=(input)=>{
    var result = {}
    for(var i=0;i<input.length;i++){
        if(result[input[i].productName]===undefined){
            result[input[i].productName]  = 1
        }else{
            result[input[i].productName] +=1
        }
    }
    console.log(result)
}


 getUniqueProductCount(listOfProducts)

// Second Question - 
const getUniquePrducts=(arr)=>{
    let result = [];
    for(var i =0;i<arr.length;i++){
        var value = false

        for(var j=0;j<result.length;j++){
            if(arr[i].productName === result[j].productName){
                result[j].quantity +=arr[i].quantity
                value = true
            }
            
        }
        if(!value){
            result.push(arr[i])
        }
    }
console.log(result)
}

getUniquePrducts(listOfProducts)