(function () {
    let myGames = [];
    while (true) {
        myGames = myGames.concat(Array.from(document.querySelectorAll('.download-list .download-list-item')).map(el => el.querySelector('a[href]').getAttribute('href').replace(/^.*\//, '')));

        const currentPage = Number(document.querySelector('.paginator-control:nth-child(1) .paginator-control__page-number.paginator-control__page-number--selected').innerText);
        const nextElementPage = Array.from(document.querySelectorAll('.paginator-control:nth-child(1) .paginator-control__page-number')).filter(el => el.innerText == String(currentPage + 1))[0] || null;

        if (nextElementPage) {
            nextElementPage.click()
        } else {
            JSON.stringify(games)
            return;
        }
    }
})();
