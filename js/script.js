const btn = document.forms.object.button;

btn.addEventListener('click',e =>{
    let value = document.forms.object.items
    e.preventDefault();
    console.log(value.value);
})

