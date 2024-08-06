
//================================================
// # Call
let name1 = {
    firstname: 'First1',
    lastname: 'Last1',
    printName: function () {
        console.log(this.firstname+ " " +this.lastname);
    }
}
let name2 = {
    firstname: 'First2',
    lastname: 'Last2'
}
// name1.printName.call(name2);
//---------------------------- 
// # Call & Apply & Bind
const printName = function (home, state) {
    console.log(this.firstname+ " " +this.lastname+ " from "+home+ " " + state);
}
let name3 = {
    firstname: 'Sachin',
    lastname: 'Tendulkar'
}
let name4 = {
    firstname: 'Virendra',
    lastname: 'Sehwag'
}
printName.call(name4, 'Mumbai', 'MHS'); // comma separated arguments
printName.apply(name4, ['Mumbai', 'MHS']); // array as argument
// # Bind
const printBind = printName.bind(name4, 'Mumbai', 'MHS'); // can we stored and called later
