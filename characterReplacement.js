/*
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

*/


function characterReplacement(s, k) {
	const counts=new Map()
	let L=0;
	let maxF=0
	for(let R=0;R<s.length;R++){
		counts.set(s[R], (counts.get(s[R]) || 0) +1 );
		maxF=Math.max(maxF, counts.get(s[R]))
		
		
		while(R-L+1-maxF>k){
			L++
			counts.set(s[R], (counts.get(s[R]) || 0) - 1 );
		}
	}
	return Math.max(maxF, R-L+1)

}