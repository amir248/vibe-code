function oK(){
    return new Promise((resolve)=>{
        function hiWorld(){
            console.log("hi");
        }
        setTimeout(()=>{
            resolve(hiWorld());
        },3777);
    });
}; //oK

function second(){
    return new Promise ((resolve)=>{
        function helloWorld(){
            console.log('PisimiZda');

        }
        resolve(helloWorld());
    })
}

async function main(){
    await oK();
    await second();
}
main();
