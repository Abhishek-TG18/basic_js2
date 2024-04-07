function calculateTotalCartValue  (){
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        
        sum+= arguments[index];
    }
    console.log(`The total cart value is ${sum}`);
}

calculateTotalCartValue(10,20,30,40,50,60,70,80,90,100,110);