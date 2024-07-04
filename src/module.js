exports.greet = (who) => {
    console.log(`Hello, ${who}!`);
};

exports.syntax = 'CommonJS';

exports.max = max;

function max(a, b) {
    return a > b ? a : b
}

/// ---------------> CommonJS 语法(module.exports和exports只能同时存在一种) <--------------- ///

// module.exports = {
//     syntax: 'CommonJS',
//     greet: (who) => {
//         console.log(`Hello, ${who}!`);
//     },
//     max
// }