console.log('something');
console.info('something2');

//--

console.error('Error');
console.warn('Alarm');

//--

var table = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'zz'
    }
]
console.log(table);
console.table(table);

//--

console.group('Conversation');
console.log('Hi');
console.group('bla')
console.log('Bla bla bla');
console.log('Bla bla bla');
console.log('Bla bla bla');
console.groupEnd('bla')
console.log('Bye');
console.groupEnd('conversation')

console.log('Other things');

//--

function one() {
    console.group('one');
    console.log('This is of the One');
    console.log('This too');
    two();
    console.log('We have arrived to the One')
    console.groupEnd('one');
}

function two() {
    console.group('two');
    console.log('Know are in the Two');
    console.groupEnd('two');
}

console.log('We started');
one();

//--

console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.count('times');