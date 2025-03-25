
const name = document.getElementById('inputtext');
const save = document.getElementById('save');
const delet = document.getElementById('delete')

save.addEventListener('click', ()=>{localStorage.setItem('name', name.value)})
delet.addEventListener('click', ()=>{localStorage.removeItem('name')
name.value = "";
})



window.addEventListener('load', ()=>{
    const savedName = localStorage.getItem('name');
    if (savedName) {
      name.value = savedName;
    }
});