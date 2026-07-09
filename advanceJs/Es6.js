const defaultSettings = {
    theme : 'light',
    showSidebar : true,
    maxItem : 10
}

const userSettings = {
    theme : 'dark',
    showSidebar : false
}

const finalSetting = {...defaultSettings, ...userSettings};
console.log(finalSetting);


const {theme,maxItem} = finalSetting;
console.log(`Active theme ${theme}, and maxItem is ${maxItem} `);

function getMinMax(...numbers){
    return [
        Math.max(...numbers),
        Math.min(...numbers)
    ];
}

const get = getMinMax(5,4,3,7,8,9);
console.log(get);


