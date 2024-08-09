import { createCards } from "./components/card.js";
import { createTable } from "./components/table.js";
import { reload } from "./libs/utils.js";
import { getAxios } from "./libs/http.js";

let token = localStorage.getItem('token');

if (!token) {
    window.location.replace('/pages/logon/');
}

getAxios(`transaction`)
    .then(res => reload(res.data, 'tbody', createTable))
    .catch(error => console.error(error));

getAxios(`cards`)
    .then(res => reload(res.data, 'dspGrid', createCards))
    .catch(error => console.error(error));

getAxios(`users?token=${token}`)
    .then(res => {
        for (const item of res.data) {
            let userEmails = document.querySelectorAll('.userEmail');
            userEmails.forEach(elem => {
                elem.textContent = item.email;
            })
            let userName = document.querySelector('.userName');
            userName.textContent = item.sername + ' ' + item.name
        };
    })
    .catch(error => console.error(error));

let exit = document.querySelector('.exit');
exit.onclick = () => {
    window.location.replace('/pages/login/');
}