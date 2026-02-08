/*
You are given two strings s1 and s2.

Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

Both strings only contain lowercase letters.

Example 1:

Input: s1 = "abc", s2 = "lecabee"

Output: true
Explanation: The substring "cab" is a permutation of "abc" and is present in "lecabee".

Example 2:

Input: s1 = "abc", s2 = "lecaabee"

Output: false
*/
 function checkInclusion(s1, s2) {
	 const s1Map={}
	 	let s2Map={}
	 		for(let i=0;i<s1.length;i++){
	 			s1Map[s1[i]]=(s1Map[s1[i]] ||  0) + 1;
	 		}
	 	let L=0;	
		
	 		for(let R=0;R<s2.length;R++){
	 			s2Map[s2[R]]=(s2Map[s2[R]] ||  0) + 1;
			
	 			if(R-L+1 > s1.length){
	 				s2Map[s2[L]]--
	 				if(s2Map[s2[L]]===0) delete s2Map[s2[L]];
	 				L++
				
	 			}
	 			if(R-L+1 ===s1.length && isEqual(s1Map,s2Map)) return true
	 		}
	 		return false
}


function isEqual(obj1, obj2) {
     const keys1 = Object.keys(obj1);
     const keys2 = Object.keys(obj2);

     if (keys1.length !== keys2.length) return false;

     for (let key of keys1) {
         if (obj1[key] !== obj2[key]) return false;
     }

     return true;
}


console.log(checkInclusion("abc","lecabee"))
