
let delay;

/*
let refresh = function() {
    console.log("refresh");
    if (time == 0) {
        setTimeout(() => {
            window.location.reload();
        }, time);
    } else {
        document.getElementById("error").innerHTML = "Please enter a number";
    }
    
}

// fetches settings from settings.json -file
let fetchSettings = function() {
    console.log("load");
}

let saveSettings = function saveSettings() {
    console.log("save");
    updateSettings();
}

let updatesettings = function() {
    console.log("update");
}
*/

async function getDelay() {
    delay = await browser.storage.local.get('delay');
    console.log(delay);
}

console.log("Extension was loaded");
getDelay();
browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && 'refreshed' in changes) {
        refresh;
    }
    if (area === 'local' && 'saved' in changes) {
        saveSettings;
    }
    if (area === 'local' && 'delay' in changes) {
        delay = changes.delay.newValue;
        console.log(delay); 
    }
})

