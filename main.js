// CONTACT US FORM VALIDATION
function validate() {
  var name = document.myForm.name.value;
  var email = document.myForm.email.value;
  var phone = document.myForm.phone.value;

  if (name == null || name == '') {
    alert('Please enter name!');
    document.getElementById('frm').name.focus();
    return false;
  }

  if (email == null || email == '') {
    alert('Please enter email!');
    document.getElementById('frm').email.focus();
    return false;
  }

  if (isNaN(phone) || phone.length != 10) {
    alert('Please enter phone number!');
    document.getElementById('frm').phone.focus();
    return false;
  }
}

const stopSubmit = document.querySelector('form');
stopSubmit.addEventListener('submit', e => {
  e.preventDefault();
});
