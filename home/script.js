$(() => {
    anime({
        targets: '.gradientTopBar',
        width: [0, '100%'],
        duration: 1500,
        delay: 100,
        autoplay: true,
        easing: 'easeInOutExpo'
    })
    anime({
        targets: '.content *:not(a)',
        translateY: ['-40px', 0],
        duration: 1000,
        delay: anime.stagger(50, {start: 500}),
        autoplay: true,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        complete: () => {
            anime({
                targets: 'a',
                opacity: [0 , 1],
                duration: 100,
                autoplay: true,
                easing: 'easeInOutExpo'
            })
            $('.content *').addClass('done')
        }
    })
})