
let bs = function(arr, l, r, found) {
	// l, r can collide, so loop keep going
	while(l<=r) {
		// recal m
		// e.g. m = 0 + (4-0)/2 = 2
		// need int
		let m = Math.floor(l + (r-l)/2);

		console.log('-- mid --');
		console.log(m);
	
		if(arr[m] === found) {	
			return m;
		}
		else if(arr[m] < found) {
			// arr[m], ..., found, front
			l = m+1;
			console.log('-- l --');
        	console.log(l);
		} else if(arr[m] >= found){
			// found, ..., arr[m], behind
			r = m-1;
			console.log('-- r --');
        	console.log(m);	
		}
		
	}	

	return -1;
}


// sorted
let arr = [2, 3, 4, 10, 40];
let found = 40;
let index = bs(arr, 0, arr.length-1, found);
console.log(index);
