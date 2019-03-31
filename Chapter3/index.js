 function getUser() {
 	return new Promise(function resolvePromise(resolve, rejected){
		setTimeout(function () {
			return resolve({ 
				id: 1,
				name: 'Antonio',
				dateBirth: new Date()
			})
		}, 2000);
 	})
}

function getTelephone(idUser) {
	return new Promise(function resolvePromise(resolve, rejected) {
		setTimeout(function() {
			return resolve({
				number: "13982155555",
				ddd: 13
			})		
		}, 1000);
	})
}

function getAddress(idUser) {
	return new Promise(function resolvePromise(resolve, rejected) {
		setTimeout(function () {
			return resolve({
				street: "Rua Oswaldo Cruz",
				number: 34,
				details: "Apto 15"
			})
		}, 2000)
	})
}

main()
async function main() {
	try{
		console.time('medida-promise')
		const user = await getUser()
		//const telephone = await getTelephone(user.id)
		//const address = await getAddress(user.id)
		const result = await Promise.all([
			getTelephone(user.id),
			getAddress(user.id)
			])
		const address = result[1]
		const telephone = result[0]
		console.log(`
			name: ${user.name}
			telephone: ${telephone.number}
			address: ${address.street}
			`)
		console.timeEnd('medida-promise')
	} catch(error) {
		console.error("Deu ruim", error)
	}
}