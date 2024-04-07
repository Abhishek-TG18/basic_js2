function generateOtp(){

   let digits = '1234567890;
   let len = digits.length;
   for (let index = 0; index <16; index++) {
     otp+=digits[Math.floor(Math.random()*len)];
    
   }

   return otp;
}
console.log(generateOtp());
