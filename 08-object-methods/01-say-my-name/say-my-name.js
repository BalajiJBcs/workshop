

const constThemAll = (obj, val) => {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            let values  = obj[key];
            arr.push(values())
        }
    }
}