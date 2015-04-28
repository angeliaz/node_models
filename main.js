var fibonacci = function(n) {
	if(n === 0) {return 0;}
	if(n === 1) {return 1;}
	if(n < 0) {throw new Error('n should >= 0');}
	if(n > 10) {throw new Error('n should <= 10');}
	return fibonacci(n-1) + fibonacci(n-2);
}

if(require.main === module) {

	// 如果是直接执行 main.js，则进入此处
  	// 如果 main.js 被其他文件 require，则此处不会执行。
	var n = Number(process.argv[2]);
	console.log(process.argv);
	console.log(fibonacci(n));
}

// console.log(fibonacci(5));
exports.hello = function () {
	console.log(require.main);
	console.log(module);
}

exports.fibonacci = fibonacci;