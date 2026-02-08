/*

You are given an integer array piles where piles[i] is the number of bananas in the ith pile. You are also given an integer h, which represents the number of hours you have to eat all the bananas.

You may decide your bananas-per-hour eating rate of k. Each hour, you may choose a pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, you may finish eating the pile but you can not eat from another pile in the same hour.

Return the minimum integer k such that you can eat all the bananas within h hours.


	piles=[1,4,3,2], 9
	h = 2  num of hour you have to eat all bananas.
	k = eating rate ??

	min k ? such that all banana are eaten in h hours.

*/
class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l=0;
	let r=Math.max(...piles);
	let minK=0
	
	while(l<=r){
		const mid=l+Math.floor((r-l)/2)
		const hoursK=this.hoursToEat(piles,mid)
		
		
		if(hoursK<=h){
			minK=mid
			r=mid-1;
		}else if(hoursK>h){
			l=mid+1;
		}
		
	
	}
	return minK
	
	
    }

 hoursToEat(piles,k){
	return piles.map(pile=>Math.ceil(pile/k)).reduce((acc,cur)=>acc+cur,0)
}

}
