import createElement from './create-element.js';
import createNewsSection from './news-section.js';
import createPodcastSection from './podcasts-section.js';
import createVideoSection from './video-section.js';
import createEventsSection from './events-section.js';

const contentElement = document.querySelector('#content');

const containerElement = createElement('container', 'div');
contentElement.append(containerElement);

const pageContentElement = createElement('page-content', 'div');
containerElement.append(pageContentElement);

const mainElement = createElement('', 'main');
pageContentElement.append(mainElement);

const pageTitle = createElement('page-title', 'h1', 'Naujienos');
const newsSectionElement = createNewsSection();
const videoSectionElement = createVideoSection();
mainElement.append(pageTitle, newsSectionElement, videoSectionElement);

const asideElement = createElement('', 'aside');
pageContentElement.append(asideElement);

const podcastsSectionElement = createPodcastSection();
const eventsSectionElement = createEventsSection();
asideElement.append(podcastsSectionElement, eventsSectionElement);


