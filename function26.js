function missingnumber(num){
    let present={};
    while(num>0){
        let lastdigit=num%10;
        present[lastdigit]=true;
        num=Math.floor(num/10);
    }

    for(let i=0;i<=9;i++){
        if(!present[i]){
            console.log(i);
        }
    }
}
missingnumber(37865);