const contactsForm = document.querySelector('#contacts-form')
const studentsList = document.querySelector('#students-list')

const INITIAL_DATA = [
	{
		id: 0,
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
		id: 1,
		name: 'Kicck',
		surname: 'Ass',
		age: 22,
		phone: '+37069268973',
		email: 'arunas@gmail.com',
		itKnowledge: 9,
		interests: ['C', 'C++'],
		group: 'FEUA-14',
	},
	{
		id: 2,
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
		id: 3,
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
		id: 4,
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

if (!localStorage.getItem('studentData')) {
	localStorage.setItem('studentData', JSON.stringify(INITIAL_DATA))
}

const dataFromLocal = JSON.parse(localStorage.getItem('studentData'))
console.log(dataFromLocal)

function displayInitialData(data) {
	data.forEach((student) => {
		addStudentToDOM(student)
	})
}

function addStudentToDOM(student) {
	const { id, name, surname, age, phone, email, itKnowledge, interests, group } = student

	const studentItem = document.createElement('div')
	studentItem.classList.add('student-item')
	studentItem.setAttribute('data-id', id) 
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

		const updatedStudents = JSON.parse(localStorage.getItem('studentData')).filter((s) => s.id !== id)
		localStorage.setItem('studentData', JSON.stringify(updatedStudents))

		studentItem.remove()

		setTimeout(() => {
			spanMessage.remove()
		}, 3000)
	})
}

displayInitialData(dataFromLocal)



// Save form input values to localStorage as the user types
const formElements = contactsForm.elements;

for (let element of formElements) {
    if (element.name) {
        element.addEventListener('input', () => {
            localStorage.setItem(`form_${element.name}`, element.value);
        });
    }
}

// Populate form with saved values on page load
window.addEventListener('DOMContentLoaded', () => {
    for (let element of formElements) {
        if (element.name && localStorage.getItem(`form_${element.name}`)) {
            element.value = localStorage.getItem(`form_${element.name}`);
        }
    }
});




contactsForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const form = event.target

	clearMessages(form)

	const name = form.name.value.trim()
	const surname = form['sur-name'].value.trim()
	const age = parseInt(form.age.value.trim())
	const email = form.email.value.trim()
	const phone = form.phone.value.trim()
	const itKnowledge = form.range.value
	const group = form.group.value
	const interests = Array.from(form.querySelectorAll('[name="lang"]:checked')).map((lang) => lang.value)

	let isValid = true

	if (name.length < 3) {
		showError(form.name, 'Vardas privalo būti bent 3 simbolių ilgumo')
		isValid = false
	}

	if (surname.length < 3) {
		showError(form['sur-name'], 'Pavardė privalo būti bent 3 simbolių ilgumo')
		isValid = false
	}

	if (age < 0) {
		showError(form.age, 'Amžius privalo būti teigiamas skaičius')
		isValid = false
	} else if (age > 120) {
		showError(form.age, 'Įvestas amžius yra per didelis')
		isValid = false
	}

	if (phone.length < 9 || phone.length > 12) {
		showError(form.phone, 'Įvestas telefono numeris yra neteisingas')
		isValid = false
	}

	if (email.length < 8 || !email.includes('@') || !email.includes('.')) {
		showError(form.email, 'Įvestas elektroninis paštas yra neteisingas')
		isValid = false
	}

	if (isValid) {
		const existingStudents = JSON.parse(localStorage.getItem('studentData')) || []

		const newId = existingStudents.length ? Math.max(...existingStudents.map((s) => s.id)) + 1 : 0

		const newStudent = {
			id: newId,
			name,
			surname,
			age,
			phone,
			email,
			itKnowledge,
			interests,
			group,
		}

		existingStudents.push(newStudent)
		localStorage.setItem('studentData', JSON.stringify(existingStudents))

		  for (let element of formElements) {
            if (element.name) {
                localStorage.removeItem(`form_${element.name}`);
            }
        }

		addStudentToDOM(newStudent)

		showSuccess(form, 'Studentas sėkmingai pridėtas!')

		form.reset()
	}
})

function clearMessages(form) {
	const messages = form.querySelectorAll('.error-message, .success-message')
	messages.forEach((msg) => msg.remove())
}

function showError(inputElement, errorMessage) {
	let error = document.createElement('span')
	error.className = 'error-message'
	error.textContent = errorMessage
	error.style.color = 'red' // Klaidos pranešimai bus raudoni
	inputElement.insertAdjacentElement('afterend', error)
}

function showSuccess(form, successMessage) {
	let success = document.createElement('span')
	success.className = 'success-message'
	success.textContent = successMessage
	success.style.color = 'green' // Sėkmės pranešimas bus žalias
	form.insertAdjacentElement('afterbegin', success)
}

setTimeout(() => {
	const successMessages = document.querySelectorAll('.success-message')
	successMessages.forEach((msg) => msg.remove())
}, 3000)

function maskString(str, startLen = 2, endLen = 2) {
	const maskedSection = '*'.repeat(str.length - startLen - endLen)
	return str.substring(0, startLen) + maskedSection + str.substring(str.length - endLen)
}



// PIRMAS ŽINGSNIS: Baziniai kontaktų formos elementai
// Sukurti kontaktų formą:
// Sukurkite HTML formą.
// Pridėkite tekstinius laukelius vardui ir pavardei (abu privalomi).
// Pridėkite skaičiaus laukelį amžiui (privalomas).
// Pridėkite laukelį telefono numeriui (neprivalomas).
// Pridėkite laukelį el. paštui (privalomas).
// Pridėkite label elementus prie kiekvieno įvesties laukelio.
// ANTRAS ŽINGSNIS: Pridėti sudėtingesnius formos elementus
// Išplėsti kontaktų formą:
// Pridėkite range tipo laukelį IT žinioms įvertinti (nuo 1 iki 10).
// Pridėkite radio tipo laukelius grupės numeriui pasirinkti (nuo FEU 10gr. iki FEU 20gr.).
// Pridėkite checkbox tipo laukelius dominančioms programavimo kalboms pasirinkti (bent 4 skirtingi checkbox elementai).
// Sukurkite span arba output elementą, kuris rodytų pasirinkto range reikšmę (kai keičiama reikšmė, span atsinaujina).
// TREČIAS ŽINGSNIS: Dinaminis sąrašas ir studentų kūrimas
// Sąrašo valdymas:
// Sukurkite div elementą su id „students-list“.
// Pridavus formą, sukurkite naują div elementą su klase „student-item“ ir pridėkite jį į „students-list“ elemento pradžią.
// Pridėkite funkcionalumą, kad naujai sukurtame „student-item“ elemente būtų rodomi studento duomenys.
// Po studento sukūrimo rodykite span elementą su pranešimu „Sukurtas studentas (Vardas Pavardė)“, kuris dingsta po 5 sekundžių.
// KETVIRTAS ŽINGSNIS: Pradinis duomenų apdorojimas
// Pradiniai studentų duomenys:
// Sukurkite pradinius duomenų masyvą su bent 5 studentų duomenimis.
// Parašykite funkciją, kuri priima šiuos duomenis ir iškart užkrauna juos į ekraną.
// PENKTAS ŽINGSNIS: Formos validacija ir saugumas
// Formos validacija naudojant JavaScript:
// Patikrinkite, ar visi privalomi laukeliai užpildyti. Jei ne – rodoma raudona žinutė ir privalomi laukeliai apvesti raudonu rėmeliu.
// Patikrinkite, ar:
// Vardas ir pavardė turi bent 3 simbolius.
// Amžius yra teigiamas skaičius ir ne didesnis nei 120.
// Telefonas turi 9-12 simbolių.
// El. paštas turi tinkamą formatą (@ ir .).
// Jei kuri nors sąlyga neįvykdyta, rodoma atitinkama klaidos žinutė.
// ŠEŠTAS ŽINGSNIS: Studentų redagavimas ir trynimas
// Studentų duomenų valdymas:
// Pridėkite mygtuką „Rodyti asmens duomenis“, kuris leidžia rodyti/paslėpti el. paštą ir telefoną.
// Prie kiekvieno studento pridėkite mygtuką „Ištrinti studentą“. Paspaudus šį mygtuką, studentas ištrinamas ir rodomas span su pranešimu apie sėkmingą trynimą.
// SEPTINTAS ŽINGSNIS: Duomenų saugojimas ir atkūrimas
// LocalStorage naudojimas:
// Vedamą tekstą į input elementus saugokite į localStorage.
// Perkrovus puslapį, localStorage esančiomis reikšmėmis užpildykite input elementus.
// Jei sukuriamas studentas, localStorage reikšmes išvalykite.
// AŠTUNTAS ŽINGSNIS: Studentų redagavimas ir filtravimas
// Studentų redagavimas ir filtravimas:
// Pridėkite mygtuką prie kiekvieno studento, kad būtų galima redaguoti jo duomenis. Pakeitus duomenis, parodykite pranešimą apie sėkmingą pakeitimą.
// Sukurkite naują formą, skirtą studentų sąrašo filtravimui pagal pasirinktą atributą (vardas, pavardė, grupė ir pan.).
