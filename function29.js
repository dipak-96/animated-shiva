function digitexit(num,target){
    while(num>0){
        let lastdigit=num%10;
        if(lastdigit==target){
            return true;
        }
        num=Math.floor(num/10);
       

    }
    return false;

}
console.log(digitexit(234,3));
console.log(digitexit(765,9));





