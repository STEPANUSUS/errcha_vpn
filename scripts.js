// База данных с ключами
const keysDatabase = {
    Switzerland: ["Ключ Швейцарии 1", "Ключ Швейцарии 2", "Ключ Швейцарии 3", "Ключ Швейцарии 4", "Ключ Швейцарии 5"],
    Canada: ["Ключ Канады 1", "Ключ Канады 2", "Ключ Канады 3", "Ключ Канады 4", "Ключ Канады 5"],
    Indonesia: ["Ключ Индонезии 1", "Ключ Индонезии 2", "Ключ Индонезии 3", "Ключ Индонезии 4", "Ключ Индонезии 5"],
    Norway: ["Ключ Норвегии 1", "Ключ Норвегии 2", "Ключ Норвегии 3", "Ключ Норвегии 4", "Ключ Норвегии 5"]
};

// Переменная для хранения выбранной страны
let selectedCountry = null;

// Функция выбора страны
function selectCountry(country) {
    selectedCountry = country;

    // Обновляем флаг выбранной страны
    const selectedFlag = document.getElementById("selectedFlag");
    selectedFlag.src = `${country.toLowerCase()}.png`; // Название файла соответствует названию страны
    selectedFlag.style.display = "block";

    // Обновляем текстовое сообщение
    const output = document.getElementById("output");
    output.innerText = `Выбрана страна: ${country}. Нажмите "Сгенерировать" для получения ключа.`;

    // Прячем остальные элементы и запускаем анимацию подъема флага через 1 секунду
    setTimeout(() => {
        document.getElementById("contentContainer").classList.add("hidden");
        selectedFlag.classList.add("fly-up");
    }, 1000);
}

// Функция генерации ключа
function generateKey() {
    if (!selectedCountry) {
        alert("Пожалуйста, выберите страну перед генерацией ключа.");
        return;
    }

    // Получаем случайный ключ из базы данных для выбранной страны
    const keys = keysDatabase[selectedCountry];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Отображаем ключ
    const output = document.getElementById("output");
    output.innerText = randomKey;
}
