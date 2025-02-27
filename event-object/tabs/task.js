document.addEventListener('DOMContentLoaded', function() {
    const tabNavigation = document.querySelector('.tab__navigation');
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    tabNavigation.addEventListener('click', function(event) {
        const clickedTab = event.target.closest('.tab');
        
        if (!clickedTab) {
            return;
        }

        tabs.forEach(tab => tab.classList.remove('tab_active'));
        clickedTab.classList.add('tab_active');

        const tabIndex = Array.from(tabs).indexOf(clickedTab);

        tabContents.forEach(content => content.classList.remove('tab__content_active'));
        tabContents[tabIndex].classList.add('tab__content_active');
    });
});
