const args = process.argv.slice(2);
const num = parseInt(args[0],10);

if(isNaN(num) || !num){
    console.log("Misiing number")
}else{
    for (let i = 0; i < num; i++)
    console.log("C is fun")
}