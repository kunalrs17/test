//============================================
// Pollyfill
//============================================
// 1. Map - transform an array and get a new value array.
const radius = [2, 4, 7, 1];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
Array.prototype.myMap = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};
// Area:
// console.log(radius.map(area));
// console.log(radius.myMap(area));
// Circumference:
// console.log(radius.map(circumference));
// console.log(radius.myMap(circumference));
//============================================
// 2. forEach - .
Array.prototype.myForEach = function(callback){
    for (var i = 0; i < this.length; i++) {
       callback(this[i], i, this);
    }   
 }
//============================================
// 3. Filter - 
Array.prototype.myFilter = function (callback, context) {
    var arr = [];
    for (i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}
//============================================