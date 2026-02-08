/*
You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.
*/


function trappingWater(heights){
	let res=0;
	const leftMax=[];
	const rightMax=[];
	const n=heights.length
	
	leftMax[0]=heights[0];
	for(let i=1;i<n;i++){
		leftMax[i]=Math.max(leftMax[i-1],heights[i]);
	}
	
	
	
	rightMax[n-1]=heights[n-1];
	for(let i=n-2;i>=0;i--){
		rightMax[i]=Math.max(rightMax[i+1],heights[i]);
	}
	
	for(let i=0;i<n;i++){
		res=res + ( Math.min(rightMax[i],leftMax[i]) -heights[i]  )
	}
	
	return res;
	
}


console.log(trappingWater([0,2,0,3,1,0,1,3,2,1]))
