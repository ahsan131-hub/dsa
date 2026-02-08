

// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.
function kFrequent(nums, k){
	
/*	if(nums.length<k){
		return -1
	}

	let freq={

	}



	for(let i = 0; i<nums.length; i++){
		freq[nums[i]]= (freq[nums[i]] ||0 ) +1
	}


	const arr=Object.entries(map).map([key,val]=>{
		return [val, parseInt(key)]
	})

	// now sort the arr
	return arr.sort(()=>a[0]-b[0]).map(ele=>ele[1]).slice(0,k)*/
}



// using Bucket
function kFrequentBucket(nums,k){
	
	const map={};
		
	for(let i=0;i<nums.length;i++){
		map[nums[i]]=(map[nums[i]] || 0) + 1;
	}
	
	let bucketArr=new Array(nums.length-1).fill(-1);
	
	Object.entries(map).map(([key,val]) => bucketArr[val]=key);
	console.log(bucketArr)
    return bucketArr.slice(bucketArr.length-k-1,bucketArr.length-1);
	
}




console.log(kFrequentBucket([1,2,2,2,3,3,6],2))