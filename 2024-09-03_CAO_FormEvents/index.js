document.querySelector('form').addEventListener('submit', calculateTicketPrice)

function calculateTicketPrice(e) {
	e.preventDefault()
	const form = e.target

	const age = form.age.value
	console.log(age)

	let ticketPrice = 6

	if (age < 16) {
		ticketPrice = ticketPrice / 2 // 50% discount
	} else if (age > 60) {
		ticketPrice = ticketPrice * 0.33 // 67% discount
	} else {
		ticketPrice = 6
	}

	document.querySelector('#result').innerHTML = `Ticket price: ${ticketPrice.toFixed(2)} Eur`
}




document.querySelector('#militaryForm').addEventListener('submit', function(e) {
    e.preventDefault();

     console.log(e);          
     console.log(e.target);   

    const age2 = document.querySelector('#age2').value;


    const criminalRecord = document.querySelector('input[name="criminalRecord"]:checked').value;

    if (age2 >= 18 && age2 <= 30 && criminalRecord === 'no') {
        result = 'Jums gali reikėti atlikti privalomąją karinę tarnybą.';
    } else {
        result = 'Jums nereikės atlikti privalomosios karinės tarnybos.';
    }

    document.querySelector('#output').innerHTML = result;
});

