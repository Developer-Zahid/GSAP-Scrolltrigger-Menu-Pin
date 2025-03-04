// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Select elements
// const section = document.querySelector('.section');
// const figures = document.querySelectorAll('.figure');
// const menuItems = document.querySelectorAll('.menu__item');

// // Create GSAP timeline
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: section,
//         start: 'top top',
//         end: 'bottom bottom',
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//         onUpdate: self => {
//             // Calculate active index based on scroll progress
//             const progress = self.progress;
//             const activeIndex = Math.floor(progress * 2);

//             // Update figures
//             figures.forEach((figure, index) => {
//                 if (index === activeIndex) {
//                     figure.classList.add('active');
//                 } else {
//                     figure.classList.remove('active');
//                 }
//             });

//             // Update menu items
//             menuItems.forEach((item, index) => {
//                 if (index === activeIndex) {
//                     item.classList.add('active');
//                 } else {
//                     item.classList.remove('active');
//                 }
//             });

//             console.log(activeIndex);
            
//         }
//     }
// });

gsap.set('.figure ~ .figure', {
    opacity: 0,
});

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
        ease: 'none',
    }
});

tl.to('.menu__item:nth-child(1)', {
    color: 'red',
})
.to('.figure:nth-child(1)', {
    opacity: 1
}, '>')
.addLabel("step1")

.to('.menu__item:nth-child(2)', {
    color: 'red'
})
.to('.figure:nth-child(2)', {
    opacity: 1
}, '>')
.to('.menu__item:nth-child(1)', {
    color: 'black'
}, '>')
.to('.figure:nth-child(1)', {
    opacity: 0
}, '>')
.addLabel("step2")

.to('.menu__item:nth-child(3)', {
    color: 'red'
})
.to('.figure:nth-child(3)', {
    opacity: 1
}, '>')
.to('.menu__item:nth-child(2)', {
    color: 'black'
}, '>')
.to('.figure:nth-child(2)', {
    opacity: 0
}, '>')
.addLabel("step3")


// btn.addEventListener("click", () => {
//     gsap.to(window, { scrollTo: tl.scrollTrigger.labelToScroll("myLabel") });
// });

$('.menu__item').each(function(index) {
    $(this).find('.menu__link').on('click',function() {
        gsap.to(window, { scrollTo: tl.scrollTrigger.labelToScroll(`step${index + 1}`) });
    });
});