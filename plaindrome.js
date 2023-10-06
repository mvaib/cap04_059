let str = "vaibhav";
let bag = "";
for(let i = (str.length)-1; i >=0; i--){
    bag+= str[i];
}
if(str === bag){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}