function toggle(){
const root = document.documentElement;
const newTheme = root.className === 'dark' ? 'light' : 'dark';
root.className= newTheme;
};

const btn = document.querySelector('svg');

btn.addEventListener('click',toggle);