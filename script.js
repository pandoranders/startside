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