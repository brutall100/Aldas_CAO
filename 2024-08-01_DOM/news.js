let contentElement = document.querySelector('#content');

let containerElement = document.createElement('div');
containerElement.classList.add('container');
contentElement.append(containerElement);

let pageContentElement = document.createElement('div');
pageContentElement.classList.add('page-content');
containerElement.append(pageContentElement);

// MAIN
let mainElement = document.createElement('main');
pageContentElement.append(mainElement);

let h1Element = document.createElement('h1');
h1Element.classList.add('page-title');
h1Element.textContent = 'Naujienos';
mainElement.append(h1Element);

// News section
let newsSectionElement = document.createElement('section');
newsSectionElement.classList.add('news-section');
mainElement.append(newsSectionElement);

let mainNewsElement = document.createElement('div');
mainNewsElement.classList.add('main-news');
newsSectionElement.append(mainNewsElement);

for (let i = 0; i < 2; i++) {
    let newsItemElement = document.createElement('div');
    newsItemElement.classList.add('news-item');
    mainNewsElement.append(newsItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    newsItemElement.append(linkElementA);

    let divInsideLinkElement = document.createElement('div');
    divInsideLinkElement.classList.add('news-item-image-wrapper');
    linkElementA.append(divInsideLinkElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('news-item-image');
    imgElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png');
    imgElement.setAttribute('alt', '');
    divInsideLinkElement.append(imgElement);

    let newsItemContentElement = document.createElement('div');
    newsItemContentElement.classList.add('news-item-content');
    linkElementA.append(newsItemContentElement);

    let categoryElement = document.createElement('span');
    categoryElement.classList.add('news-item-category');
    categoryElement.textContent = 'Sėkmės istorija';
    newsItemContentElement.append(categoryElement);

    let newsItemTitleElement = document.createElement('h2');
    newsItemTitleElement.classList.add('news-item-title');
    newsItemTitleElement.textContent = 'Sėkmės istorija – įsidarbinimas į Asteri';
    newsItemContentElement.append(newsItemTitleElement);

    let newsItemDateElement = document.createElement('span');
    newsItemDateElement.classList.add('news-item-date');
    newsItemDateElement.textContent = '2024-05-23';
    newsItemContentElement.append(newsItemDateElement);
}

let secondaryNewsElement = document.createElement('div');
secondaryNewsElement.classList.add('secondary-news');
newsSectionElement.append(secondaryNewsElement);

for (let i = 0; i < 4; i++) {
    let newsItemElement = document.createElement('div');
    newsItemElement.classList.add('news-item');
    secondaryNewsElement.append(newsItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    newsItemElement.append(linkElementA);

    let divInsideLinkElement = document.createElement('div');
    divInsideLinkElement.classList.add('news-item-image-wrapper');
    linkElementA.append(divInsideLinkElement);

    let imgElement = document.createElement('img');
    imgElement.classList.add('news-item-image');
    imgElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/05/nauja-pauliaus-ft.png');
    imgElement.setAttribute('alt', '');
    divInsideLinkElement.append(imgElement);

    let newsItemContentElement = document.createElement('div');
    newsItemContentElement.classList.add('news-item-content');
    linkElementA.append(newsItemContentElement);

    let categoryElement = document.createElement('span');
    categoryElement.classList.add('news-item-category');
    categoryElement.textContent = 'Sėkmės istorija';
    newsItemContentElement.append(categoryElement);

    let newsItemTitleElement = document.createElement('h2');
    newsItemTitleElement.classList.add('news-item-title');
    newsItemTitleElement.textContent = 'Sėkmės istorija – įsidarbinimas į Asteri';
    newsItemContentElement.append(newsItemTitleElement);

    let newsItemDateElement = document.createElement('span');
    newsItemDateElement.classList.add('news-item-date');
    newsItemDateElement.textContent = '2024-05-23';
    newsItemContentElement.append(newsItemDateElement);
}

let largeLinkElement = document.createElement('a');
largeLinkElement.classList.add('large-link');
largeLinkElement.setAttribute('href', '#');
largeLinkElement.textContent = 'Visos naujienos';
newsSectionElement.append(largeLinkElement);

// Video section
let videoSectionElement = document.createElement('section');
videoSectionElement.classList.add('video-section');
mainElement.append(videoSectionElement);

let videoSectionTitleElement = document.createElement('h2');
videoSectionTitleElement.classList.add('section-title');
videoSectionTitleElement.textContent = 'Vaizdo įrašai';
videoSectionElement.append(videoSectionTitleElement);

let videoListElement = document.createElement('div');
videoListElement.classList.add('video-list');
videoSectionElement.append(videoListElement);

for (let i = 0; i < 3; i++) {
    let videoWrapperElement = document.createElement('div');
    videoWrapperElement.classList.add('video-wrapper');
    videoListElement.append(videoWrapperElement);

    let videoTitleElement = document.createElement('h3');
    videoTitleElement.classList.add('video-title');
    videoTitleElement.textContent = '#6 Studentės istorija: sėkmė slypi disciplinoje';
    videoWrapperElement.append(videoTitleElement);

    let iframeElement = document.createElement('iframe');
    iframeElement.width = '560';
    iframeElement.height = '315';
    iframeElement.src = 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg';
    iframeElement.title = 'YouTube video player';
    iframeElement.frameBorder = '0';
    iframeElement.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframeElement.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    iframeElement.allowFullscreen = true;
    videoWrapperElement.append(iframeElement);
}

let videoLargeLinkElement = document.createElement('a');
videoLargeLinkElement.classList.add('large-link');
videoLargeLinkElement.setAttribute('href', '#');
videoLargeLinkElement.textContent = 'Visi video';
videoSectionElement.append(videoLargeLinkElement);

// ASIDE
let asideElement = document.createElement('aside');
pageContentElement.append(asideElement);

// Podcasts section
let podcastsSectionElement = document.createElement('section');
podcastsSectionElement.classList.add('podcasts-section');
asideElement.append(podcastsSectionElement);

let podcastsTitleElement = document.createElement('h2');
podcastsTitleElement.classList.add('section-title');
podcastsTitleElement.textContent = 'Podcastai ir radijo laidos';
podcastsSectionElement.append(podcastsTitleElement);

let podcastsListElement = document.createElement('div');
podcastsListElement.classList.add('podcasts-list');
podcastsSectionElement.append(podcastsListElement);

for (let i = 0; i < 4; i++) {
    let podcastItemElement = document.createElement('div');
    podcastItemElement.classList.add('podcast-item');
    podcastsListElement.append(podcastItemElement);

    let podcastControlsElement = document.createElement('div');
    podcastControlsElement.classList.add('podcast-controls');
    podcastItemElement.append(podcastControlsElement);

    let podcastImageElement = document.createElement('img');
    podcastImageElement.classList.add('podcast-image');
    podcastImageElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-300x300.png');
    podcastImageElement.setAttribute('alt', '');
    podcastControlsElement.append(podcastImageElement);

    let podcastLengthElement = document.createElement('span');
    podcastLengthElement.classList.add('podcast-length');
    podcastLengthElement.textContent = 'Trukmė: 7:55';
    podcastControlsElement.append(podcastLengthElement);

    let podcastPlayButton = document.createElement('button');
    podcastPlayButton.classList.add('podcast-play');
    podcastPlayButton.textContent = 'Play';
    podcastControlsElement.append(podcastPlayButton);

    let podcastContentElement = document.createElement('div');
    podcastContentElement.classList.add('podcast-content');
    podcastItemElement.append(podcastContentElement);

    let podcastTitleElement = document.createElement('h3');
    podcastTitleElement.classList.add('podcast-title');
    podcastTitleElement.textContent = 'Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas';
    podcastContentElement.append(podcastTitleElement);

    let podcastDateElement = document.createElement('span');
    podcastDateElement.classList.add('podcast-date');
    podcastDateElement.textContent = '2021-09-02';
    podcastContentElement.append(podcastDateElement);
}

// Events section
let eventsSectionElement = document.createElement('section');
eventsSectionElement.classList.add('events-section');
asideElement.append(eventsSectionElement);

let eventsTitleElement = document.createElement('h2');
eventsTitleElement.classList.add('section-title');
eventsTitleElement.textContent = 'Renginiai';
eventsSectionElement.append(eventsTitleElement);

let eventsListElement = document.createElement('div');
eventsListElement.classList.add('events-list');
eventsSectionElement.append(eventsListElement);

for (let i = 0; i < 3; i++) {
    let eventItemElement = document.createElement('div');
    eventItemElement.classList.add('event-item');
    eventsListElement.append(eventItemElement);

    let linkElementA = document.createElement('a');
    linkElementA.setAttribute('href', '#');
    eventItemElement.append(linkElementA);

    let eventItemImageWrapper = document.createElement('div');
    eventItemImageWrapper.classList.add('event-item-image-wrapp');
    linkElementA.append(eventItemImageWrapper);

    let eventImageElement = document.createElement('img');
    eventImageElement.classList.add('event-item-image');
    eventImageElement.setAttribute('src', 'https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png');
    eventImageElement.setAttribute('alt', '');
    eventItemImageWrapper.append(eventImageElement);

    let eventItemContentWrapper = document.createElement('div');
    eventItemContentWrapper.classList.add('event-item-content-wrapper');
    linkElementA.append(eventItemContentWrapper);

    let eventDateElement = document.createElement('div');
    eventDateElement.classList.add('event-date');
    eventItemContentWrapper.append(eventDateElement);

    let eventDayElement = document.createElement('span');
    eventDayElement.classList.add('event-day');
    eventDayElement.textContent = '30';
    eventDateElement.append(eventDayElement);

    let eventMonthElement = document.createElement('span');
    eventMonthElement.classList.add('event-month');
    eventMonthElement.textContent = 'Geg';
    eventDateElement.append(eventMonthElement);

    let eventItemContentElement = document.createElement('div');
    eventItemContentElement.classList.add('event-item-content');
    eventItemContentWrapper.append(eventItemContentElement);

    let eventLocationElement = document.createElement('span');
    eventLocationElement.classList.add('event-location');
    eventLocationElement.textContent = 'Upės g. 21, Greenhall 1, 10 aukštas ir Online';
    eventItemContentElement.append(eventLocationElement);

    let eventTitleElement = document.createElement('h3');
    eventTitleElement.classList.add('event-title');
    eventTitleElement.textContent = 'CodeAcademy galimybės verslui';
    eventItemContentElement.append(eventTitleElement);
}

let eventsLargeLinkElement = document.createElement('a');
eventsLargeLinkElement.classList.add('large-link');
eventsLargeLinkElement.setAttribute('href', '#');
eventsLargeLinkElement.textContent = 'Daugiau';
eventsSectionElement.append(eventsLargeLinkElement);
