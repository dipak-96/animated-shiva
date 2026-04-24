function mindigit(num){
    let minddigit = 9;

    while(num > 0){
        let ld = num % 10;

        if(ld < minddigit){
            minddigit = ld;
        }

        num = Math.floor(num / 10);
    }

    return minddigit;
}

console.log(mindigit(7861)); // 1 ✅