//your JS code here. If required.
const parseCode = (str) => {
	let mapLetter={}
	for(let i=0;i<str.length;i++){
		let char=str.charAt(i);
		if(!mapLetter[char]){
			mapLetter[char]=[]
		}
		mapLetter[char].push(i);
	}
	return mapLetter;
}
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));