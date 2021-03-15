module.exports = function check(str, bracketsConfig) {
	const brackets = new Map(bracketsConfig);
	const stack = [];

  	str.split('').forEach(el => brackets.get(stack.slice(-1)[0]) !== el ? stack.push(el) : stack.pop());

  	return stack.length == 0;
}

