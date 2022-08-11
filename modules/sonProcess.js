const { exec, spawn } = require('child_process');
// similar const exec = require('child_process').exec;

/*
// will allow us to run command in any terminal
// we can bring the code and start work with it
exec('node console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout)
});
*/


let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', function(data) {
    console.log('Its dead?')
    console.log(process.killed);
    console.log(data.toString());
});

process.on('exit', function() {
    console.log('The process end')
    console.log(process.killed);
})