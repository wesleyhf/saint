# Santo is an organizer of promises. 🙏

## How to use it
```js
const santo = require('./santo.js');
```

## Functions
```js
santo.offer(val); // return a promise.resolve
santo.bless(fun); // place a promise on the queue
santo.miracle(fun); // runs when your promises is finished
santo.lifeGoesOn(fun); // runs when your promises has failed
santo.pray(fun, err); // execute all your promises on queue
```

## Examples

```js
const p1 = x => x + 1;
const p2 = x => x * 2;

// passing initial value through the functions
santo.offer(1) // val is 1
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
santo.bless(p1)
    .bless(p2)
    .miracle(() => console.log('A Miracle happened.'))
    .lifeGoesOn(() => console.log('Your faith is not enough.'))
    .pray();
```
