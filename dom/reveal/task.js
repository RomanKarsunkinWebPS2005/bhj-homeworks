function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', handleReveal);
window.addEventListener('load', handleReveal);
