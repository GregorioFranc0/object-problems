// Objects

let ryan = {
	name: "Ryan"
}

ryan.skillZ = [];
ryan.skillZ.push("Programmer")

delete ryan.skillZ
ryan.skillSet = []

ryan['isProgrammer'] = true

console.log(ryan);
console.log(Object.keys(ryan).join(" "));
console.log(Object.keys(ryan));

console.log(Object.keys(ryan).join(" "))

let printVals = obj => {
	let arr = Object.keys(ryan)
	for (let key of arr) {
		console.log(obj[key])
	}
}
printVals(ryan)



console.log(Object.keys(ryan).join(" "))

let printVals = obj => {
	let arr = Object.keys(ryan)
	for (let key of arr) {
		console.log(obj[key])
	}
}
printVals(ryan)
