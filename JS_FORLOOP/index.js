// for loop = repeat some code a limited amount of times
/*
for (let i = 1; i <= 20; i++){

    if(i == 13){

        break;
    }
    else{
        console.log(i);
    }
}
*/

for (let i = 1; i <= 5; i ++){
    for(let j = 5; j >=i; j--){

        console.log(`*`);
    }
    console.log(` `);
}