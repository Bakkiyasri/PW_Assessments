 function runTestsWithoutBreak(testType){
switch(testType)
{
    case "Functional":
        console.log("Functional testing")
    case "Smoke":
        console.log("Smoke Testing")  
    case "Regression":
        console.log("Regression")
    default:
        console.log("Default Ad-hoc Testing")
}
 }

function runTests(testType){
switch(testType)
{
    case "Functional":
        console.log("Functional testing")
        break
    case "Smoke":
        console.log("Smoke Testing")  
        break
    case "Regression":
        console.log("Regression")
        break
    default:
        console.log("Default Ad-hoc Testing")
        break
}
}

console.log("If Else");
function launchBrowser(varbrowser){
if(varbrowser=="chrome")
{
    console.log("Chrome is selected");
} else if(varbrowser=="edge")
{
    console.log("edge is selected");
}else
    console.log("Nothing is selected");
} 

console.log("\nSwitch Case without break:");
runTestsWithoutBreak("Functional")
runTestsWithoutBreak("Regression")
runTestsWithoutBreak("selenium")   
console.log("\nSwitch Case with break:");       
runTests("Functional")
runTests("Regression")
runTests("playwright")
console.log("\nIf-Else:");
launchBrowser("chrome")
launchBrowser("edge")
launchBrowser("nil")