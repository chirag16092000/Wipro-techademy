const myPromise = new Promise(function(resolve,reject){
    let x = 1;
    console.log(x);
    if(x>=0){
        setInterval(() =>{
            x=x*2;
            resolve(console.log(x));
        },2000);
    }
    else{
        reject("error");
    }
})


