async function fetchData() {
	try {
		const response = await fetch('https://robust-safe-crafter.glitch.me/')
		const data = await response.json()
		processData(data) // Call the non-async function with the fetched data
	} catch (error) {
		console.log('Error:', error)
	}
}

fetchData()

function processData(data) {
	data.forEach((ntObj, index) => {
		console.log(`id ${index + 1}:`)
		console.log(`City: ${ntObj.city}`)
		console.log(`Price: ${ntObj.price}`)
		console.log(`Description: ${ntObj.description}`)
		console.log(`Image URL: ${ntObj.image}`)
		console.log('--------------------------')

		const id = index + 1
		const city = ntObj.city
		const price = ntObj.price
		const description = ntObj.description
		const imageUrl = ntObj.image
	})
}
