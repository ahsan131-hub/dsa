/*
Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
*/



function isValidSoduko(board){
	let row=new Set()
	let col=new Set()
	const sqrMap={}
		
		for(let i=0; i<9; i++){
			 row=new Set()
			 col=new Set()
			for(let j=0; j<9; j++){
				if(board[i][j]==".") continue;
				
				
				if(row.has(board[i][j])) return false;
				row.add(board[i][j])
				
				if(col.has(board[j][i])) return false;
				col.add(board[j][i])
				
				const sqrIndex=`${Math.floor(i/3)},${Math.ceil(j/3)}`
				if(!sqrMap[sqrIndex]){
				sqrMap[sqrIndex]=[]
				}
				
				if(sqrMap[sqrIndex].has(board[i][j])) return false;
				sqrMap[sqrIndex].push(board[i][j])
				
				
				
			
			}
			
	
		
		
		}
		
	
		console.log(sqrMap)
		return true;
		
		
		
	
		

}




const input=[
 ["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]
 ]
 
 console.log(isValidSoduko(input))