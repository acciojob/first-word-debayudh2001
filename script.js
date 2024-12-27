function firstWord(str) {
	let new_str = ""
	for(let v of str){
		if(v == " "){
			break
		}else{
			new_str += v
		}
	}
	if(new_str.length == 0){
		return new_str
	}else{
		return new_str
	}
}

// Do not change the code below

const s = prompt("Enter String:");

alert(firstWord(s));
