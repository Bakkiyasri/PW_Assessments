console.log("\nCONSTANT - KEYWORD: Redeclaration/ reassignmrnt not allowed");
const browserVersion = "chrome"
function getBrowserVersion()
{
    console.log("Inside function:", browserVersion);
    if(browserVersion=="chrome"){
        console.log("Inside block:",browserVersion);
       //let browserVersion = "edge" // if you aadd this line, it throws Reference error
        console.log("Changed value:",browserVersion);
       }
}
console.log("Before calling function:", browserVersion);
getBrowserVersion()
console.log("After calling function:", browserVersion);

console.log("\nLET - KEYWORD: redeclaration not allowed");
let lbrowserVersion = "chrome"
function lgetBrowserVersion()
{
  console.log("Inside function:", lbrowserVersion);
    if(lbrowserVersion=="chrome"){
      //console.log("Inside block:",lbrowserVersion); //throws error since same variablle reassigned inside block
        let lbrowserVersion = "edge" 
        console.log("Changed value:",lbrowserVersion);
       }  
        if(lbrowserVersion=="chrome"){
        console.log("Inside 2nd block:",lbrowserVersion);
        }  
       console.log("Outside block:",lbrowserVersion);
}
console.log("Before calling function:", lbrowserVersion);
lgetBrowserVersion()
console.log("After calling function:", lbrowserVersion);

console.log("\nVAR - KEYWORD: Redeclaration/ reassignmrnt are allowed")
var vbrowserVersion = "chrome"
function vgetBrowserVersion()
{
    console.log("Inside function:", vbrowserVersion); //undefined
    var vbrowserVersion = "chrome"
    console.log("Inside function:", vbrowserVersion);
    if (vbrowserVersion=="chrome")
    {
        console.log("Inside Block:",vbrowserVersion);
        var vbrowserVersion = "edge"
        console.log("Changed value:",vbrowserVersion);
    }
   console.log("Outside Block:", vbrowserVersion);
}
console.log("Before calling function:", vbrowserVersion);
vgetBrowserVersion()
console.log("After calling function:", vbrowserVersion);