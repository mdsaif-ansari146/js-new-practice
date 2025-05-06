const accountId = 122
let accountEmail = "saif@google.com"
var accountPassword = "12345"
accountCity = "India"
let accountState;

// accountId = 3  // not allowed

accountEmail = "hv@gmail.com"
accountPassword = "000"
accountCity = "DELHI"
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountState,accountId,accountEmail,accountPassword, accountCity])
