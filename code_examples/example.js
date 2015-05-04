var example = true;

function foo(arg) {
	console.log( "do", arg);
	arg = example ? true : false;
	return arg;
}