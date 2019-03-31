/* Introduction Promises */

/*
	Status Promises: 
	Peding
	Fullfiled
	Rejected
 */
const util = require('util')
const getAddressAssync = util.promisify(getAdress)



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

function getAdress(idUser) {
	return new Promise(function resolvePromise(resolve, rejected) {
		setTimeout(function () {
			return resolve({
				street: "Rua Oswaldo Cruz",
				number: 34,
				details: "Apto 15"
			})
		}, 20000)
	})
}

const userPromise = getUser();

userPromise
	.then(function(user) {
		return getTelephone(user.id)
		.then(function resolveTelephone(result) {
			return {
				user: {
					name: user.name
				},
				telephone: result
			}
		})
	})
	.then(function (result) {
		const andress = getAddressAssync(result.user.id)
		return andress.then(function resolveAddress(result) {
			return {
				user: result.user;
				telephone: result.result;
				andress: result;
			}
		})
	})
	.then(function (result){
		console.log("result", result);
	})
	.catch(function (error) {
		console.error("User is empty", error);
	})