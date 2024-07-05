import './styles.css';
import { min } from './math.js'; // ES6 模块语法
import { concat } from './strings.ts' // ES6 模块语法
// const module = require('./module.js') // CommonJS 语法

// module.greet(module.syntax + `, max(1, 2) = ${module.max(1, 2)}, min(1, 2) = ${min(1, 2)}, ${concat('Type', 'Script')}`);

import { greet, max, syntax } from './module.js'; // ES6 模块语法

greet(syntax + `, max(1, 2) = ${max(1, 2)}, min(1, 2) = ${min(1, 2)}, ${concat('Type', 'Script')}`);

const date = require('./date.js') // CommonJS 语法
window.onload = () => {
    setInterval(() => {
        document.getElementById('date').innerHTML = date.now();
    }, 1000)
}
