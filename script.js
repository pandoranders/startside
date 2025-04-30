$('.drop').not('.drop a').on('click', function(event) {

    $('.dropped').slideToggle(100);
    $(this).toggleClass('open');
});

function darkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function bossKey() {
   var element = document.body;
   element.classList.toggle("boss-key");
}

function iwmacKey() {
   var element = document.body;
   element.classList.toggle("iwmac-key");
}

function showEasterEgg() {
    const egg = document.getElementById('easterEgg');
    const sparkle = document.getElementById('sparkle');
    
    if (egg.innerText.includes('🐻')) {
    egg.innerHTML = '🦄<span id="sparkle" class="sparkle">✨</span>';
    } else {
    egg.innerHTML = '🐻<span id="sparkle" class="sparkle">✨</span>';
    }
    
    // Trigger sparkle animasjon
    const newSparkle = egg.querySelector('#sparkle');
    newSparkle.classList.remove('sparkle');
    void newSparkle.offsetWidth;
    newSparkle.classList.add('sparkle');
}
