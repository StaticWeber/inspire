const Usercreditials = JSON.parse(localStorage.getItem('credentials'));
const special = document.getElementsByClassName('special');
const userName = document.querySelectorAll('.user-name');
const gender = document.querySelectorAll('.gender');
const maleDivision = document.querySelectorAll('.male-division');
const femaleDivision = document.querySelectorAll('.female-division');
const textInput = document.getElementById('text-input');
const submitBtn = document.getElementById('submit-btn');
const textContainer = document.getElementById('text-container');
const appendText = document.getElementById('append-input');
const resetUser =  document.getElementById('reset-user')


function VerifyAuth(callback){
if(!Usercreditials){
    window.alert('Please Authenticate first');

    setTimeout(() => {
       window.location.href = 'auth.html'
    }, 500)
   
} else{
    special[0].textContent = Usercreditials.name;
    callback();
}

if(Usercreditials.role.admin){
   appendText.style.display = 'block';

} else {
   appendText.style.display = 'none';
}

}

VerifyAuth(genderAuth);


function genderAuth(){

      userName.forEach(userName => {
      userName.textContent = Usercreditials.name;
    });

    if(Usercreditials.gender.male){
       gender.forEach(gender => { 
       gender.textContent = Usercreditials.gender.male ;
    });

     femaleDivision.forEach(femaleDivision => {
        femaleDivision.style.display = 'none';
     });

    

    } else {
       gender.forEach(gender => { 
       gender.textContent = Usercreditials.gender.female; 
    });

      maleDivision.forEach(maleDivision => {
        maleDivision.style.display = 'none';
     });

    }
}

function createElement(){
  const userInput = textInput.value.trim();
  localStorage.setItem('appendTexts', JSON.stringify({ userInput }));
  const newTextDiv = document.createElement('div');
  newTextDiv.textContent = userInput;
  textContainer.appendChild(newTextDiv);
  const parseTexts = JSON.parse(localStorage.getItem('appendTexts'))
  parseTexts ? console.log(parseTexts.userInput) : console.log('');
  
  textInput.value = '';
}

submitBtn.addEventListener('click', createElement);

function AppendText(){
  const parseTexts = JSON.parse(localStorage.getItem('appendTexts'))
  parseTexts ? console.log(parseTexts.userInput) : console.log('');
  const appendDiv = document.createElement('div');
  appendDiv.textContent = parseTexts.userInput;
  textContainer.appendChild(appendDiv);
}

AppendText();


function ResetUser(){
   localStorage.removeItem('credentials');
   window.alert('user reset success')
}

resetUser.addEventListener('click', ResetUser);


