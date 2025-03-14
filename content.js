function translatePage() {
    let googleTranslateUrl = "https://translate.google.com/translate?sl=auto&tl=hi&u=" + encodeURIComponent(window.location.href);
    window.location.href = googleTranslateUrl;
}

translatePage();
