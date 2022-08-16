function async() {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

    async( function (err, dato) {
        if (err) {
            console.error('We have a error');
            console.error(err);
            //throw err; IT WILL NOT WORK
        }
        console.log('everything went well',dato)
    })
