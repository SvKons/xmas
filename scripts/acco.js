document.addEventListener('DOMContentLoaded', function () {
    const expandElements = document.querySelectorAll('.questions__expand');

    expandElements.forEach(function (expandElement) {
        expandElement.addEventListener('click', function () {
            const answerElement = this.nextElementSibling;
            const arrowElement = this.querySelector('.questions__arrow');

            if (answerElement && answerElement.classList.contains('questions__answer')) {
                const isHidden = answerElement.style.display === 'none' || (answerElement.style.maxHeight && answerElement.style.maxHeight === '0px') || (!answerElement.style.display && window.getComputedStyle(answerElement).display === 'none');

                if (isHidden) {
                    // Показываем элемент
                    answerElement.style.display = 'block';
                    answerElement.style.maxHeight = '0px';
                    answerElement.style.overflow = 'hidden';
                    answerElement.style.transition = 'max-height 0.2s ease';

                    // Устанавливаем реальную высоту после небольшой задержки
                    setTimeout(function () {
                        answerElement.style.maxHeight = answerElement.scrollHeight + 'px';
                    }, 10);

                    if (arrowElement) {
                        arrowElement.textContent = '-';
                    }
                } else {
                    // Скрываем элемент
                    answerElement.style.maxHeight = '0px';

                    setTimeout(function () {
                        answerElement.style.display = 'none';
                        answerElement.style.maxHeight = '';
                    }, 200);

                    if (arrowElement) {
                        arrowElement.textContent = '+';
                    }
                }
            }
        });
    });
});
