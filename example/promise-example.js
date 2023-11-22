
function toastBread(duration) {
    console.log("Starting to toast bread...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration <= 3000) { // Duration in milliseconds
                resolve("Bread toasted perfectly.");
            } else {
                reject(new Error("The toast burned!"));
            }
        }, duration);
    });
}

/*
duration <= 3000: Bread toasted perfectly.
duration > 3000: Error: The toast burned!
*/
toastBread(4000)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.error(error);
    }).finally(() => {
        console.log("Toaster available.");
    });
