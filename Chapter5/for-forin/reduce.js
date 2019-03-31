const { getPeople } = require('./index')

async function main()
{
	try
	{
		const { results } = await getPeople('a')
		const pesos = results.map(item => parseInt(item.height))

		console.log('pesos ', pesos)

		//const total = pesos.reduce((anterior, proximo) => {
		//	return anterior + proximo
		//})

		const Lista = [
		['Erick', 'Wendel'],
		['NodeBR', 'Nerdzão']
		]

		const total = Lista.reduce((anterior, proximo) => {
			return anterior.concat(proximo)
		}, []).join(', ')

		console.log('total ', total)
	}
	catch 
	{
		console.error('Deu ruim !')
	}
}

main()