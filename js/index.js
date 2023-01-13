let info = document.forms.example_form
info.onsubmit = (event) => {
    event.preventDefault();
   let user = {}
   let fm = new FormData(info)
   
   fm.forEach((value, key) => {
    user[key] = value
   })
   console.log(user);
}