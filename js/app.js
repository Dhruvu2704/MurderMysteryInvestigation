document.addEventListener('DOMContentLoaded', () => {

    console.log('The Farewell Dinner — foundation loaded.');

    checkFoundation();

    initPageTransitions();

});

function checkFoundation() {
    const rootStyles = getComputedStyle(document.documentElement);
    const accent = rootStyles.getPropertyValue('--accent').trim();
    if (!accent) {
        console.warn('Design tokens not found. Check that css/globals.css is linked correctly.');
        return;
    }
    console.log('Design tokens detected. Accent color:', accent);
}



function initPageTransitions() {

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[data-navigate]').forEach(link => {

        link.addEventListener('click', event => {

            const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;

            if (reducedMotion || modified || event.button !== 0) {
                return;
            }

            event.preventDefault();

            document.body.classList.add('is-leaving');

            setTimeout(() => {
                window.location.href = link.href;
            }, 280);

        });

    });

    
    window.addEventListener('pageshow', () => {
        document.body.classList.remove('is-leaving');
    });

}


