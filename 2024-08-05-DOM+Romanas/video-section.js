export default function createVideoSection() {
    const videoSection = document.createElement('section');
    videoSection.classList.add('video-section');

    const sectionTitle = document.createElement('h2');
    sectionTitle.classList.add('section-title');
    sectionTitle.textContent = 'Vaizdo įrašai';
    videoSection.appendChild(sectionTitle);

    const videoList = document.createElement('div');
    videoList.classList.add('video-list');
    videoSection.appendChild(videoList);

    const videos = [
        {
            title: '#6 Studentės istorija: sėkmė slypi disciplinoje',
            src: 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg'
        },
        {
            title: '#6 Studentės istorija: sėkmė slypi disciplinoje',
            src: 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg'
        },
        {
            title: '#6 Studentės istorija: sėkmė slypi disciplinoje',
            src: 'https://www.youtube.com/embed/Rz6bswWbPqw?si=0Je3Y085kS2QibIg'
        }
    ];

    videos.forEach(video => {
        const videoWrapper = document.createElement('div');
        videoWrapper.classList.add('video-wrapper');

        const videoTitle = document.createElement('h3');
        videoTitle.classList.add('video-title');
        videoTitle.textContent = video.title;
        videoWrapper.appendChild(videoTitle);

        const iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '315';
        iframe.src = video.src;
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        videoWrapper.appendChild(iframe);

        videoList.appendChild(videoWrapper);
    });

    const largeLink = document.createElement('a');
    largeLink.href = '#';
    largeLink.classList.add('large-link');
    largeLink.textContent = 'Visi video';
    videoSection.appendChild(largeLink);

    return videoSection;
}
