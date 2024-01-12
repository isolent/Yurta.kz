const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001; // Порт, на котором будет работать сервер

// Здесь вам нужно подключить вашу фейковую базу данных или настоящую базу данных
const fakeDatabase = require('./src/db');

// Разрешить CORS (если нужно)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Маршрут для получения данных из базы (замените на вашу логику)
app.get('/api/cards', async (req, res) => {
  try {
    const cards = await fakeDatabase.fetchCardsData(); // Ожидаем выполнения промиса
    res.json(cards); // Отправка данных в формате JSON
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

