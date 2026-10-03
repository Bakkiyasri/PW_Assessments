function numType(num){
if(num==0)
{
    return "Zero"
}
else if(num>0){
return "Positive"
}
else if(num<0)
{
    return "Negative"
}
}
console.log(numType(31));
console.log(numType(-10));
console.log(numType(0));