gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

var tl1 =gsap.timeline({
    onComplete : () => {
        gsap.set('.box-1', {
            position : 'sticky',
            top : 0,
            zIndex : 1000
        })
    }
});

document.querySelector('.bulat-1').addEventListener('mouseenter', () => {
    gsap.to('.bulat-1',{
        duration : 1,
        opacity : 1,
        ease : 'power4.out'
    })
})

document.querySelector('.bulat-1').addEventListener('mouseleave', () => {
    gsap.to('.bulat-1',{
        duration : 1,
        opacity : 0,
        ease : 'power4.out'
    })
})

tl1.from('.box-1',{
    duration : 1.25,
    y : -100,
    ease : 'expo.out'
})

.from('.box-2',{
    duration: 1,
    opacity : 0,
    y: 100,
    ease : 'power4.out'
}, '-=1')

.from('.box-3',{
    duration : 1,
    opacity : 0,
    ease : 'power4.out'
},'-=0.75')

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger : '.box-4',
    }
})

tl2.from('.box-4',{
    duration : 1,
    opacity : 0,
    y : 200,
    ease : 'power4.out'
})

.from('.box-5', {
    duration : 1,
    x : -1000,
    ease : 'power4.out'
},0.3)

.from('.box-6', {
    duration : 1,
    x : 1000,
    ease : 'power4.out'
},0.3)


var tl3 = gsap.timeline({
    scrollTrigger : {
        trigger : '.teks-1',
        markers: false,
        start : '-200px bottom '
    }
})

tl3.from('.teks-1', {
    duration : 1,
    opacity : 0,
    y : 500,
    ease : 'power4.out'
})

.from('.box-7', {
    duration : 1,
    opacity : 0,
    y : 500,
    ease : 'back.out'
}, 0.2)

.from('.box-8', {
    duration : 1,
    opacity : 0,
    y : 500,
    ease : 'back.out'
}, 0.4)

.from('.box-9', {
    duration : 1,
    opacity : 0,
    y : 500,
    ease : 'back.out'
}, 0.6)

.from('.box-10', {
    duration : 1,
    opacity : 0,
    y : 500,
    ease : 'back.out'
}, 0.8)

function hoverBox (param1) {
    document.querySelector(param1).addEventListener('mouseover', () => {
        gsap.to(param1, {
            y : -40,
            duration : 0.5,
            ease : 'power2.out'
        })
    })
    document.querySelector(param1).addEventListener('mouseout', () => {
        gsap.to(param1, {
            y : 0,
            duration : 0.5
        })
    })
}

hoverBox('.box-7');
hoverBox('.box-8');
hoverBox('.box-9');
hoverBox('.box-10');

var tl4 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-11'
    }
})

tl4.from('.box-11', {
    opacity : 0,
    y : 200,
    duration : 1,
    ease : 'power4.out'
})

.from('.box-12',{
    opacity : 0,
    y : 300,
    duration : 1,
    ease : 'power1.out'
}, 0.3)

const swiper1 = new Swiper ('.swiper1', {
    slidesPerView : 5,
    spaceBetween : 40,
    loop : true,
    allowTouchMove : false,
    autoplay : {
        delay : 0,
        disableOnInteraction : false
    },
    speed : 4000
});

var tl5 = gsap.timeline({
    repeat : -1,
});

tl5.to('.tim-1', {
    opacity : 1,
    x : 50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
})
.to('.tim-1', {
    opacity : 0,
    x : -50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
    delay : 0.75
})
tl5.to('.tim-2', {
    opacity : 1,
    x : 50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
})
.to('.tim-2', {
    opacity : 0,
    x : -50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
    delay : 0.75
})
tl5.to('.tim-3', {
    opacity : 1,
    x : 50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
})
.to('.tim-3', {
    opacity : 0,
    x : -50,
    duration : 1,
    ease : 'power4.out',
    stagger : {
        each : 0.15,
        from : 'start'
    },
    delay : 0.75
})

var tl6 = gsap.timeline({
    scrollTrigger : {
        trigger : '.box-13',
        markers : false,
        start : '-250px bottom'
    }
})

var split1 = SplitText.create('.kata-1', {type : 'words , chars'});

tl6.from('.box-13', {
    width : 0,
    height : 0,
    duration : 1,
    ease : 'power4.out',
    y : 500,
    opacity : 0
})

.from (split1.chars, {
    duration : 0.75,
    opacity : 0,
    y : 200,
    ease : 'power3.out',
    stagger : 0.04
}, 1)

.from('.box-14', {
    duration : 0.75,
    opacity : 0,
    y : 200,
    ease : 'power3.out'
}, '-=0.5')

//GSDevTools.create({animation : tl6});