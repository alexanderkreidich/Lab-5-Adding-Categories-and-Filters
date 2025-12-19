 // Массив объектов с блюдами
const dishes = [
  // Супы
  {
    keyword: 'gaspacho',
    name: 'Гаспачо',
    price: 195,
    category: 'soup',
    count: '350 г',
    image: 'images/gazpacho.png',
    kind: 'veg',
  },
  {
    keyword: 'mushroom-soup',
    name: 'Грибной суп-пюре',
    price: 185,
    category: 'soup',
    count: '330 г',
    image: 'images/mushroom-soup.png',
    kind: 'meat',
  },
  {
    keyword: 'norwegian-soup',
    name: 'Норвежский суп',
    price: 270,
    category: 'soup',
    count: '330 г',
    image: 'images/norwegian-soup.png',
    kind: 'fish',
  },
  {
    keyword: 'ramen',
    name: 'Рамен',
    price: 375,
    category: 'soup',
    count: '425 г',
    image: 'images/ramen.png',
    kind: 'meat',
  },
  {
    keyword: 'tom-yum',
    name: 'Том ям с креветками',
    price: 650,
    category: 'soup',
    count: '500 г',
    image: 'images/tom-yum.png',
    kind: 'fish',
  },
  {
    keyword: 'chicken-soup',
    name: 'Куриный суп',
    price: 330,
    category: 'soup',
    count: '350 г',
    image: 'images/chicken-soup.png',
    kind: 'veg',
  },

  // Главные блюда
  {
    keyword: 'fried-potatoes',
    name: 'Жареная картошка с грибами',
    price: 150,
    category: 'main-course',
    count: '250 г',
    image: 'images/fried-potatoes.png',
    kind: 'veg',
  },
  {
    keyword: 'lasagna',
    name: 'Лазанья',
    price: 385,
    category: 'main-course',
    count: '310 г',
    image: 'images/lasagna.png',
    kind: 'meat',
  },
  {
    keyword: 'cutlets',
    name: 'Котлеты из курицы с картофельным пюре',
    price: 225,
    category: 'main-course',
    count: '280 г',
    image: 'images/cutlets.png',
    kind: 'meat',
  },
  {
    keyword: 'fish-rice',
    name: 'Рыбная котлета с рисом и спаржей',
    price: 320,
    category: 'main-course',
    count: '270 г',
    image: 'images/fish-rice.png',
    kind: 'fish',
  },
  {
    keyword: 'pizza',
    name: 'Пицца Маргарита',
    price: 450,
    category: 'main-course',
    count: '470 г',
    image: 'images/pizza.png',
    kind: 'veg',
  },
  {
    keyword: 'shrimp-pasta',
    name: 'Паста с креветками',
    price: 340,
    category: 'main-course',
    count: '280 г',
    image: 'images/shrimp-pasta.png',
    kind: 'fish',
  },

  // Салаты и стартеры
  {
    keyword: 'korean-salad',
    name: 'Корейский салат с овощами и яйцом',
    price: 330,
    category: 'salad',
    count: '250 г',
    image: 'images/korean-salad.png',
    kind: 'veg',
  },
  {
    keyword: 'caesar',
    name: 'Цезарь с цыпленком',
    price: 370,
    category: 'salad',
    count: '220 г',
    image: 'images/caesar.png',
    kind: 'meat',
  },
  {
    keyword: 'caprese',
    name: 'Капрезе с моцареллой',
    price: 350,
    category: 'salad',
    count: '235 г',
    image: 'images/caprese.png',
    kind: 'veg',
  },
  {
    keyword: 'tuna-salad',
    name: 'Салат с тунцом',
    price: 480,
    category: 'salad',
    count: '250 г',
    image: 'images/tuna-salad.png',
    kind: 'fish',
  },
  {
    keyword: 'french-fries-caesar',
    name: 'Картофель фри с соусом Цезарь',
    price: 280,
    category: 'salad',
    count: '235 г',
    image: 'images/french-fries-caesar.png',
    kind: 'veg',
  },
  {
    keyword: 'french-fries-ketchup',
    name: 'Картофель фри с кетчупом',
    price: 260,
    category: 'salad',
    count: '235 г',
    image: 'images/french-fries-ketchup.png',
    kind: 'veg',
  },

  // Напитки
  {
    keyword: 'orange-juice',
    name: 'Апельсиновый сок',
    price: 120,
    category: 'drink',
    count: '300 мл',
    image: 'images/orange-juice.png',
    kind: 'cold',
  },
  {
    keyword: 'apple-juice',
    name: 'Яблочный сок',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/apple-juice.png',
    kind: 'cold',
  },
  {
    keyword: 'carrot-juice',
    name: 'Морковный сок',
    price: 110,
    category: 'drink',
    count: '300 мл',
    image: 'images/carrot-juice.png',
    kind: 'cold',
  },
  {
    keyword: 'cappuccino',
    name: 'Капучино',
    price: 180,
    category: 'drink',
    count: '300 мл',
    image: 'images/cappuccino.png',
    kind: 'hot',
  },
  {
    keyword: 'green-tea',
    name: 'Зеленый чай',
    price: 100,
    category: 'drink',
    count: '300 мл',
    image: 'images/green-tea.png',
    kind: 'hot',
  },
  {
    keyword: 'black-tea',
    name: 'Черный чай',
    price: 90,
    category: 'drink',
    count: '300 мл',
    image: 'images/black-tea.png',
    kind: 'hot',
  },

  // Десерты
  {
    keyword: 'baklava',
    name: 'Пахлава',
    price: 220,
    category: 'dessert',
    count: '300 гр',
    image: 'images/baklava.png',
    kind: 'small',
  },
  {
    keyword: 'cheesecake',
    name: 'Чизкейк',
    price: 240,
    category: 'dessert',
    count: '125 гр',
    image: 'images/cheesecake.png',
    kind: 'medium',
  },
  {
    keyword: 'chocolate-cheesecake',
    name: 'Шоколадный чизкейк',
    price: 260,
    category: 'dessert',
    count: '125 гр',
    image: 'images/chocolate-cheesecake.png',
    kind: 'small',
  },
  {
    keyword: 'chocolate-cake',
    name: 'Шоколадный торт',
    price: 270,
    category: 'dessert',
    count: '140 гр',
    image: 'images/chocolate-cake.png',
    kind: 'small',
  },
  {
    keyword: 'donuts-3',
    name: 'Пончики (3 штуки)',
    price: 410,
    category: 'dessert',
    count: '350 гр',
    image: 'images/donuts-3.png',
    kind: 'medium',
  },
  {
    keyword: 'donuts-6',
    name: 'Пончики (6 штук)',
    price: 650,
    category: 'dessert',
    count: '700 гр',
    image: 'images/donuts-6.png',
    kind: 'large',
  },
]

// Объект для хранения выбранных блюд
const selectedDishes = {
  soup: null,
  'main-course': null,
  salad: null,
  drink: null,
  dessert: null,
}

// Объект для хранения активных фильтров
const activeFilters = {
  soup: null,
  'main-course': null,
  salad: null,
  drink: null,
  dessert: null,
}

// Сортировка блюд по алфавиту
function sortDishesByName(dishesArray) {
  return dishesArray.sort((a, b) => a.name.localeCompare(b.name, 'ru'))
}

// Создание HTML для карточки блюда
function createDishCard(dish) {
  const card = document.createElement('div')
  card.className = 'dish-card'
  card.setAttribute('data-dish', dish.keyword)

  card.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" />
        <p class="dish-price">${dish.price}₽</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-weight">${dish.count}</p>
        <button>Добавить</button>
    `

  // Добавляем обработчик клика на карточку
  card.addEventListener('click', () => selectDish(dish))

  return card
}

// Отображение блюд на странице
function displayDishes(category = null, filterKind = null) {
  const sections = document.querySelectorAll('.menu-section')

  sections.forEach((section) => {
    const categoryName = section.getAttribute('data-category')

    // Если указана конкретная категория, обрабатываем только её
    if (category && categoryName !== category) {
      return
    }

    const grid = section.querySelector('.dishes-grid')
    if (grid) {
      // Очищаем секцию
      grid.innerHTML = ''

      // Фильтруем блюда для текущей категории
      let categoryDishes = dishes.filter(
        (dish) => dish.category === categoryName
      )

      // Применяем фильтр по kind, если он установлен
      const activeFilter = filterKind || activeFilters[categoryName]
      if (activeFilter) {
        categoryDishes = categoryDishes.filter(
          (dish) => dish.kind === activeFilter
        )
      }

      // Сортируем блюда
      const sortedDishes = sortDishesByName(categoryDishes)

      // Добавляем карточки блюд
      sortedDishes.forEach((dish) => {
        grid.appendChild(createDishCard(dish))
      })
    }
  })
}

// Выбор блюда
function selectDish(dish) {
  selectedDishes[dish.category] = dish
  updateOrderDisplay()
}

// Обновление отображения заказа
function updateOrderDisplay() {
  const orderBlock = document.querySelector('.order-block')

  // Проверяем, есть ли хотя бы одно выбранное блюдо
  const hasSelection = Object.values(selectedDishes).some(
    (dish) => dish !== null
  )

  if (!hasSelection) {
    // Если ничего не выбрано
    orderBlock.innerHTML = `
            <h3>Ваш заказ</h3>
            <p>Ничего не выбрано</p>
        `
    return
  }

  // Формируем HTML для заказа
  let orderHTML = '<h3>Ваш заказ</h3>'

  // Суп
  if (selectedDishes.soup) {
    orderHTML += `
            <p><strong>Суп</strong></p>
            <p>${selectedDishes.soup.name} ${selectedDishes.soup.price}₽</p>
        `
  } else {
    orderHTML += `
            <p><strong>Суп</strong></p>
            <p>Блюдо не выбрано</p>
        `
  }

  // Главное блюдо
  if (selectedDishes['main-course']) {
    orderHTML += `
            <p><strong>Главное блюдо</strong></p>
            <p>${selectedDishes['main-course'].name} ${selectedDishes['main-course'].price}₽</p>
        `
  } else {
    orderHTML += `
            <p><strong>Главное блюдо</strong></p>
            <p>Блюдо не выбрано</p>
        `
  }

  // Салат/стартер
  if (selectedDishes.salad) {
    orderHTML += `
            <p><strong>Салат/стартер</strong></p>
            <p>${selectedDishes.salad.name} ${selectedDishes.salad.price}₽</p>
        `
  } else {
    orderHTML += `
            <p><strong>Салат/стартер</strong></p>
            <p>Блюдо не выбрано</p>
        `
  }

  // Напиток
  if (selectedDishes.drink) {
    orderHTML += `
            <p><strong>Напиток</strong></p>
            <p>${selectedDishes.drink.name} ${selectedDishes.drink.price}₽</p>
        `
  } else {
    orderHTML += `
            <p><strong>Напиток</strong></p>
            <p>Напиток не выбран</p>
        `
  }

  // Десерт
  if (selectedDishes.dessert) {
    orderHTML += `
            <p><strong>Десерт</strong></p>
            <p>${selectedDishes.dessert.name} ${selectedDishes.dessert.price}₽</p>
        `
  } else {
    orderHTML += `
            <p><strong>Десерт</strong></p>
            <p>Десерт не выбран</p>
        `
  }

  // Подсчет стоимости
  const totalPrice = calculateTotalPrice()
  orderHTML += `
        <p><strong>Стоимость заказа</strong></p>
        <p>${totalPrice}₽</p>
    `

  orderBlock.innerHTML = orderHTML
}

// Подсчет итоговой стоимости
function calculateTotalPrice() {
  let total = 0
  Object.values(selectedDishes).forEach((dish) => {
    if (dish) {
      total += dish.price
    }
  })
  return total
}

// Обработка кликов по фильтрам
function handleFilterClick(event) {
  const filterBtn = event.target
  if (!filterBtn.classList.contains('filter-btn')) return

  const section = filterBtn.closest('.menu-section')
  const category = section.getAttribute('data-category')
  const kind = filterBtn.getAttribute('data-kind')

  // Проверяем, активен ли уже этот фильтр
  const isActive = filterBtn.classList.contains('active')

  // Удаляем класс active у всех кнопок в этой секции
  section.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('active')
  })

  if (isActive) {
    // Если фильтр был активен, отключаем его
    activeFilters[category] = null
    displayDishes(category)
  } else {
    // Активируем новый фильтр
    filterBtn.classList.add('active')
    activeFilters[category] = kind
    displayDishes(category, kind)
  }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  displayDishes()
  updateOrderDisplay()

  // Добавляем обработчики для кнопок фильтров
  const filterContainers = document.querySelectorAll('.filters')
  filterContainers.forEach((container) => {
    container.addEventListener('click', handleFilterClick)
  })
})
