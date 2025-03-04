gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function createDynamicTimeline() {
    // Initial setup to hide all figures except the first
    gsap.set('.figure ~ .figure', {
        opacity: 0,
    });

    const $menuItems = $('.menu__item');
    const $figures = $('.figure');
    const totalSteps = $menuItems.length;

    // Create timeline
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

    // Dynamically build timeline
    $menuItems.each(function(index) {
        const $currentMenuItem = $(this);
        const $currentFigure = $figures.eq(index);

        // Reset previous items before activating current
        if (index > 0) {
            const $prevMenuItems = $menuItems.slice(0, index);
            const $prevFigures = $figures.slice(0, index);

            tl.to($prevMenuItems, {
                color: 'black'
            })
            .to($prevFigures, {
                opacity: 0
            });
        }

        // Activate current menu item and figure
        tl.to($currentMenuItem, {
            color: 'red'
        })
        .to($currentFigure, {
            opacity: 1
        })
        .addLabel(`step${index + 1}`);
    });

    // Add click handlers for menu items
    $menuItems.each(function(index) {
        $(this).find('.menu__link').on('click', function() {
            // Scroll to the specific step
            gsap.to(window, { 
                scrollTo: tl.scrollTrigger.labelToScroll(`step${index + 1}`) 
            });
        });
    });

    return tl;
}

// Initialize the dynamic timeline
const dynamicTimeline = createDynamicTimeline();