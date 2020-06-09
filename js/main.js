//Light/Dark Mode btn
document.querySelector('#navLogo').addEventListener('click', event => {

    document.querySelector('html').classList.toggle('dark')
    document.querySelector('body').classList.toggle('dark')

    const $darkEle = document.querySelectorAll('.dark')
    const $lightEle = document.querySelectorAll('.light')
    

    $darkEle.forEach($dark => {
        $dark.classList.toggle('hidden')
    })

    $lightEle.forEach($light => {
        $light.classList.toggle('hidden')
    })
  })

//Request modal open
document.querySelector('.btnBox').addEventListener('click', event => {
    document.querySelector('#requestModal').classList.add('open')
    document.querySelector('.modalBg').classList.add('open')
})

//Request modal X
document.querySelector('#modalX').addEventListener('click', event => {
    document.querySelector('#requestModal').classList.remove('open')
    document.querySelector('.modalBg').classList.remove('open')
})


//Copy to clipboard Btn 
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