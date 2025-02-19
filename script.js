setColorModeFromStorage();

activateColorModeSwitch();

activateFontSizeIncreaseSwitch();

activateFontSizeDecreaseSwitch();

setFontSize();

function activateColorModeSwitch() {
    getElementById('colorMode').addEventListener('click', (e) => {
        switchColorMode(e.target);
    });
}

function setColorModeFromStorage() {
    let mode = localStorage.getItem('colorMode') || 'light';
    let switchEl = getChangedColorSwitchElement(getElementById('colorMode'), mode);
    switchColorMode(switchEl, mode);
}

function getChangedColorSwitchElement(switchElement, mode) {
    if (mode === 'dark') {
        switchElement.dataset.mode = 'light'; // activate light
        switchElement.innerText = mode;
    } else {
        switchElement.dataset.mode = 'dark';
        switchElement.innerText = mode;
    }
    return switchElement;
}

function switchColorMode(switchElement) {
    let switchEl = getChangedColorSwitchElement(switchElement, switchElement.dataset.mode);
    localStorage.setItem('colorMode', switchEl.dataset.mode);
    document.body.className = switchEl.dataset.mode;
}

function activateFontSizeIncreaseSwitch() {
    getElementById('fontSizeIncrease').addEventListener('click', (e) => {
        let fontSize = getFontSize();
        fontSize++;
        setFontSize(fontSize);
    });
}

function activateFontSizeDecreaseSwitch() {
    getElementById('fontSizeDecrease').addEventListener('click', (e) => {
        let fontSize = getFontSize();
        fontSize--;
        setFontSize(fontSize);
    });
}

function getFontSize() {
    return localStorage.getItem('fontSize') || parseInt(getComputedStyle(document.body).getPropertyValue('font-size'));
}

function setFontSize(fontSize = getFontSize()) {
    localStorage.setItem('fontSize', fontSize);
    document.body.style.fontSize = `${fontSize}px`;
}

function getElementById(id) {
    return document.getElementById(id);
}
