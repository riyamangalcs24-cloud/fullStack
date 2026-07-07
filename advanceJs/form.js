const form = document.querySelector('#regForm');
const username = document.querySelector('#username');
const usernameErr = document.querySelector('#usernameErr');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const val = username.value.trim();
    if(val.length < 4){
        usernameErr.textContent = 'Username must be atleast 4 character long!';
        username.style.borderColor = 'red';
    }
    else{
        usernameErr.textContent = '';
        username.style.borderColor = 'green';
        alert('Form Submitted Sucessfully!');
    }
});
