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


// Pirma dalis: Kontaktų formos kūrimas
// Pradėkite nuo HTML failo – atsidarykite HTML failą ir įterpkite <form> elementą.
// Pridėkite vardą – sukurkite <input> elementą, skirtą vardui įvesti. Pridėkite atributą required, kad šis laukas būtų privalomas.
// Pridėkite pavardę – sukurkite dar vieną <input> elementą pavardei įvesti, taip pat su atributu required.
// Amžiaus laukelis – pridėkite <input> elementą, kur galima įvesti amžių (skaičių). Taip pat su required atributu.
// Telefono numeris – pridėkite <input> laukelį telefono numeriui, bet šis nėra privalomas.
// El. paštas – pridėkite <input> laukelį el. paštui su atributu required.
// IT žinių vertinimas – pridėkite <input type="range"> laukelį su reikšmėmis nuo 1 iki 10 ir šalia sukurkite elementą <span>, kuris rodys pasirinktos vertės reikšmę.
// Grupės pasirinkimas – pridėkite kelis <input type="radio"> elementus, kad būtų galima pasirinkti grupės numerį nuo FEU 10gr. iki FEU 20gr.
// Programavimo kalbos – pridėkite bent keturis <input type="checkbox"> elementus, kuriuose vartotojas galės pasirinkti jam įdomias programavimo kalbas.
// Pridėkite etiketes (labels) – prie kiekvieno įvesties laukelio pridėkite <label> elementą, kad vartotojui būtų aišku, ką reikia įvesti.
// Antra dalis: Studentų sąrašo kūrimas
// Sukurkite studentų sąrašą – pridėkite <div> elementą su id="students-list".
// Naujo studento pridėjimas – parašykite JavaScript kodą, kuris įvyksta paspaudus „Submit“ mygtuką formoje. Šis kodas sukurs naują <div> elementą su klase „student-item“ ir pridės jį į sąrašo pradžią.
// Rodykite duomenis – įdėkite studento duomenis į naujai sukurtą „student-item“ elementą.
// Pranešimas apie sukurtą studentą – sukurkite <span> elementą, kuris rodys žinutę „Sukurtas studentas (Vardas Pavardė)“, o po 5 sekundžių jis turėtų dingti.
// Rodomas diapazono vertė – sukurkite mechanizmą, kad „range“ laukelyje pasirinkta reikšmė būtų rodoma šalia esančiame <span> elemente.
// Trečia dalis: Asmens duomenų rodymas/slėpimas
// Užmaskuokite duomenis – rodydami el. paštą ir tel. numerį, vietoje jų parodykite tik „****“.
// Pridėkite mygtuką – kiekviename „student-item“ elemente sukurkite mygtuką „Rodyti asmens duomenis“.
// Rodymo/slėpimo logika:
// Paspaudus mygtuką, parodykite tikrus duomenis (el. paštą ir tel. numerį).
// Pakeiskite mygtuko tekstą į „Slėpti asmens duomenis“.
// Jei duomenys rodomi, paspaudus mygtuką, juos vėl užmaskuokite ir pakeiskite mygtuko tekstą atgal į „Rodyti asmens duomenis“.
// Ketvirta dalis: Studentų ištrynimas
// Pridėkite mygtuką „Ištrinti“ – kiekviename „student-item“ elemente sukurkite mygtuką „Ištrinti studentą“.
// Ištrynimo logika – parašykite JavaScript kodą, kuris paspaudus šį mygtuką ištrins atitinkamą studento elementą iš DOM.
// Pranešimas apie ištrynimą – rodykite pranešimą „Studentas (Vardas Pavardė) sėkmingai ištrintas“, kuris po 5 sekundžių dings.
// Penkta dalis: Formos validacija naudojant JavaScript
// Patikrinkite ar privalomi laukeliai užpildyti – įdėkite JavaScript kodą, kuris tikrina, ar visi privalomi laukeliai yra užpildyti prieš formos pateikimą.
// Rodykite klaidas – jei laukeliai neužpildyti, rodykite raudoną tekstą ir apveskite tuos laukelius raudonu rėmeliu.
// Papildoma dalis: Išplėstinė formos validacija
// Patikrinkite specifines taisykles:
// Vardas ir pavardė turi būti bent 3 simboliai.
// Amžius turi būti teigiamas ir ne didesnis nei 120 metų.
// Telefonas turi būti nuo 9 iki 12 simbolių.
// El. paštas turi būti bent 8 simboliai ir turėti @ bei . simbolius.
// Šešta dalis: Pradiniai duomenys
// Sukurkite pradinį masyvą – sukurkite JavaScript masyvą su 5 studentų objektais.
// Rodykite studentus – parašykite funkciją, kuri rodo šiuos studentus iš karto, kai puslapis užkraunamas.
// Aštunta dalis: LocalStorage naudojimas
// Išsaugokite įvestus duomenis – įdėkite JavaScript kodą, kuris išsaugo įvestus duomenis į localStorage.
// Atkurkite duomenis – perkrovus puslapį, atkurkite laukelius iš localStorage.
// Išvalykite duomenis – sukūrus studentą, išvalykite localStorage.





