document.addEventListener('DOMContentLoaded', function () {
    const questionsList = document.querySelector('.questions__list');

    if (questionsList) {
        questionsList.addEventListener('click', function (e) {
            const expandElement = e.target.closest('.questions__expand');

            if (expandElement) {
                const answerElement = expandElement.nextElementSibling;
                const arrowElement = expandElement.querySelector('.questions__arrow');

                if (answerElement && answerElement.classList.contains('questions__answer')) {
                    answerElement.classList.toggle('questions__answer--active');

                    if (arrowElement) {
                        if (answerElement.classList.contains('questions__answer--active')) {
                            arrowElement.textContent = '-';
                        } else {
                            arrowElement.textContent = '+';
                        }
                    }
                }
            }
        });
    }
});
