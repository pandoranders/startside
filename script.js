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

    if (egg.innerText.includes('🐻')) {
        egg.innerHTML = '🦄<span class="sparkle">✨</span>';
    } else {
        egg.innerHTML = '🐻<span class="sparkle">✨</span>';
    }

    const sparkle = egg.querySelector('.sparkle');
    sparkle.classList.remove('sparkle');
    void sparkle.offsetWidth;
    sparkle.classList.add('sparkle');
}

document.addEventListener('keydown', (e) => {
   const key = e.key.toLowerCase();
   if (key === 'c') window.open("https://chatgpt.com","_self");
   if (key === 's') showEasterEgg(); 
   if (key === 'e') window.open("https://mail.one.com","_self");
 });
