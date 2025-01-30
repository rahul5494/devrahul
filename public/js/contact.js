let cross = document.getElementById('cross')
let list = document.getElementById('list')
let toggle = document.getElementsByClassName('icons')[0]
let toggler = document.getElementsByClassName('navbar-main-container')[0]

toggle.addEventListener('click', function(){
    if((list.style.display == "" || list.style.display == "block")&&(toggler.style.right !== '0')){
        cross.style.display = 'block'
        list.style.display = 'none'
        toggler.style.top = 0;
        toggler.style.right = 0;
        toggler.style.zIndex = '99'
        cross.style.position = 'fixed'
        cross.style.zIndex = '99'
    }
    else{
        cross.style.display = 'none'
        list.style.display = 'block'
        toggler.style.right = '-100vh';
        toggler.style.top = 0;
        toggler.style.zIndex = 99
        toggler.style.zIndex = 99

    }
})