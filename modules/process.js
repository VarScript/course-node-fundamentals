// const process = require('process');

process.on('beforeExit', () => {
    console.log('The process will end');
});

process.on('exit', () => {
    console.log('The process ended');
    setTimeout(() => {
        console.log('This not will see never')
    }, 0);
});

process.on('uncaughtException', (err, origin) => {
    console.log('we have forget to catch the error');
    console.error(err);
    
});

//process.on('uncaughtRejection')

//functionWhatDoNotExist();

console.log('This if the error not pick up, not come out');