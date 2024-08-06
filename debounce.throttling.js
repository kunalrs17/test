//================================================
// #Debouncing
let counter = 0;
const getData = () => {
  console.log('Fetching Data' + counter++);
};
const debounce = (fn, delay) => {
  let timer;
  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const callAutoFetch = debounce(getData, 300);
// Testing the debounced function
// callAutoFetch();

//================================================
// #Throttling
const throttle = (func, delay) => {
  let timer = null;
  return (...args) => {
    if (timer == null) {
      func(...args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}