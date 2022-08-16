console.time('all')
let sum = 0;
console.time('loop')
for (let i = 0; i < 10000; i++ ) {
    sum +=1;
}
console.timeEnd('loop');

// -- 

let sum2 = 0;
console.time('loop2')
for (let j = 0; j < 10000; j++ ) {
    sum2 +=1;
}
console.timeEnd('loop2');

console.time('async');
console.log('Start process async')
async()
    .then(() => {
        console.timeEnd('async');
    })

console.timeEnd('all');

function async() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Finish process async');
            resolve();
        })
    } )
}