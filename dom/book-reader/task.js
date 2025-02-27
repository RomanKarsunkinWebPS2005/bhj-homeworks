class BookReader {
    constructor() {
        this.book = document.getElementById('book');
        this.initFontSizeControls();
        this.initColorControls();
        this.initBackgroundControls();
    }

    initFontSizeControls() {
        const fontControls = document.querySelector('.book__control_font-size');
        if (fontControls) {
            fontControls.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('font-size')) {
                    document.querySelectorAll('.font-size').forEach(el => {
                        el.classList.remove('font-size_active');
                    });
                    
                    e.target.classList.add('font-size_active');
                    
                    this.book.classList.remove('book_fs-big', 'book_fs-small');
                    
                    const size = e.target.dataset.size;
                    if (size) {
                        this.book.classList.add(`book_fs-${size}`);
                    }
                }
            });
        }
    }

    initColorControls() {
        const textColorControls = document.querySelector('.book__control_color');
        if (textColorControls) {
            textColorControls.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('color')) {
                    textColorControls.querySelectorAll('.color').forEach(el => {
                        el.classList.remove('color_active');
                    });
                    
                    e.target.classList.add('color_active');
                    
                    this.book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
                    
                    const textColor = e.target.dataset.textColor;
                    if (textColor) {
                        this.book.classList.add(`book_color-${textColor}`);
                    }
                }
            });
        }
    }

    initBackgroundControls() {
        const bgColorControls = document.querySelector('.book__control_background');
        if (bgColorControls) {
            bgColorControls.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.target.classList.contains('color')) {
                    bgColorControls.querySelectorAll('.color').forEach(el => {
                        el.classList.remove('color_active');
                    });
                    
                    e.target.classList.add('color_active');
                    
                    this.book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
                    
                    const bgColor = e.target.dataset.bgColor;
                    if (bgColor) {
                        this.book.classList.add(`book_bg-${bgColor}`);
                    }
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new BookReader();
});
