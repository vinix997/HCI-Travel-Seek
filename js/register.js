let selValue = $('#dropdown').val();
let nationality = $('#nationality').val();

$('#dropdown').on("change", function(){
    selValue = $('#dropdown').val();
})
$('#nationality').on("change", function(){
    nationality = $('#nationality').val();
})
function validate()
{
    
    if(($('#name')).val().length < 4)
    {
        return alert('Name must be at least 4 character')
    }
    if(($('#password')).val().length < 4)
    {
        return alert('Password must be at least 4 character')
    }
    let email = $('#email').val();
    
    if (email.length <= 2) {
        return alert('Invalid email');
    }
    //If whether email has @ character.
    if (email.indexOf("@") == -1) {
        return alert('Invalid email');
    }

    let parts = email.split("@");
    let dot = parts[1].indexOf(".");
    let dotSplits = parts[1].split(".");
    let dotCount = dotSplits.length - 1;

    if (dot == -1 || dot < 2 || dotCount > 2) {
        return alert('Invalid email');
    }

    for (let i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return alert('Invalid email');
        }
    }

    if(($('#confirm').val() != ($('#password')).val()))
    {
        return alert('Password unmatch');
    }
    
    let num = ($('#num')).val()
    if(num ==='')
    return alert('Please fill the phone number')
    if(num.length < 5)
    return alert('Invalid phone number')
    if(selValue === '') return alert('Please select your gender')
    if(nationality === '') return alert('Please select your nationality')
    let address = $('#address').val();
    if(address < 5)  return alert('Invalid address')
    return alert('Registered Successful')
}
$('#btn').click(function(e)
{
    e.preventDefault();
    validate()
})