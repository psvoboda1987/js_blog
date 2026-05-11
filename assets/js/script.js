activateColorModeSwitch();

setColorModeFromStorage();

activateFontSizeIncreaseButton();

activateFontSizeDecreaseButton();

setFontSize(getFontSize());

function activateColorModeSwitch() {
    getElementById('colorMode').addEventListener('click', (e) => {
        setDocumentColorMode(e.target.dataset.mode);
        changeColorModeSwitchElement(e.target.dataset.mode);
    });
}

function setColorModeFromStorage() {
    let mode = localStorage.getItem('colorMode') || 'light';
    changeColorModeSwitchElement(mode);
    setDocumentColorMode(mode);
}

function changeColorModeSwitchElement(mode) {
    let switchElement = getElementById('colorMode');
    if (mode === 'dark') {
        switchElement.dataset.mode = 'light'; // activate light mode
        switchElement.innerText = mode;
    } else {
        switchElement.dataset.mode = 'dark';
        switchElement.innerText = mode;
    }
}

function setDocumentColorMode(mode) {
    localStorage.setItem('colorMode', mode);
    document.body.className = mode;
}

function activateFontSizeIncreaseButton() {
    getElementById('fontSizeIncrease').addEventListener('click', (e) => {
        setFontSize(getFontSize() + 1);
    });
}

function activateFontSizeDecreaseButton() {
    getElementById('fontSizeDecrease').addEventListener('click', (e) => {
        setFontSize(getFontSize() - 1);
    });
}

function getFontSize() {
    let fontSize = parseInt(localStorage.getItem('fontSize'));
    if (!Number.isInteger(fontSize)) {
        fontSize = parseInt(
            getComputedStyle(document.body).getPropertyValue('font-size')
        );
    }
    return fontSize;
}

function setFontSize(fontSize) {
    localStorage.setItem('fontSize', fontSize);
    document.body.style.fontSize = `${fontSize}px`;
}

function getElementById(id) {
    return document.getElementById(id);
}
