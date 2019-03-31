const { getPeople } = require('./index')



Array.prototype.myFilter = function(callback) {
	const lista = []
	for(index in this) {
		const item = this[index]
		const result = callback(item, index, this)
		if(!result) continue;
		lista.push(item)
	}
}

main()
async function main() {
	try {
		const {
			results
		} = await getPeople('a')

		const familiaLars = results.filter(function (item) {
			const result = item.name.toLowerCase().indexOf('lars') !== -1
			return result
		})

		const names = familiaLars.map((pessoa) => pessoa.name)
		console.log(names)
	}
	catch {
		console.error("Oh shit !");
	}
}