document.querySelector('.bulat-1').addEventListener('mouseenter', () => {
    gsap.to('.bulat-1',{
        duration : 1,
        opacity : 1,
        ease : 'power4.out'
    })
})

document.querySelector('.bulat-1').addEventListener('mouseleave', () => {
    gsap.to('.bulat-1',{
        duration : 0.5,
        opacity : 0,
        ease : 'power4.out'
    })
})