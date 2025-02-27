class Rotator {
    constructor(element) {
        this.rotator = element;
        this.cases = Array.from(this.rotator.querySelectorAll('.rotator__case'));
        this.currentIndex = 0;
        
        const activeIndex = this.cases.findIndex(item => 
            item.classList.contains('rotator__case_active'));
        
        if (activeIndex !== -1) {
            this.currentIndex = activeIndex;
        }

        this.start();
    }

    start() {
        setInterval(() => {
            this.cases[this.currentIndex].classList.remove('rotator__case_active');
            
            this.currentIndex = (this.currentIndex + 1) % this.cases.length;
            
            this.cases[this.currentIndex].classList.add('rotator__case_active');
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach(rotator => new Rotator(rotator));
});
