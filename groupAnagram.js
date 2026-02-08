/*
	Group Anagram
*/


function groupAnagrams(strs){
	// code:str array
	const map={

	};

	for(let i=0;i<strs.length;i++){
		if(map[getStrCode(strs[i])] === undefined){
			map[getStrCode(strs[i])] = [];
		}

		map[getStrCode(strs[i])].push(strs[i]);

	}

	return Object.entries(map).map(([key,val])=>val);

}





function getStrCode(str){
	const counts= new Array(26).fill(0);
	for(let i=0;i<str.length;i++){
		const pos = str.charCodeAt(i)-'a'.charCodeAt(0);
		counts[pos]++;  
	}

	return counts.join(",");
}







console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))

