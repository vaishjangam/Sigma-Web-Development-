console.log("Hello");
try{
    console.log(a);
}catch(err){
    console.log("Caught an error.. a is undefined");
    console.log(err);
}
finally{
    console.log("Hello2");
    console.log("Hello3");
    console.log("Hello4");
}