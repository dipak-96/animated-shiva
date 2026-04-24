function palindrome(num){
    let originalnum=0;
    while(num>0){
    let reversenum=0;
    let ld=num%10;
    reversenum=reversenum*10+reversenum;
    num=Math.floor(num/10);
if(original==reversenum){
    return "palindrome"
}
else{
    return "not palindrome"
}
}
}
console.log(palindrome(333));