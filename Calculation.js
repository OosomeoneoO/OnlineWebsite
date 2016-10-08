var x = prompt("What Is The FIRST value you need to have calculated (radius for circles, and min number for random number)");
console.log(x);
var o = prompt("The operation: add, subtract, multiply, divide, root (only square roots), exponent, circumference of circle, A of circle, A of sphere, natural log of 2, natural log of 10, E log 2, E log 10, arc cosine, absolute value, arc sine, arc tangent, arc tangent 2(as quotient of arguments), rounded up, rounded down, rounded(to nearest number), cosine, E^x, Natural logarithm(of x (base E)), sine(of x), tangent(of x), random number(0 or 1)");
console.log(o);

/*
	This is to find a value to use in the operation, and to find the actual operation, keep in mind that
	you need the exact number or else it does not calculate correctly
*/


if (o == "add" || o == "subtract" || o == "multiply" || o == "divide" || o == "root" || o == "exponent" || o == "circumference of circle" ||o ==  "A of circle" || o == "SA of sphere" || o == "natural log of 2" || o == "natural log of 10" || o == "E log 10" || o == "arc cosine" || o == "absolute value" || o == "arc sine" || o == "arc tangent" || o == "arc tangent 2" || o == "rounded up" || o == "rounded down" || o == "rounded" || o == "cosine" || o == "E^x" || o == "Natural logarithm" || o == "sine" || o == "tangent" || o == "random number"){
	if (o == "add")
	{
		var y = prompt("What Is The SECOND value you need to have calculated");
		console.log(y);
		console.log(x + y);
		//At the moment add does not work because it is adding strings, looking for possible fixes
	}
	if (o == "subtract"){
		var y = prompt("What Is The SECOND value you need to have calculated");
		console.log(y);
		console.log(x - y);
		// subtracting and putting on console logs
	}
	if (o == "multiply") {
		var y = prompt("What Is The SECOND value you need to have calculated");
		console.log(y);
		console.log(x * y);
		// multiplying and putting on console logs
	}
	if (o == "divide") {
		var y = prompt("What Is The SECOND value you need to have calculated");
		console.log(y);
		console.log(x / y);
		// dividing and putting on console logs
	}
	if (o == "root") {
		console.log(Math.sqrt(x));
		// square rooting and putting on console logs
	}
		if (o == "exponent") {
		var y = prompt("what will the exponent be?");
		console.log(Math.pow(x,y));
		// finding a value of the exponent, and using that to put the value on the console.logs
	}
	if (o == "circumference of circle") {
		console.log(Math.PI * 2 * x);
		// taking the radius, and doubling, then multiplying by PI and putting on console logs
	}
	if (o == "A of circle") {
		console.log(Math.PI * Math.pow(x,2));
		// taking the radius, multiplying it by itself, then multiplying by PI and putting on console logs
	}
	if (o == "A of sphere") {
		console.log(4 * Math.PI * Math.pow(x,2));
		// taking the radius, multiplying it by itself, then multiplying by PI, multiplying by 4 and putting on console logs
	}
	if (o == "natural log of 2") {
		console.log(Math.LN2);
		// the natural log of 2 is put on console logs
	}
	if (o == "natural log of 10") {
		console.log(Math.LN10);
		// the natural log of 10 is put on console logs
	}
	if (o == "arc cosine") {
		console.log(Math.Acos(x));
		// the arc cosine of x is put on the console logs
	}
	if (o == "absolute value") {
		console.log(Math.abs(x));
		// the absolute value of x is put on console logs
	}
	if (o == "arc sine") {
		console.log(Math.Asin(x));
		// the arc sine of x is put on console logs
	}
	if (o == "arc tangent") {
		console.log(Math.Atan(x));
		// the arc tangent of x is put on console logs
	}
	if (o == "arc tangent 2") {
		console.log(Math.Atan2(x));
		// the arc tangent of x in qoutients is put on console logs
	}
	if (o == "rounded up") {
		console.log(Math.ceil(x));
		// the x is rounded up and is put on console logs
	}
	if (o == "rounded down") {
		console.log(Math.floor(x));
		// the x is rounded down and is put on console logs
	}
	if (o == "rounded") {
		console.log(Math.round(x));
		// the value of x is rounded, and is put on console logs
	}
	if (o == "cosine") {
		console.log(Math.log(x));
		// the value of xs cosine in radians is put on console logs
	}
	if (o == "E^x") {
		console.log(Math.exp(x));
		// the value of E^x is put on console logs
	}
	if (o == "Natural logarithm") {
		console.log(Math.log(x));
		// the value of x logged with E is put on console logs
	}
	if (o == "E^") {
		console.log(Math.exp(x));
		// the value of E^x is put on console logs
	}
} else {
	alert("Use the actual operations said, (not in peranthesis)");
}

/*
	This is for the use of making sure the inputs alotted are the correct kind, and the if is for checking that they inputed a value of opperation allowed
*/
