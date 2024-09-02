const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const inputSearch = document.createElement('input');
inputSearch.type = 'search';
inputSearch.id = 'search';
inputSearch.className = 'search-input';
inputSearch.placeholder = 'Search...';

const searchButton = document.createElement('button');
searchButton.textContent = 'Search';
searchButton.className = 'search-button';

const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.id = 'toggle';
checkBox.className = 'vip-checkbox';

const label = document.createElement('label');
label.textContent = 'VIP';
label.htmlFor = 'toggle';
label.className = 'vip-label';


container.appendChild(inputSearch);
container.appendChild(searchButton);
container.appendChild(label);
container.appendChild(checkBox);

const table = document.createElement('table');
table.className = 'data-table';
const tbody = document.createElement('tbody');
table.appendChild(tbody);
container.appendChild(table);

async function fetchFromServer() {
    const response = await fetch('https://polar-chartreuse-silverfish.glitch.me/');
    if (!response.ok) {
        throw new Error('Failed to fetch data from the server.');
    }
    const data = await response.json();
    console.log(data);
    return data;
}

function populateTable(data, showVIPOnly, searchTerm = '') {
    tbody.innerHTML = '';

    data.forEach(person => {
        const { id, name, city, fav_color, image, vip } = person;
        const [firstName, surname] = name.split(' ');

        const matchesSearch = firstName.toLowerCase().includes(searchTerm) || surname.toLowerCase().includes(searchTerm);
        if ((!showVIPOnly || vip) && matchesSearch) {
            const img = `<img src="${image}" alt="${name}" width="50" height="50">`;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td data-label="ID">${id}</td>
                <td data-label="Image">${img}</td>
                <td data-label="First Name">${firstName}</td>
                <td data-label="Surname">${surname}</td>
                <td data-label="City">${city}</td>
                <td data-label="Favorite Color">${fav_color}</td>
            `;
            tbody.appendChild(row);
        }
    });
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchFromServer();
    populateTable(data, checkBox.checked);

    checkBox.addEventListener('change', () => {
        const searchTerm = inputSearch.value.trim().toLowerCase();
        populateTable(data, checkBox.checked, searchTerm);
    });

    searchButton.addEventListener('click', () => {
        const searchTerm = inputSearch.value.trim().toLowerCase();
        populateTable(data, checkBox.checked, searchTerm);
    });

  } catch (error) {
    console.error(error);
  }
}

fetchDataAndProcess();

