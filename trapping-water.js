/*
Container With Most Water
You are given an integer array heights where heights[i] represents the height of the 

You may choose any two bars to form a container. Return the maximum amount of water a container can store.
*/




function maxWater(heights){
	
	let maxWater=0;
	let left=0;
	let right=heights.length - 1;
	
	while(left<right){
		const height = Math.min(heights[left],heights[right]);
		const length = right-left;
		
		const area = height*length;
		maxWater=Math.max(area,maxWater);
		
		if(heights[left]<= heights[right]) left++;
		else right--
	}
	return maxWater;
}

console.log(maxWater([1,7,2,5,4,7,3,6]))