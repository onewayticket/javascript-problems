
 // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

// First attempt used a for loop with two if statements, which added any number that was a multiple of 3 and 5 twice, thefore produced an incorrect result. I solved this problem by using the OR || operator in the if statement.

	var solution = function(input) {
		var sum = 0;

		for (var i = 1; i < input; i++) {
			if (i % 3 === 0 || i % 5 === 0) {
				sum += i;
			}


		}
		
		return sum;
	} 
	

	var input = 1000;

	var answer = solution(input);

	console.log("Answer is: " + answer);