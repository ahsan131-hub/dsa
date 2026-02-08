/*

Two Integer Sum II
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.
Input: numbers = [1,2,3,4], target = 9
Output: [1,2]
*/



function twoSum(numbers, target){
	const left=0;
	const right=numbers.length-1;
	
	
	while(right>=left){
		if(number[right] + number[left] < target){
			left++;
		}
		
		if(number[right] + number[left] > target){
			right--;
		}
		
		if(number[right] + number[left] === target){
			return [left+1,right+1];
		}
	}
	
	return []
}






