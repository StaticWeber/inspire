const Usercreditials = JSON.parse(localStorage.getItem('credentials'));
const special = document.getElementsByClassName('special');

function VerifyAuth(){
if(!Usercreditials){
    window.alert('Please Authenticate first');

    setTimeout(() => {
       window.location.href = 'auth.html'
    }, 500)
   
} else{
    special[0].textContent = Usercreditials.name;
}

}

VerifyAuth();