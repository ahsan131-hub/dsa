class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
		
		for(let i=0;i<strs.length;i++){
		if(strs[i])
			 strs[i]=`${strs[i].length}#${strs[i]}`;			
		}
		
		return strs.join("")
	
	}

    /**
     * @param {string} str
     * @returns {string[]}
     */
    /*
	decode(str) {
		const strs=str.split(/\d+#/)
		strs.shift()
		return strs

	}*/
	
	
	/*	4#hello6#world!*/
	/*decode without using regex*/
	decode(str){
	
		const res=[];
		let idx=0;
		
		
		
		while(idx<str.length){
			let j=idx;
			
			while(str[j]!=="#"){
				 j++;
			}
			
			const size=parseInt(str.substring(idx,j))
			
			idx=j+1
			j=idx+size
			
			const decodedSeg=str.substring(idx,j);
		
			res.push(decodedSeg);
			idx=j;
		}
		
		return res;
	
	
	
	
	
	
	
	
	
	}
	
	
	
	
	
}


const solution = new Solution()

const encoded = solution.encode(["Hello","World"])

console.log(solution.decode(encoded))

