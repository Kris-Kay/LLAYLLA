
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

    // $logo = document.querySelector('#navLogo')
    // $wordLogo = document.querySelector('#tagWordLogo')
    // $mask = document.querySelector('#mask')
    // $bra = document.querySelector('#bra')
    // $pan = document.querySelector('#panty')
  


    // document.querySelector('#navLogoImg').setAttribute("src", "img/logo-peach-noWord-blueBg-LLAYLLA.svg")
  })

//Request modal open
document.querySelector('.request').addEventListener('click', event => {
document.querySelector('#requestModal').classList.add('open')
})

//Request modal X
document.querySelector('#modalX').addEventListener('click', event => {
    document.querySelector('#requestModal').classList.remove('open')
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