function hi(name, myCallback) {
    setTimeout(function () {
        console.log('Hi, ' + name);
        myCallback(name);
        
    }, 1000);
}


function speak(callbackSpeak) {
    setTimeout(function () {
        console.log('Bla bla bla bla...');
        callbackSpeak();
    }, 1000);
}


function bye(name, otherCallback) {
    setTimeout(function () {
        console.log('bye, ', name);
        otherCallback();
    }, 1000);

}


//Recursividad: llamar a la misma funcion pero con informacion ligeramente distinta
function conversation(name, times, callback) {
    if (times > 0) {
        speak(function () {
            conversation(name, --times, callback);
        });
    } else {
        bye(name, callback);
    }
}


//-- 

console.log('Starting process...');
hi('Fabio', function(name) {
    conversation(name, 3, function() {
        console.log('Ending process');
    });
});




//Esto es callback hell, cuando nuestro codigo funciona y lo tenemos de forma asincrona, pero muy malas practicas del codigo
// console.log('Starting process...');
// hi('Fabio', function () {
//     speak(function () {
//         speak(function () {
//             bye('Fabito', function () {
//                 console.log('Ending process...');
//             });
//         });
//     });
// });

 

