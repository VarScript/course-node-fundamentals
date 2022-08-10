async function hi(name) {
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log('Hi, ' + name);
            resolve(name);
        }, 1000);
    });
}


async function speak(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            //resolve(name);
            resolve('There is an error');
        }, 1000);
    });
}


async function bye(name) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
            console.log('bye, ', name);
            resolve();
        }, 1000);
    });

}

//--

async function main() {
    let name = await hi('Fabio'); 
    await speak();
    await speak();
    await speak();
    await bye(name);
    console.log('Ending process');
};
console.log('Starting process...');
main();
