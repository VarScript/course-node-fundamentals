//Promises are a more elegant and readable syntax for performing callbacks, thus creating much more scalable and understandable code for all people.

function hi(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hi, ' + name);
            resolve(name);
        }, 1000);
    });
}


function speak(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            //resolve(name);
            reject('There is an error');
        }, 1000);
    });
}


function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('bye, ', name);
            resolve();
        }, 1000);
    });

}



//--

console.log('Starting process...');
hi('Fabio')
    .then(speak)
    .then(bye)
    .then((name) => {
        console.log('Ending process');
    })
    .catch(error => {
        console.log('An error has ocurred: ');
        console.log(error);
    })
//--

