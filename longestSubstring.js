/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Input: s = "zxyzxyz"
Output: 3


z x y z x y z



*/


function lengthOfLongestSubstring(s){
	let L=0;
	let maxLength=0;
	let seen=new Set();
	
	for(let R=0;R,R<s.length-1;R++){
		while(seen.has(s[R])){
			seen.delete(s[L]);
			L++;
		}

		seen.add(s[R])
		maxLength=Math.max(R-L+1,maxLength)
	
	}
	
	
	
	
	
	
	return maxLength;
}


console.log(lengthOfLongestSubstring("zxyzxyz"))