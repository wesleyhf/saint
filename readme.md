# Saint is an organizer of promises. 🙏

## npm

https://www.npmjs.com/package/saint

## How to use it
```js
const saint = require('./saint.js');
```

## Functions
```js
saint.offer(val); // return a promise.resolve
saint.bless(fun); // place a promise on the queue
saint.miracle(fun); // runs when your promises is finished
saint.lifeGoesOn(fun); // runs when your promises has failed
saint.pray(fun, err); // execute all your promises on queue
```

## Examples

```js
const p1 = x => x + 1;
const p2 = x => x * 2;

// passing initial value through the functions
saint.offer(1) // val is 1
    .bless(p1) // val is 2
    .bless(p2) // val is 4
    // .miracle()
    // .lifeGoesOn()
    .pray((x) => {
        console.log(x); // result is 4
    });
```

```js
const p1 = () => console.log('p1');
const p2 = () => console.log('p2');

// creating an array of promises
saint.bless(p1)
    .bless(p2)
    .miracle(() => console.log('A Miracle happened.'))
    .lifeGoesOn(() => console.log('Your faith is not enough.'))
    .pray();
```
