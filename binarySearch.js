/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in 
O(logn) time.

const arr=[1,2,3,4,5,6,7]
target = 5

*/

function search(nums, target) {
      let left=0;
      let right=nums.length - 1;

      while(left<=right){
            const mid=left + Math.floor(right-left/2);
	
            if(target>nums[mid]){
                left=mid+1;
            }
            if(target<nums[mid]){
                right=mid-1;
            }
            if(nums[mid]==target){
                return mid;
            }
        }
    return -1;

}
	
	console.log(search([-1,0,2,4,6,8],4))