const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
  ];

  let maxProduct={name:" ",price:0};
  let minProduct={name:"",price:Number.MAX_VALUE};

  products.forEach((element) => {

            if(element.price>maxProduct.price){
                maxProduct=element;
            }    
  });
 

  products.forEach((element) => {

            if(element.price<minProduct.price){
                minProduct=element;
            }    
  });
 console.log(maxProduct)
  console.log(`The product wit maximum amount is ${maxProduct.name} which is priced at ${this.price}`);
  console.log(`The product wit minimum amount is ${minProduct.name} which is priced at ${this.price}`);