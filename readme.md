# Richie Rich
A JavaScript library for rich prototypes

![Richie Rich Logo](https://themovierat.files.wordpress.com/2013/02/logo_art1.jpg)

This is a simple library designed to give a belt of good utility functions throughout your well known data types


## Documentation

1. [Number]
2. [Object]
3. [Array]

## Examples

A few examples of what this library offers

```javascript
//Number prototype
(3).minutes();
// 180000

(3).times(function(i) {
    console.log(i);
});
// 0
// 1
// 2

(3).isEven();
// false
(3).isOdd();
// true

// Object prototype
({
    prop: {
        name: 'Test'
    }
}).getProperty('prop.name');
// 'Test'

// Array prototype
[{a: 1}, {a: 1}, {a: 2}].groupBy('a');
/*
{
  1: [{a: 1}, {a: 1}],
  2: [{a: 2}]
}
*/
```
