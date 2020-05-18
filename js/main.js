
 //Request 
 document.querySelector('.request').addEventListener('click', event => {
    document.querySelector('#requestModal').classList.add('open')
  })

//Request X
document.querySelector('#modalX').addEventListener('click', event => {
    document.querySelector('#requestModal').classList.remove('open')
  })

//Copy Email Btn 
var copyEmailBtn = document.querySelector('.js-emailcopybtn');  
copyEmailBtn.addEventListener('click', function(event) {  
// Select the email link anchor text  
var emailLink = document.querySelector('.js-emaillink');  
var range = document.createRange();  
range.selectNode(emailLink);  
window.getSelection().addRange(range);  

try {  
//copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
} catch(err) {  
    console.log('Oops, unable to copy');  
}  

// Remove the selections  
window.getSelection().removeAllRanges();  
});