// const observable = rxjs.Observable.create(observer => {
//   observer.next('Hello');
//   observer.next('World');
// });
// observable.subscribe(val => print(val));




// const clicks = rxjs.fromEvent(document, 'click');
// clicks.subscribe(click => console.log(click));




// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolved!');
//   }, 1000);
// });
// const obsvPromise = rxjs.from(promise);
// obsvPromise.subscribe(result => print(result));




// const timer = rxjs.timer(1000);
// timer.subscribe(done => print('Done!'));




// const interval = rxjs.interval(1000);
// interval.subscribe(int => print(new Date().getSeconds()));




// Prints results on browser
function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}

