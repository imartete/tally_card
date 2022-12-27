# goit-test-task

# [GitHub Pages Link](https://imartete.github.io/tally_card/)

1. Підготований кастомний файл deploy.yml, який не вимагає підтримування окремої гілки gh-pages.
2. Реалізований компонент TallyCard, що відображає картку користувача.
3. Кнопка Follow інтерактивна, тобто при клікові - її текст змінюється на Following. Також
змінюється колір кнопки, а до кількості фоловерів додається один.
4. При оновлені сторінки фіксується кінцевий результат дій клієнта. Тобто,
якщо здійснити клік і оновити сторінку - то кнопка все рівно залишається
в стані Following із відповідним кольором, а кількість фоловерів не
зменшується до початкового значення.
5. При повторному клікові на кнопку її текст та колір змінюються до початкового
стану (toggle). Також зменшується і кількість фоловерів. 
6. Створена локальна база даних (окремий файл json) акаунтів користувачів.

# Технології

React, PropTypes, styled-components

