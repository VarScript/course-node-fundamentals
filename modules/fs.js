const fs = require('fs');

function read(rout, cb) {
    fs.readFile(rout, (err, data) => {
        cb(data.toString());
    });
}

function writing(rout, content, cb) {
    fs.writeFile(rout, content, (err) => {
        if (err) {
            console.error("I haven't may writing", err);
        } else {
            console.log("It has been writing correctly");
        };
    });
}


function deleteA(rout, cb) {
    fs.unlink(rout,cb);
}

deleteA(__dirname + '/archive.txt', console.log);
//writing(__dirname + '/archive1.txt', 'I am a new archive')
//read(__dirname + '/archive.txt', console.log);