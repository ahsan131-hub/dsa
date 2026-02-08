/*
Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]

*/
function dailyTemperatures(temperatures) {
	const stack=[]; 
	const res=new Array(temperatures.length-1).fill(0);

	for(let i=0;i<temperatures.length;i++){
		const t = temperatures[i];
		/* warmer day after this*/
		while(stack.length-1 >= 0 && t > stack[stack.length-1][0]){
			const [t,index]=stack.pop();
			res[index]=i-index;
		}
		
		stack.push([t,i]);
	}
	return res;
}

console.log(dailyTemperatures([30,38,30,36,35,40,28]));