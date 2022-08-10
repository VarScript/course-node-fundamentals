i = 0; 
let interval = setInterval(function() {
    console.log('Hi');
    if (i === 3) {
        clearInterval(interval)
    }
    i++
}, 1000);

setImmediate(function() {
    console.log('lo');
})



console.log(process);

console.log(__dirname);

console.log(__filename);



//si puedo no usar variables globales no usar variables globales