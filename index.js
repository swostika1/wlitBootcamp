// const {sum,multiply}  = require('./localmodule.js')
// import {multiply} from './es-module.js'
// import {sum} from './es-module.js'
// import subsstract, {sum,multiply} from './es-module.js'
import {npr_usd,usd_npr} from './currency-converter.js'
// console.log("Hello!!!")
//  console.log(window)
//  console.log(document)
// console.log(global)
// console.log("sum", sum(10,5))
// console.log("Product", multiply(10,5))
// console.log("Diff", subsstract(10,5))
console.log("US currency:", npr_usd(500))
console.log("Nepali currency:", usd_npr(2))