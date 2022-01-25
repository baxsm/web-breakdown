var c_button = document.querySelector('.c-button');
var modal = document.querySelector('.modal');
var m_content = document.querySelector('.m-content');
var email;
var close = document.querySelector('.close');

var toggle_visible = function() {
    modal.classList.toggle('visible');
    m_content.classList.toggle('position');
}

c_button.addEventListener('click', toggle_visible);
close.addEventListener('click', toggle_visible);

document.addEventListener('click', event => {
    const div = event.target.closest("div").className;
    if(div == 'modal visible'){
        toggle_visible();
    }
})