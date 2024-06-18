document.addEventListener('DOMContentLoaded', function() {
    var topNav = document.getElementById('topNav');
    var hamburgerBtn = document.getElementById('hamburgerBtn');
    var closeNav = document.getElementById('closeNav');

    hamburgerBtn.addEventListener('click', function() {
        topNav.style.display = 'flex';
        hamburgerBtn.style.display = 'none';
    });

    closeNav.addEventListener('click', function() {
        topNav.style.display = 'none';
        hamburgerBtn.style.display = 'block';
    });
});
