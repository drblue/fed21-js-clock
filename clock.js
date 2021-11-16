console.log(1);
console.log(2);
console.log(3);

setTimeout( () => {
	console.log("Yooohooo!");
}, 5000 );

console.log(4);
console.log(5);


let tick = 0;
setInterval( () => {
	tick++;
	console.log("tick:", tick);
}, 1000);

console.log("ticker started");
