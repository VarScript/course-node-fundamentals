function otherF() {
    breaks();
}

function breaks() {
    return 3 + z;
}

function breaksAsync(cb) {
    setTimeout(function() {
        try{
            return 3 + z;
        } catch (err) {
            console.error('Error in my asynchronous function');
            cb(err);
        }
    });
}
try {
    //otherF();
    breaksAsync(function(err) {
        console.log(err.message)
    });
} catch(err) {
    console.error('Something has broken...');
    console.error(err.message);
    console.log('But dont worry, we have captured it')
}

console.log('This is in the final');