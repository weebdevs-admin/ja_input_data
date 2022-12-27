let elLogin = document.querySelector('.login')
let elPassword = document.querySelector('.password')
let elBtn = document.querySelector('.btn')
let elForm = document.querySelector('form')
let elTitle = document.querySelector('.title')
let elListL = document.querySelector('.listLogin')
let elListP = document.querySelector('.listPassword')
let elWelcome = document.querySelector('.welcome')
let dataLogin = ['weebhacker','weeb.dev','programmer','admin']
let dataPassword = ['12345','weeb','admin','0000']
elLogin.addEventListener('keyup',function(){
    for (let i in dataLogin) {
        if(dataLogin[i]  == elLogin.value ){
            elLogin.classList.remove('renameList')
            elLogin.classList.add('addList')
            elTitle.textContent = 'Parolni Kiriting!'
            break
            
            
        }
        else{
            elLogin.classList.add('renameList')
            elTitle.textContent = 'Login Xato!'
        }
        
        
    }

   
})
elPassword.addEventListener('keyup',function(){
    for (let a in dataPassword) {
        if(dataPassword[a] === elPassword.value){
            elPassword.classList.add('addList')
            elTitle.textContent = 'Muavfaqiyat!'
            elTitle.classList.add('titleColor')
            elPassword.classList.remove('renameList')
            elBtn.addEventListener('click',function(){
                elWelcome.classList=('.addWelcome')
            })
            break
        }
        
        
        
        else{
            elPassword.classList.add('renameList')
            elTitle.textContent = 'Parol Xato!'
        }
        
    }
})
for(var l = 0;l<1;l++){
    let NewLi = document.createElement('li')
    NewLi.textContent ='logins: ' +dataLogin
    elListL.appendChild(NewLi)
}
for(var l = 0;l<1;l++){
    let NewLi = document.createElement('li')
    NewLi.textContent ='Passwords:  ' +dataPassword
    elListP.appendChild(NewLi)
}
// NewLi.textContent = dataPassword[i]
console.log('Login: '+dataLogin);
console.log('Password: '+dataPassword);

