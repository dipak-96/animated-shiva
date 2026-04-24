function ispalindrome(num){
    let reversenum=0;
    let original=num
    while(num>0){
        let lastdigit=num%10;
        reversenum=reversenum*10+lastdigit;
        num=Math.floor(num/10);
    }
   
     
          if(original==reversenum){
        return "palindrome";
     }
     else{
        return" notpalindrome";
     }

}
console.log ((ispalindrome)(232));