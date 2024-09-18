function citiesObj() {
    return [
      {
        city: "Buenos Aires",
        population: 15594428,
        location: {
          country: "Argentina",
          continent: "South America",
        },
        touristAttractions: ['Casa Rosada', 'Obelisco', 'Cementerio de la Recoleta'],
        isCapital: true,
      },
      {
        city: "Vilnius",
        population: 588412,
        location: {
          country: "Lithuania",
          continent: "Europe",
        },
        touristAttractions: ['Gediminas Tower', 'Vilnius Cathedral', 'Uzupis'],
        isCapital: true,
      },
      {
        city: "Tokyo",
        population: 37435191,
        location: {
          country: "Japan",
          continent: "Asia",
        },
        touristAttractions: ['Tokyo Tower', 'Shibuya Crossing', 'Meiji Shrine'],
        isCapital: true,
      },
      {
        city: "Sydney",
        population: 5312163,
        location: {
          country: "Australia",
          continent: "Australia",
        },
        touristAttractions: ['Sydney Opera House', 'Bondi Beach', 'Harbour Bridge'],
        isCapital: false,
      },
      {
        city: "Cape Town",
        population: 433688,
        location: {
          country: "South Africa",
          continent: "Africa",
        },
        touristAttractions: ['Table Mountain', 'Robben Island', 'Kirstenbosch Gardens'],
        isCapital: false,
      },
    ];
  }
  
  export default citiesObj;
  