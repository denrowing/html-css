const $icon = document.querySelector('.first_screen_about_us_details_icon');
const $arrow = document.querySelector('.first_screen_about_us_details_icon_arrow');

$icon.onclick = () => {
    $arrow.animate([
        {left: '0'},
        {left: '10px'},
        {left: '0'}
    ],{
        duration: 700,
        iterations: 3
    });
}
