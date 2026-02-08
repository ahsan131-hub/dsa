/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Sorted: [ -4, -1, -1, 0, 1, 2 ]
*/


function threeSum(nums){
	const res=[];
	nums.sort((a,b)=>a-b)

	for(let i=0; i<nums.length-2; i++){
		
		if(i>0 && nums[i]===nums[i-1]) continue;	

		let left = i+1;
		let right = nums.length-1;
		
		while(left < right){
			const sum = nums[i] + nums[left] + nums[right];
			if(sum==0){
				res.push([nums[i],nums[left],nums[right]]);

			while(left<right && nums[left]===nums[left+1]) left++;
			while(left<right && nums[right]===nums[right-1]) right--;
		    left++;
		    right--;
			}				
			if(sum<0){
				left++;
			}else if(sum>0){
				right--;
			}
				
			
		}
		
	}
	return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))