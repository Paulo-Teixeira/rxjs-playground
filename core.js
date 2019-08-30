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




// const mix = rxjs.of('whatever', ['you', 'want'], 14, true, {cool: 'stuff'});
// mix.subscribe(val => print(val));



// TODO Fix this with v.6
const cold = rxjs.Observable.create(observer => {
  observer.next(Math.random());
})
const hot = cold.publish();
cold.subscribe(a => print(`Subscriber A: ${a}`));
cold.subscribe(b => print(`Subscriber B: ${b}`));
//hot.connect();
hot.subscribe(a => print(`Subscriber A: ${a}`));
hot.subscribe(b => print(`Subscriber B: ${b}`));




// Prints results on browser
function print(val) {
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
}

