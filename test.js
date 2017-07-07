const saint = require('./saint.js');

// test 1
// let test = saint.promise((data) => {
//     let arr;
//
//     return 'xablau';
//     return arr[1];
// }, err => {
//     console.log('errou', err);
// });
//
// test.then(value => {
//     console.log('ok', value);
// }, err => {
//     console.log('errou', err);
// });

const p1 = (x) => {
    // console.log(x);
    return x + 1;
}

const p2 = (x) => {
    // console.log(x);
    return x * 2;
}

saint.offer(1)
    .bless(p1)
    .bless(p2)
    .pray((x) => {
        console.log(x);
    });

// saint.bless(() => console.log('z'));

// const p1 = () => console.log('promessa 1');
// const p2 = () => console.log('promessa 2');
// const p3 = () => console.l('ferrou');

// test 2
// saint.bless(p1);
// console.log(saint);

// saint.bless(p1)
    // .bless(p3)
    // .miracle(() => {
    //     console.log('miracle aconteceu viva');
    // })
    // .lifeGoesOn(() => {
    //     console.log('inferno de novo');
    // })
    // .pray();

// saint.bless(p2);
// console.log(saint);

// console.log('caramba haha');
//
// saint.wish(() => {
//     console.log('asdasdasdasd');
// });
//
// console.log('caramba oi de novo');
