/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
*/


function maxProfit(prices) {
      let L=0;
let maxProfit=0;
let maxL=0;
let maxR=0;


for(let R=1; R<prices.length; R++ ){
	const curProfit = prices[R] - prices[L];
	
	
	if(curProfit>maxProfit){
		maxProfit=curProfit
		maxL=L;
		maxR=R;
	}
	
	
	
	if(curProfit<=0){
		L=R;
	}
}
return maxProfit
  }


console.log("max profit", maxProfit([1,2,10,4,5,6]))
