let browserName = "Chrome";

function getbrowserDetail(browserName) {
    console.log(browserName, ": 122.0.6261.112") //prints Chrome : 122.0.6261.112
}

function checkBrowserVersion(callback) {
    //callback function calls after 2s
    setTimeout(() => { callback(browserName) }, 2000)  //calls getbrowserDetail function passing the browserName(chrome) as arguments
}

checkBrowserVersion(getbrowserDetail); //calls checkBrowserVersion fucntion passing the getbrowserDetail function as argument