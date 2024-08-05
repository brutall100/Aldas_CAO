import createElement from "./create-element.js";

export default function createEventSection() {
    const eventSectionElement = createElement('events-section', 'section');

    const sectionTitle = createElement('section-title', 'h2');
    sectionTitle.textContent = 'Renginiai';
    eventSectionElement.appendChild(sectionTitle);

    const eventsList = createElement('events-list', 'div');
    eventSectionElement.appendChild(eventsList);

    const events = [
        {
            date: { day: '30', month: 'Geg' },
            location: 'Upės g. 21, Greenhall 1, 10 aukštas ir Online',
            title: 'CodeAcademy galimybės verslui',
            imgSrc: 'https://codeacademy.lt/wp-content/uploads/2024/06/0530_CA_event-768x432.png'
        },
        {
            date: { day: '30', month: 'Geg' },
            location: 'Upės g. 21, Greenhall 1, 10 aukštas ir Online',
            title: 'CodeAcademy galimybės verslui',
            imgSrc: ''
        },
        {
            date: { day: '30', month: 'Geg' },
            location: 'Upės g. 21, Greenhall 1, 10 aukštas ir Online',
            title: 'CodeAcademy galimybės verslui',
            imgSrc: ''
        }
    ];

    events.forEach(event => {
        const eventItem = createElement('event-item', 'div');

        const eventLink = createElement('', 'a');
        eventLink.href = '#';

        if (event.imgSrc) {
            const eventImageWrapper = createElement('event-item-image-wrapp', 'div');
            const eventImage = createElement('event-item-image', 'img');
            eventImage.src = event.imgSrc;
            eventImage.alt = '';

            eventImageWrapper.appendChild(eventImage);
            eventLink.appendChild(eventImageWrapper);
        }

        const eventContentWrapper = createElement('event-item-content-wrapper', 'div');

        const eventDate = createElement('event-date', 'div');
        const eventDay = createElement('event-day', 'span');
        eventDay.textContent = event.date.day;
        const eventMonth = createElement('event-month', 'span');
        eventMonth.textContent = event.date.month;

        eventDate.appendChild(eventDay);
        eventDate.appendChild(eventMonth);
        eventContentWrapper.appendChild(eventDate);

        const eventContent = createElement('event-item-content', 'div');
        const eventLocation = createElement('', 'span');
        eventLocation.classList.add('event-location');
        eventLocation.textContent = event.location;

        const eventTitle = createElement('event-title', 'h3');
        eventTitle.textContent = event.title;

        eventContent.appendChild(eventLocation);
        eventContent.appendChild(eventTitle);
        eventContentWrapper.appendChild(eventContent);

        eventLink.appendChild(eventContentWrapper);
        eventItem.appendChild(eventLink);
        eventsList.appendChild(eventItem);
    });

    const largeLink = createElement('large-link', 'a');
    largeLink.href = '#';
    largeLink.textContent = 'Daugiau';
    eventSectionElement.appendChild(largeLink);

    return eventSectionElement;
}
