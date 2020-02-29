const fs=require("fs")
var data={}
data=JSON.parse(fs.readFileSync("data.json",{encoding:"utf8"}))
let limit=0

	var presult="a"
	var result=""
	while (presult!="."||presult!="") {
		limit++
		console.log(presult in data)
	if (!(presult in data)) {
		data[presult]=[]
	}
		presult=data[presult][Math.floor(data[presult].length*Math.random())]
		if (presult==""||presult=="."||presult==undefined) {
			break
		}
		result+=" "+presult.toString()
		if (limit>9999) {
			presult="."
		}
	}
	if (result=="") {
		result="..."
	}
	
	console.log(result)
	return result