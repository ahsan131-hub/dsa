/*
Reorder Linked List:
You are given the head of a singly linked-list.

The positions of a linked list of length = 7 for example, can intially be represented as:
[0, 1, 2, 3, 4, 5, 6]
Reorder the nodes of the linked list to be in the following order:
[0, 6, 1, 5, 2, 4, 3]
Notice that in the general case for a list of length = n the nodes are reordered to be in the following order:
[0, n-1, 1, n-2, 2, n-3, ...]
You may not modify the values in the list's nodes, but instead you must reorder the nodes themselves.



[0, 1, 2, 3, 4, 5, 6] , 7
[6, 5, 4, 3, 3, 1, 0]


[0, 1, 2, 3, 4, 5, 6]



*/


function reOrder(head){
	const reOrdered=head
	let itr=0;
	const revHead=reverseList(head);
	const cur=head.next;
	
	/* while revHead!==null && head!==null*/
	/* 
		if itr is odd then take from head and store next of it into temp head 
		if itr is even then take from revHead and store its next into temp rev head

	 */
	while(revHead!==null && cur!==null){
		if(itr % 2 !== 0){
			reOrdered.next=cur;
			cur=cur.next;
		}else{
			reOrdered.next=revHead;
			revHead=revHead.next;
		}
	
	
	}
	
	
	
	
}




function reverseList(head){
	let prev=null;
	let cur=head;
	
	while(cur != null){
		const temp=cur.next;
		cur.next=prev;
		prev=cur;
		cur=temp;
	}
	return prev;
}