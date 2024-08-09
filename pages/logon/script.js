import { postAxios } from "../../libs/http";
import { createToken } from "../../libs/utils";

let form = document.forms[0];

let regex = {
    name: /^[a-zA-ZÀ-ÿ' -]+$/,
    sername: /^[a-zA-ZÀ-ÿ' -]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
};

form.onsubmit = (e) => {
    e.preventDefault();
    let obj = {};
    let fn = new FormData(form);
    fn.forEach((value, key) => {
        obj[key] = value;
    });
    let token = createToken();
    let inps = document.querySelectorAll('.input');
    inps.forEach(inp => {
        let id = inp.getAttribute('name');
        if (regex[id].test(inp.value)) {
            inp.style.border = '1px solid green';
            postAxios(`users`, { ...obj, token })
                .then(res => {
                    localStorage.setItem('userId', res.data.id)
                    localStorage.setItem('token', res.data.token)
                    window.location.replace('/')
                })
                .catch(error => console.error(error))
            form.reset();
        } else {
            inp.style.border = '1px solid red';
        };
    });
};

let loginBlock = document.querySelector('.loginBlock');
loginBlock.onclick = () => {
    window.location.replace('/pages/login/');
}