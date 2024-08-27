const contactsForm = document.querySelector('#contacts-form');

contactsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    
    const name = form.name.value;
    const surName = form['sur-name'].value;
    const age = form.age.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const itRange = form.range.value;
    const groupRadio = form.group.value;
    
    const requiredInputs = document.querySelectorAll('input:required');

    let isFormValid = true;
    requiredInputs.forEach((input) => {
        const errorSpan = input.nextElementSibling;  // Assuming the error span is immediately after the input
        if (!input.value) {
            input.style.border = '2px solid red';
            isFormValid = false;

            // Add or update the error message
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.textContent = 'This input is required';
            } else {
                const errorMessage = document.createElement('span');
                errorMessage.textContent = 'This input is required';
                errorMessage.style.color = 'red';
                errorMessage.classList.add('error-message');
                input.insertAdjacentElement('afterend', errorMessage);
            }
        } else {
            input.style.border = '2px solid green';

            // Remove the error message if the input is valid
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.remove();
            }
        }
    });

    // If the form is not valid, display a message and stop execution
    if (!isFormValid) {
        const spanMessage = document.createElement('span');
        spanMessage.textContent = 'Not all fields are filled in!';
        spanMessage.style.color = 'red';
        form.append(spanMessage);

        // Remove the error message after a delay
        setTimeout(() => {
            spanMessage.remove();
        }, 3000);

        return;  // Stop the function execution to prevent creating student data
    }

    const checkedLanguages = Array.from(form.querySelectorAll('[name="lang"]:checked')).map((lang) => lang.value);
    
    const studentsList = document.querySelector('#students-list');
    const studentItem = document.createElement('div');
    studentItem.classList.add('student-item');
    studentsList.prepend(studentItem);
    
    const studentData = document.createElement('div');
    studentData.classList.add('student-data');
    studentItem.append(studentData);

    const studentName = document.createElement('p');
    studentName.textContent = `Name: ${name}`;
    studentData.append(studentName);

    const studentSurName = document.createElement('p');
    studentSurName.textContent = `Surname: ${surName}`;
    studentData.append(studentSurName);

    const studentAge = document.createElement('p');
    studentAge.textContent = `Age: ${age}`;
    studentData.append(studentAge);

    const maskedEmail = maskString(email, 2, email.indexOf('@') - 2) + email.substring(email.indexOf('@'));
    const studentEmail = document.createElement('p');
    studentEmail.textContent = `Email: ${maskedEmail}`;
    studentData.append(studentEmail);

    const maskedPhone = maskString(phone, 2, 2);
    const studentPhone = document.createElement('p');
    studentPhone.textContent = `Phone: ${maskedPhone}`;
    studentData.append(studentPhone);

    const studentItRange = document.createElement('p');
    studentItRange.textContent = `IT range: ${itRange}`;
    studentData.append(studentItRange);

    const studentGroupRadio = document.createElement('p');
    studentGroupRadio.textContent = `Group: ${groupRadio}`;
    studentData.append(studentGroupRadio);

    const studentLanguages = document.createElement('p');
    studentLanguages.textContent = `Languages: ${checkedLanguages.join(', ')}`;
    studentData.append(studentLanguages);

    const spanMessage = document.createElement('span');
    spanMessage.textContent = `Student ${name} ${surName} added successfully!`;
    studentItem.prepend(spanMessage);

    setTimeout(() => {
        spanMessage.remove();
    }, 3000);

    const showSensitiveData = document.createElement('button');
    showSensitiveData.textContent = 'Show sensitive data';
    studentItem.append(showSensitiveData);

    let isSensitiveDataShown = false;

    showSensitiveData.addEventListener('click', () => {
        if (isSensitiveDataShown) {
            studentEmail.textContent = `Email: ${maskedEmail}`;
            studentPhone.textContent = `Phone: ${maskedPhone}`;
            showSensitiveData.textContent = 'Show sensitive data';
        } else {
            studentEmail.textContent = `Email: ${email}`;
            studentPhone.textContent = `Phone: ${phone}`;
            showSensitiveData.textContent = 'Hide sensitive data';
        }
        isSensitiveDataShown = !isSensitiveDataShown;
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = `Delete Student ${name} ${surName}`;
    studentItem.append(deleteButton);

    deleteButton.addEventListener('click', () => {
        const spanMessage = document.createElement('span');
        spanMessage.textContent = `Student ${name} ${surName} deleted successfully!`;

        studentItem.insertAdjacentElement('beforebegin', spanMessage);

        studentItem.remove();

        setTimeout(() => {
            spanMessage.remove();
        }, 3000);
    });

    form.reset();
});

// Function to partially mask a string
function maskString(str, startLen = 2, endLen = 2) {
    const maskedSection = '*'.repeat(str.length - startLen - endLen);
    return str.substring(0, startLen) + maskedSection + str.substring(str.length - endLen);
}




// PENKTA UŽDUOTIS (formos validacija naudojant JavaScript):
// 1. Priduodant formą (submit) patikrinti ar privalomi laukeliai nėra tušti.
// 2. Jeigu bent vienas privalomas formos laukelis yra tuščias:
//     2.1. Formos alert žinutėje reikia parašyti, jog ne visi laukeliai yra užpildyti. Šis tekstas turi būti raudonos spalvos.
//     2.2. Kiekvienas privalomas input laukelis, kuris nėra užpildytas:
//         2.2.1. Turi būti apvestas raudonu rėmeliu.
//         2.2.2. Šalia laukelio turi būti parašytas raudonas tekstas: „Šis laukelis yra privalomas".
