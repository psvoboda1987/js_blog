activateColorModeSwitch();

setColorModeFromStorage();

activateFontSizeIncreaseButton();

activateFontSizeDecreaseButton();

setFontSize(getFontSize());

function activateColorModeSwitch() {
    getElementById('colorMode').addEventListener('click', (e) => {
        setDocumentColorMode(e.target.dataset.mode);
        saveDocumentColorMode(e.target.dataset.mode);
        changeColorModeSwitchElement(e.target.dataset.mode);
    });
}

function setColorModeFromStorage() {
    let mode = localStorage.getItem('colorMode');
    if (mode !== null) {
        setDocumentColorMode(mode);
        saveDocumentColorMode(mode);
        changeColorModeSwitchElement(mode);
    }
}

function changeColorModeSwitchElement(mode) {
    let switchElement = getElementById('colorMode');
    if (mode === 'dark') {
        switchElement.dataset.mode = 'light';
        switchElement.innerText = 'light';
    } else {
        switchElement.dataset.mode = 'dark';
        switchElement.innerText = 'dark';
    }
}

function setDocumentColorMode(mode) {
    document.body.className = mode;
}

function saveDocumentColorMode(mode) {
    localStorage.setItem('colorMode', mode);
}

function activateFontSizeIncreaseButton() {
    getElementById('fontSizeIncrease').addEventListener('click', (e) => {
        saveFontSize(getFontSize() + 1);
        setFontSize(getFontSize() + 1);
    });
}

function activateFontSizeDecreaseButton() {
    getElementById('fontSizeDecrease').addEventListener('click', (e) => {
        saveFontSize(getFontSize() - 1);
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
    document.body.style.fontSize = `${fontSize}px`;
}

function saveFontSize(fontSize) {
    localStorage.setItem('fontSize', fontSize);
}

function getElementById(id) {
    return document.getElementById(id);
}
