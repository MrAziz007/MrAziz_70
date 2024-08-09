import { getAxios } from "../../libs/http";

let form = document.forms[0];

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    let inp = document.querySelector('.input');
    if (regex.test(inp.value)) {
        inp.style.border = '1px solid green';
        getAxios(`users?email=${obj.email}`)
            // && `users?password=${obj.password}`
            .then(res => {
                for (const item of res.data) {
                    localStorage.setItem('userId', item.id)
                    localStorage.setItem('token', item.token)
                }
                window.location.replace('/')
            })
            .catch(error => console.error(error))
        form.reset();
    } else {
        inp.style.border = '1px solid red';
    };
};

let logonBlock = document.querySelector('.logonBlock');
logonBlock.onclick = () => {
    window.location.replace('/pages/logon/');
}