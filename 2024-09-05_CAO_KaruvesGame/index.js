const zodziai = ['kalnas', 'upė', 'kompiuteris', 'muzika', 'saulė', 'knyga', 'telefonas', 'dangus', 'lietuva', 'mokykla'];
let pasirinktasZodis = '';
let uzsleptasZodis = [];
let likoSpejimu = 6;
let spetosRaides = [];
let atspetosRaides = [];

// Pradėti naują žaidimą
function naujasZaidimas() {
    pasirinktasZodis = zodziai[Math.floor(Math.random() * zodziai.length)];
    uzsleptasZodis = pasirinktasZodis.split('').map(() => '_');
    likoSpejimu = 6;
    spetosRaides = [];
    atspetosRaides = [];
    atnaujintiEkrana();
    document.getElementById('message').textContent = '';
}

// Spėti raidę
function spetiRaide() {
    const ivestaRaide = document.getElementById('letterInput').value.toLowerCase();
    document.getElementById('letterInput').value = ''; // Išvalyti įvesties laukelį

    // Patikrina, ar įvesta tik viena raidė
    if (!/^[a-ž]$/.test(ivestaRaide)) {
        document.getElementById('message').textContent = 'Prašome įvesti vieną raidę.';
        return;
    }

    // Patikrina, ar raidė jau buvo spėta
    if (spetosRaides.includes(ivestaRaide)) {
        document.getElementById('message').textContent = 'Ši raidė jau buvo spėta.';
        return;
    }

    spetosRaides.push(ivestaRaide);

    // Jei raidė yra žodyje, atskleisti ją
    if (pasirinktasZodis.includes(ivestaRaide)) {
        pasirinktasZodis.split('').forEach((raide, indeksas) => {
            if (raide === ivestaRaide) {
                uzsleptasZodis[indeksas] = raide;
            }
        });
        document.getElementById('message').textContent = 'Teisingai!';
    } else {
        // Sumažinti likusių spėjimų skaičių, jei raidė nėra žodyje
        likoSpejimu--;
        document.getElementById('message').textContent = 'Neteisingai!';
    }

    atnaujintiEkrana();

    // Patikrinti, ar žaidimas baigtas
    if (likoSpejimu === 0) {
        document.getElementById('message').textContent = 'Pralaimėjote! Žodis buvo: ' + pasirinktasZodis;
    } else if (!uzsleptasZodis.includes('_')) {
        document.getElementById('message').textContent = 'Laimėjote!';
    }
}

// Atnaujinti ekraną
function atnaujintiEkrana() {
    document.getElementById('wordDisplay').textContent = uzsleptasZodis.join(' ');
    document.getElementById('guessesLeft').textContent = likoSpejimu;
    document.getElementById('spetosRaides').textContent = spetosRaides.join(', ');
}

// Pradėti žaidimą iš karto užkrovus puslapį
naujasZaidimas();

