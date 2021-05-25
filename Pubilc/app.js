const lightval = document.getElementById('light');
const darkval = document.getElementById('dark');
const solarval = document.getElementById('solar');

const body = document.body;

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

darkval.onclick = () => {

    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');

};


lightval.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

solarval.onclick = () => {
if(body.classList.contains('solar')){

body.classList.remove('solar');
solarval.style.cssText = `--bg-solar: var(yellow);`


solarval.innerText = 'solarize';

localStorage.removeItem('isSolar');

}else{

    solarval.style.cssText = ` --bg-solar: white;`

    body.classList.add('solar');
    solarval.innerText = 'normalize';

}
};