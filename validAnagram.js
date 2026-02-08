// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

function validAnagram(s,t){
	
	if(s.length !== t.length){return false}
	
	// create array with 26 characters
	const counts = new Array(26).fill(0);

	const baseCode=charCodeAt("a");
	
	for(let i=0;i<s.length;i++){
		counts[charCodeAt(s[i])-baseCode]++;
		counts[charCodeAt(t[i])-baseCode]--;
	}

	
	return counts.every((ele)=>ele===0);
}

function charCodeAt(char){
	return char.charCodeAt(0)
}



console.log(validAnagram("racecar","carrace")) //true
console.log(validAnagram("racecar","carraceww")) //true