/* ==========================================================
   THE FAREWELL DINNER
   APP ENTRY POINT
   ==========================================================
   Phase 1 responsibility: initialize the app shell and confirm
   the design-system foundation loaded correctly. No game logic
   (evidence, suspects, rooms, puzzles, notebook, storage) lives
   here yet — that arrives in later phases.
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    console.log('The Farewell Dinner — foundation loaded.');

    checkFoundation();

});


/**
 * Basic sanity check for Phase 1.
 * Confirms that globals.css design tokens are actually being
 * applied to the page, so a broken <link> path is caught early
 * instead of silently rendering unstyled HTML.
 */
function checkFoundation() {

    const rootStyles = getComputedStyle(document.documentElement);

    const accent = rootStyles.getPropertyValue('--accent').trim();

    if (!accent) {

        console.warn('Design tokens not found. Check that css/globals.css is linked correctly.');

        return;

    }

    console.log('Design tokens detected. Accent color:', accent);

}
