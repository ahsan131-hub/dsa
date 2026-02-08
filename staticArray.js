// javascript static array implementation
// add static functions in the class


class StaticArray{
	
	static remove=(arr,val)=>{
		for(let i=0; i<arr.length-1; i++){
			if(arr[i]==val){
				//remove
				arr[i]=arr[i+1]
				arr[i+1]="_"
				
			}
			
			if(arr[i]=="_"){
				
				arr[i]=arr[i+1]
				arr[i+1]="_"
			}
			
		}
			console.log(`Removed ${val} from array ${arr}`)
	}
	
	
	
	
	static add=(arr,val,idx)=>{
		// add element in the middle or end or at start of the array.
		// shift all elements to right untill we get the right idx
		
		for(let i=arr.length-1; i>=idx ; i--){
			arr[i+1]=arr[i]

		}
		 arr[idx]=val
		
			console.log(`Added ${val} from array ${arr}`)
	}
	
}




function testArray(){

	const playerNums=[5,6,9,3]

	
	StaticArray.remove(playerNums, 6)
	StaticArray.add(playerNums,11,1)
	StaticArray.remove(playerNums, 9)
	StaticArray.add(playerNums,12,2)
	
	
}

testArray()