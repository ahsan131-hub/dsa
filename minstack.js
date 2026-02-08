/*
tokens = ["1","2","+","3","*","4","-"]








*/





class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
		const stack=[]
		
		for(let i=0;i<tokens.length;++){
			
			if(!isOperator(tokens[i])){
				stack.push(parseInt(tokens[i]));
				continue;
			}
			
			const sOpd=stack.pop()
			const fOpd=stack.pop()
			
			const res=calc(tokens[i],fOpd,sOpd);
			stack.push(parseInt(res));
		
		}
		return stack.pop();
	}
	
	isOperator(char){
		return char==="*" || char==="/" || char === "+" || char === "-"
	}
	
	calc(opt,fOpd,sOpd){
		switch(opt){
			case "+":
			return fOpd+sOpd;
			case "-";
			return fOpd-sOpd;
			case "*";
			return fOpd*sOpd;
			case "/";
			return Math.trunc(fOpd/sOpd);
			default:
			 break;
		}
		return -1;
	}
	
	
	
}
