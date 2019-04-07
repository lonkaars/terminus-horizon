$(() => {
    $('.configFile').load('./config.txt');
    $('.cssFile').load('./css.txt');
    anime({
        targets: '.gradientTopBar',
        width: [0, '100%'],
        duration: 1500,
        delay: 100,
        autoplay: true,
        easing: 'easeInOutExpo'
    })
    anime({
        targets: 'a',
        opacity: [0 , 1],
        duration: 100,
        delay: 1200,
        autoplay: true,
        easing: 'easeInOutExpo'
    })
    anime({
        targets: '.content *:not(a, #toast)',
        translateY: ['-40px', 0],
        duration: 1000,
        delay: anime.stagger(50, {start: 500}),
        autoplay: true,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        complete: () => {
            $('.content *').addClass('done')
        }
    })
    document.getElementById('copy1').addEventListener('click', () => copy($('.configFile').text()))
    document.getElementById('copy2').addEventListener('click', () => copy($('.cssFile').text()))
})


const copy = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) :
        false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
    toast(`Successfully copied`)
};
function toast (message) {
    $('#toast').html(message)
    anime({
        targets: '#toast',
        keyframes: [{
                translateY: ['100%', 0],
                opacity: [1, 1],
                duration: 300,
                easing: 'easeOutCubic'
            },
            {
                translateY: [0, '100%'],
                opacity: [1, 1],
                duration: 300,
                delay: 2300,
                easing: 'easeInCubic'
            },
            {
                opacity: 0,
                duration: 0,
                delay: 2600
            }
        ]
    })
}