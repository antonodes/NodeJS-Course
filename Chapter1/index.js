/* JavaScript application life cycle */
/*
	Obter numero de telefone de um usuario a partir de seu Id
	Obter o endereço do usuario pelo Id
*/
function getUser(callback) {
	setTimeout(function () {
		return callback (null, { 
			id: 1,
			name: 'Antonio',
			dateBirth: new Date()
		})
	}, 5000);

}

function getTelephone(idUser, callback) {
	setTimeout(function() {
		return callback (null, {
			number: "13982155555",
			ddd: 13
		})		
	}, 9000);
}

function getAdress(idUser, callback) {
	setTimeout(function () {
		return callback(null, {
			street: "Rua Oswaldo Cruz",
			number: 34,
			details: "Apto 15"
		})
	}, 20000)
}

function resolveUser(error, user) {
	console.log("User is", user);
}



getUser(function resolveUser(error, user){
	if(error) {
		console.error('Value user is empty', error);
		return;
	}
		//console.log(user);

	getTelephone(user.id, function resolveTelephone(error1, telephone) {
		if(error1) {
			console.error("Value telephone is empty");
			return;
		}

			getAdress(user.id, function resolveAdress(error2, address) {
			if(error2) {
				console.error("Value address is empty");
				return;
			}
			console.log(`
			Nome: ${user.name}
			Endereco: ${address.street} ${address.number}
			Telefone: ${telephone.ddd} ${telephone.number}
			`)
		})
	})
});
