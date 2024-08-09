export function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    for (const item of arr) {
        let elem = component(item)
        box.append(elem);
    };
}

export function createToken(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}