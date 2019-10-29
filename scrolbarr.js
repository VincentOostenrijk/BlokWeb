// Wanneer de gebruiker de pagina scrolt zal deze functie aangesproken worden.
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    // Hier spreekt die de myBar element aan uit de HTML pagina
}

// Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator


