/*
Input: nums = [1,2,4,6]
Output: [48,24,12,8]


prefix=[1,1,2,8]
suffix=[48,24,6,1]

*/


function productOfSum(nums){
	const prefix=[];
	const suffix=[];
	const res=[];
	
	
	prefix[0] = 1;
	
	
	for(let i=1; i<nums.length; i++){
		prefix[i] = prefix[i-1] * nums[i-1];
	}
	
	suffix[nums.length-1] = 1
	for(let i=nums.length-2; i>=0; i--){
		suffix[i] = suffix[i+1] * nums[i+1];
	}
	
	
	for(let i=0;i<nums.length;i++){
		res[i] = prefix[i] * suffix[i];
	}
	
	return res;
	
	
}

console.log("product of sum: ", productOfSum([1,2,4,6]))






