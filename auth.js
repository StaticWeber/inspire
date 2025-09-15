const authenticateForm = document.getElementById('authenticate-form');
const maleUser = document.getElementById('male');


function check(){
    if(localStorage.getItem('credentials')){
        setTimeout(() => {
          window.location.href = 'home.html'
        }, 500);
        
    }
}

check();


function Authenticate(e){
    let gender;
    e.preventDefault();

    maleUser.checked ?
        gender = {
            male: "male"
        } :
        
        gender = {
            female: "female"
        }
    

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const country = document.getElementById('country').value;
    // !name || !age || !country ? console.log('no data') :
    localStorage.setItem('credentials', JSON.stringify({ name, age, country, gender }));
    window.alert('Authentication success!');
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 3000);

}

authenticateForm.addEventListener('submit', Authenticate);