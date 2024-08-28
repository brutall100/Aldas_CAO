const contactsForm = document.querySelector('#contacts-form')
const studentsList = document.querySelector('#students-list')

const INITIAL_DATA = [
	{
		name: 'Sam',
		surname: 'Buca',
		age: 24,
		phone: '869268973',
		email: 'rokas@gmail.com',
		itKnowledge: 7,
		interests: ['JavaScript', 'PHP', 'C++'],
		group: 'FEUA-10',
	},
	{
		name: 'Kick',
		surname: 'Ass',
		age: 22,
		phone: '+37069268973',
		email: 'arunas@gmail.com',
		itKnowledge: 9,
		interests: ['C', 'C++'],
		group: 'FEUA-14',
	},
	{
		name: 'Bil',
		surname: 'Asde',
		age: 20,
		phone: '869987529',
		email: 'pricepas@gmail.com',
		itKnowledge: 10,
		interests: ['JavaScript', 'PHP', 'C++', 'Python'],
		group: 'FEU 12',
	},
	{
		name: 'Alus',
		surname: 'Sula',
		age: 30,
		phone: '+370612141',
		email: 'Petras@gmail.com',
		itKnowledge: 6,
		interests: ['C#'],
		group: 'FEU 11',
	},
	{
		name: 'Sam',
		surname: 'Buca',
		age: 24,
		phone: '869268973',
		email: 'rokas@gmail.com',
		itKnowledge: 7,
		interests: ['JavaScript', 'PHP', 'C++'],
		group: 'FEU 14',
	},
]

// Function to display initial data
function displayInitialData(data) {
	data.forEach((student) => {
		addStudentToDOM(student)
	})
}
// Function to add student data to the DOM
function addStudentToDOM(student) {
	const { name, surname, age, phone, email, itKnowledge, interests, group } = student

	const studentItem = document.createElement('div')
	studentItem.classList.add('student-item')
	studentsList.prepend(studentItem)

	const studentData = document.createElement('div')
	studentData.classList.add('student-data')
	studentItem.append(studentData)

	const studentName = document.createElement('p')
	studentName.textContent = `Name: ${name}`
	studentData.append(studentName)

	const studentSurName = document.createElement('p')
	studentSurName.textContent = `Surname: ${surname}`
	studentData.append(studentSurName)

	const studentAge = document.createElement('p')
	studentAge.textContent = `Age: ${age}`
	studentData.append(studentAge)

	const maskedEmail = maskString(email, 2, email.indexOf('@') - 2) + email.substring(email.indexOf('@'))
	const studentEmail = document.createElement('p')
	studentEmail.textContent = `Email: ${maskedEmail}`
	studentData.append(studentEmail)

	const maskedPhone = maskString(phone, 2, 2)
	const studentPhone = document.createElement('p')
	studentPhone.textContent = `Phone: ${maskedPhone}`
	studentData.append(studentPhone)

	const studentItRange = document.createElement('p')
	studentItRange.textContent = `IT range: ${itKnowledge}`
	studentData.append(studentItRange)

	const studentGroupRadio = document.createElement('p')
	studentGroupRadio.textContent = `Group: ${group}`
	studentData.append(studentGroupRadio)

	const studentLanguages = document.createElement('p')
	studentLanguages.textContent = `Languages: ${interests.join(', ')}`
	studentData.append(studentLanguages)

	const showSensitiveData = document.createElement('button')
	showSensitiveData.textContent = 'Show sensitive data'
	studentItem.append(showSensitiveData)

	let isSensitiveDataShown = false

	showSensitiveData.addEventListener('click', () => {
		if (isSensitiveDataShown) {
			studentEmail.textContent = `Email: ${maskedEmail}`
			studentPhone.textContent = `Phone: ${maskedPhone}`
			showSensitiveData.textContent = 'Show sensitive data'
		} else {
			studentEmail.textContent = `Email: ${email}`
			studentPhone.textContent = `Phone: ${phone}`
			showSensitiveData.textContent = 'Hide sensitive data'
		}
		isSensitiveDataShown = !isSensitiveDataShown
	})

	const deleteButton = document.createElement('button')
	deleteButton.textContent = `Delete Student ${name} ${surname}`
	studentItem.append(deleteButton)

	deleteButton.addEventListener('click', () => {
		const spanMessage = document.createElement('span')
		spanMessage.textContent = `Student ${name} ${surname} deleted successfully!`

		studentItem.insertAdjacentElement('beforebegin', spanMessage)

		studentItem.remove()

		setTimeout(() => {
			spanMessage.remove()
		}, 3000)
	})
}
// Display the initial data when the page loads
displayInitialData(INITIAL_DATA)


const inputs = document.querySelectorAll('input');

// Retrieve and set each input's value from localStorage
inputs.forEach((input) => {
    const storedValue = localStorage.getItem(input.name);
    if (storedValue) {
        input.value = storedValue;
    }

    // Add an input event listener to store the value in localStorage as the user types
    input.addEventListener('input', (event) => {
        localStorage.setItem(input.name, event.target.value);
    });
});

contactsForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const form = event.target;

	// Išvalome ankstesnes klaidas ir sėkmės pranešimus
	clearMessages(form);

	const name = form.name.value.trim();
	const surname = form['sur-name'].value.trim();
	const age = parseInt(form.age.value.trim());
	const email = form.email.value.trim();
	const phone = form.phone.value.trim();
	const itKnowledge = form.range.value;
	const group = form.group.value;
	const interests = Array.from(form.querySelectorAll('[name="lang"]:checked')).map((lang) => lang.value);

	let isValid = true;

	// Validate name
	if (name.length < 3) {
		showError(form.name, 'Vardas privalo būti bent 3 simbolių ilgumo');
		isValid = false;
	}

	// Validate surname
	if (surname.length < 3) {
		showError(form['sur-name'], 'Pavardė privalo būti bent 3 simbolių ilgumo');
		isValid = false;
	}

	// Validate age
	if (age < 0) {
		showError(form.age, 'Amžius privalo būti teigiamas skaičius');
		isValid = false;
	} else if (age > 120) {
		showError(form.age, 'Įvestas amžius yra per didelis');
		isValid = false;
	}

	// Validate phone
	if (phone.length < 9 || phone.length > 12) {
		showError(form.phone, 'Įvestas telefono numeris yra neteisingas');
		isValid = false;
	}

	// Validate email
	if (email.length < 8 || !email.includes('@') || !email.includes('.')) {
		showError(form.email, 'Įvestas elektroninis paštas yra neteisingas');
		isValid = false;
	}

	// If all validations pass, add the student
	if (isValid) {
		const newStudent = {
			name,
			surname,
			age,
			phone,
			email,
			itKnowledge,
			interests,
			group,
		};

		// Add the new student data to the DOM
		addStudentToDOM(newStudent);

		// Rodyti sėkmės pranešimą
		showSuccess(form, 'Studentas sėkmingai pridėtas!');

		localStorage.clear();
		form.reset();
	}
});

// Function to clear previous error and success messages
function clearMessages(form) {
	const messages = form.querySelectorAll('.error-message, .success-message');
	messages.forEach((msg) => msg.remove());
}

// Function to show error message next to input
function showError(inputElement, errorMessage) {
	let error = document.createElement('span');
	error.className = 'error-message';
	error.textContent = errorMessage;
	error.style.color = 'red'; // Klaidos pranešimai bus raudoni
	inputElement.insertAdjacentElement('afterend', error);
}

// Function to show success message at the top of the form
function showSuccess(form, successMessage) {
	let success = document.createElement('span');
	success.className = 'success-message';
	success.textContent = successMessage;
	success.style.color = 'green'; // Sėkmės pranešimas bus žalias
	form.insertAdjacentElement('afterbegin', success);
}

setTimeout(() => {
    const successMessages = document.querySelectorAll('.success-message');
    successMessages.forEach((msg) => msg.remove());
}, 3000);

// Function to partially mask a string
function maskString(str, startLen = 2, endLen = 2) {
	const maskedSection = '*'.repeat(str.length - startLen - endLen);
	return str.substring(0, startLen) + maskedSection + str.substring(str.length - endLen);
}


// PIRMA DALIS:
// Sukurti kontaktų formą.
// 1. Kontaktų formoje turi būti šie laukeliai:
//     1. Tekstinis laukelis vardui (privalomas).
//     2. Tekstinis laukelis pavardei (privalomas).
//     3. Skaičiaus laukelis amžiui (privalomas).
//     4. Laukelis įvesti telefono numerį (neprivalomas).
//     5. Laukelis įvesti el. paštą (privalomas).
//     6. Range tipo laukelis, kuris skirtas įvertinti savo IT žinias nuo 1 iki 10. Galimas vertinimas tik sveikiems skaičiams.
//     7. Radio tipo laukeliai, kuriuose pasirenkamas grupės numeris. Turi būti galimybė pasirinkti grupes nuo FEU 10gr. iki FEU 20gr.
//     8. Checkbox tipo laukeliai, kuriuose galima pasirinkti dominančias programavimo kalbas (bent 4 skirtingi checkbox elementai).
//     9. Šalia kiekvieno įvesties (input) elemento, pridėti label elementą, kuris žymi laukelio pavadinimą.

// ANTRA DALIS:
// 1. Sukurti div elementą, kuris turės id „students-list".
// 2. Kiekvieną kartą pridavus formą (submit), turi būti sukurtas naujas div elementas su klase „student-item" ir pridedamas į „students-list" elemento pradžią.
// 3. Duomenys apie studentą turi būti įdėti į „student-item" elementą.

// 4. Sukūrus studentą, turi iššokti <span> elementas, kuris informuoja apie studento sukūrimą: „Sukurtas studentas (Vardas Pavardė)". Šis span elementas dingsta po 5 sekundžių.
// 5. Šalia range tipo laukelio, sukurti span (arba output) elementą ir jame atvaizduoti range laukelio reikšmę jam keičiantis.

// TREČIA DALIS:
// 1. Vietoje el. pašto ir tel. numerio rodyti tik žvaigždutes „****".
// 2. Kiekviename „student-item" elemente sukurti mygtuką „Rodyti asmens duomenis".
// 3. Paspaudus šį mygtuką:
//     3.1. Parodyti to studento el. paštą ir tel. numerį.
//     3.2. Pakeist mygtuko tekstą į „Slėpti asmens duomenis".
// 4. Jeigu asmens duomenys yra rodomi, tai paspaudus mygtuką:
//     4.1. Paslėpti asmens el. paštą ir tel. numerį.
//     4.2. Mygtuko tekstą pakeisti į „Rodyti asmens duomenis".

// KETVIRTA DALIS (studento ištrynimas):
// 1. Prie kiekvieno sukurti studento elemento pridėti mygtuką „Ištrinti studentą".
// 2. Paspaudus šį mygtuką, studento elementas yra ištrinamas.
// 3. Ištrynus studentą, turi iššokti <span> elementas, kuris informuoja apie studento ištrynimą: „Studentas (Vardas Pavardė) sėkmingai ištrintas.". Šis span elementas dingsta po 5 sekundžių.

// PENKTA UŽDUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".

// PAPILDOMA UŽDUOTIS (formos validacija naudojant JavaScript):
// Papildyti formos validaciją. Jeigu:
// 1. Vardas yra trumpesnis nei 3 simboliai, parašyti: „Vardas privalo būti bent 3 simbolių ilgumo".
// 2. Pavardė yra trumpesnė nei 3 simboliai, parašyti: „Pavardė privalo būti bent 3 simbolių ilgumo".
// 3. Amžius yra neigamas, parašyti: „Amžius privalo būti teigiamas skaičius".
// 4. Amžius yra daugiau nei 120 metų, parašyti: „Įvestas amžius yra per didelis".
// 5. Telefono numeris yra mažiau nei 9 arba daugiau nei 12 simbolių, parašyti: „Įvestas telefono numeris yra neteisingas".
// 6. Elektroninis paštas yra trumpesnis nei 8 simboliai ir jame nėra panaudotas @ ir . simboliai, parašyti: „Įvestas elektroninis paštas yra neteisingas".

// ŠEŠTA UŽDUOTIS:
// 1. Sukurti pradinius duomenų masyvą, kuriame būtų bent 5 studentų duomenys (objektų formatu).
// 2. Sukurti funkciją, kuri priima šiuos duomenis ir užkrovus puslapį į ekraną iškart išveda duomenis iš šio masyvo.

// AŠTUNTA UŽDUOTIS (local storage):
// 1. Vedamą tekstą į input elementus išsaugoti į localStorage.
// 2. Perkrovus puslapį localStorage esančiomis reikšmėmis užpildyti input elementus.
// 3. Jeigu sukuriamas studentas, tai localStorage esančias reikšmes reikia išvalyti.