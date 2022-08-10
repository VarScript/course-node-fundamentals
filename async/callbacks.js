//Callback es la funcion que l;lama a otra funcion

function hi(name, myCallback) {
    setTimeout(function () {
        console.log('Hi, ' + name);
        myCallback();
        
    }, 1000)
}

function bye(name, otherCallback) {
    setTimeout(function () {
        console.log('bye,', name);
        otherCallback();
    }) 

}

console.log('Starting process...');

hi('Fabio', function () {
    bye('Fabito', function () {
        console.log('Ending process...');
    });
    
});

// hi('Fabio', function() {});
// bye('Fabio', function() {});

