function firstWord(str) {
	let new_str = ""
	str = str.trim()
	if(str == null || str == undefined || !str.includes(" ")){
		return str
	}else{
		for(let v of str){
		   if(v == " "){
			   break
		   }else{
			   new_str += v
		   }
	    }
		return new_str
	}
}

// Do not change the code below

const s = prompt("Enter String:");

alert(firstWord(s));
