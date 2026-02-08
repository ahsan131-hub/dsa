// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

function containsDuplicate(nums){
	const map={}
	
	for(let num of nums){
		if(map[num]){
			return true
		}
		map[num]=num
	}	
	console.log(map)
	return false
}

function containDuplicateSet(nums){
	return ( new Set(nums)).size < nums.length
}





console.log(containsDuplicate([0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,0])) // true
console.log(containsDuplicate([1,2,3,4])) // false




