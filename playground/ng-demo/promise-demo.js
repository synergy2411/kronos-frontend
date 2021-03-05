// producer code
function delay(ms) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            // resolve({ msg: "SUCCESS" })
            reject(new Error("Something bad happened..."))
        }, ms);
    });
    return promise;
}

// consumer code
delay(3000)
    .then(function (response) {             // Promise is resolved
        console.log("RESPONSE : ", response);
    })
    .catch(function (err) {                 // Promise is rejected
        console.log("ERROR : ", err);
    })