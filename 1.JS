let users = ["Abhi","Mithun","Vaish","Shalini","Harsh"];
function isUserPresent(name){
        let flag=1;
      users.forEach((val)=>{
            if (name === val) {
                console.log(" Yes," ,name,"is a valid user");
                flag = 0;
            
            }
      })
      if(flag==1)
      console.log("NO,",name,"is not a valid user");
}
isUserPresent("Aabhi");