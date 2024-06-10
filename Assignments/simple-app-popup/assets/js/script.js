function loadpage(season) {
    let title = document.querySelector('h1.text-center');
    let img = document.querySelector('img.img-xxl');
    let sezona = document.querySelector('#sezona')
    
    if (season === 'spring') {
        title.textContent = 'Welcome to Spring';
        img.src = 'assets/images/spring.png';
        img.alt = 'Spring';
    } else if (season === 'summer') {
        title.textContent = 'Welcome to Summer';
        img.src = 'assets/images/summer.png';
        img.alt = 'Summer';
    } else if (season === 'fall') {
        title.textContent = 'Welcome to Fall';
        img.src = 'assets/images/fall.png';
        img.alt = 'Fall';
    } else if (season === 'winter') {
        title.textContent = 'Welcome to Winter';
        img.src = 'assets/images/winter.png';
        img.alt = 'Winter';
    } else if (season === 'allseasons') {
        title.textContent = 'Welcome to All Seasons';
        img.src = 'assets/images/allseasons.png';
        sezona.innerHTML = `
        <img class="img-xxl" src="assets/images/spring.png" alt="Spring"/>
        <img class="img-xxl" src="assets/images/summer.png" alt="Summer"/>
        <img class="img-xxl" src="assets/images/fall.png" alt="Fall"/>
        <img class="img-xxl" src="assets/images/winter.png" alt="Winter"/>`
    }
}
