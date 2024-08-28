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
		alert('Vardas privalo būti bent 3 simbolių ilgumo');
		isValid = false;
	}

	// Validate surname
	if (surname.length < 3) {
		alert('Pavardė privalo būti bent 3 simbolių ilgumo');
		isValid = false;
	}

	// Validate age
	if (age < 0) {
		alert('Amžius privalo būti teigiamas skaičius');
		isValid = false;
	} else if (age > 120) {
		alert('Įvestas amžius yra per didelis');
		isValid = false;
	}

	// Validate phone
	if (phone.length < 9 || phone.length > 12) {
		alert('Įvestas telefono numeris yra neteisingas');
		isValid = false;
	}

	// Validate email
	if (email.length < 8 || !email.includes('@') || !email.includes('.')) {
		alert('Įvestas elektroninis paštas yra neteisingas');
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

		localStorage.clear();
		form.reset();
	}
});

// Function to partially mask a string
function maskString(str, startLen = 2, endLen = 2) {
	const maskedSection = '*'.repeat(str.length - startLen - endLen)
	return str.substring(0, startLen) + maskedSection + str.substring(str.length - endLen)
}
