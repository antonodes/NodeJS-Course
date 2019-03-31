const service = require('././for-forin/index')

Array.prototype.myMap = function(callback) {
	const newArrayMaping = []
	for(let indice = 0; indice <= this.length - 1; indice++) {
		const result = callback(this[indice], indice)
		newArrayMaping.push(result)
	}

	return newArrayMaping;
}


async function main() {
	try {
		const result = await service.getPeople('a')
		const names = []
		//result.results.forEach(function (item){
		//	names.push(item.name)
		//})

		//const names1 = result.results.map((pessoa) => pessoa.name)
		
		//const names = result.results.myMap((pessoa, indice) => {
		//	return pessoa.name
		//})


		const names = result.results.map(function (people) {
			return pessoa.name
		})

		console.log('Names: ', names)
	}
	catch {
		console.error('Deu ruim', error)
	}
}