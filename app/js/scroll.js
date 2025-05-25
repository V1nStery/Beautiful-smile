document.addEventListener('DOMContentLoaded', () => {
  // Обработка всех якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение
        
        const targetId = this.getAttribute('href'); // Получаем ID цели
        const targetElement = document.querySelector(targetId);
        
        if (!targetElement) return; // Если элемент не найден - выходим
        
        // Расчёт позиции с учётом фиксированного хедера (если есть)
        const headerOffset = 100; // Высота хедера в пикселях
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Плавный скролл
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Встроенная плавная прокрутка
        });

        // Обновляем URL в адресной строке (опционально)
        history.pushState(null, null, targetId);
        });


        // Полифил для плавного скролла
        if (!('scrollBehavior' in document.documentElement.style)) {
        const smoothScroll = (targetPosition, duration = 500) => {
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            let startTime = null;

            const animation = currentTime => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
        };

        // Переписываем основной код
        window.scrollTo = (options) => {
            smoothScroll(options.top, 500);
        };
        }
    });





});