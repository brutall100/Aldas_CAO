const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('yes, it works!')
    },3000)

    setTimeout(() => {
        reject('no, it does not work!')
    }, 4000)
})

myPromise.then((data) => {
    console.log(data)
})

const myPromise2 = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(`Betkoks  ${randomNumber}`)

    setTimeout(() => {
        if (randomNumber % 2 === 0) {
            resolve('even number')
        } else {
            reject('odd number')
        }
    }, 3000)

})

myPromise2.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})


const userCard = (user) => {
    const img = document.createElement('img')
    img.src = user.picture.large
    img.alt = `${user.name.first} profile picture`

    const intro = document.createElement('h4')
    intro.innerText = `${user.name.first} ${user.name.last}, ${user.dob.age}`

    const contacts = document.createElement('h5')
    contacts.innerText = user.email

    const card = document.createElement('div')
    card.append(img, intro, contacts)
    document.body.append(card)
}

const fetchRandomHuman = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/')
        if (response.ok) {
            console.log(response)
            const data = await response.json()
            userCard(data.results[0])
        }

    } catch (error) {
        console.error(error)
    } 
}

fetchRandomHuman()  
fetchRandomHuman()
fetchRandomHuman()


// ! Vip cao
// const checkIfPersonVIP = (guests, guestName) => {
//     const guest = guests.find(guest => guest.name === guestName);
//     document.body.innerText = guest ? `${guestName} ${guest.vip ? 'is' : 'isn\'t'} a VIP` : `${guestName} isn't found in the guest list`;
//   }
  
//   const fetchPartyGuests = async () => {
//     try {
//       const response = await fetch('https://party-wedding.glitch.me/v1/party');
//       if (response.ok) {
//         const guests = await response.json();
//         checkIfPersonVIP(guests, 'Kristupas Lapeika')
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   fetchPartyGuests();



// ! Vestuvės cao 
document.addEventListener('DOMContentLoaded', () => {
    const displayGuests = (guests) => {
      const tbody = document.querySelector('tbody');
      guests.forEach(guest => {
        const name = document.createElement('td');
        name.innerText = guest.name;
  
        const attending = document.createElement('td');
        attending.innerText = guest.attending ? '+' : '-';
  
        const plusOne = document.createElement('td');
        plusOne.innerText = guest.plusOne ? '+' : '-';
  
        const tr = document.createElement('tr');
        tr.append(name, attending, plusOne);
        tbody.append(tr);
      });
    }
  
    const fetchPartyGuests = async () => {
      try {
        const response = await fetch('https://party-wedding.glitch.me/v1/wedding');
        if (response.ok) {
          const guests = await response.json();
          displayGuests(guests);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchPartyGuests();
  });
  