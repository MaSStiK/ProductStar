const config = {
    allowedOrigin: '*',
    port: process.env.PORT || 3002,
    dbPath: process.env.DB_PATH || './users.db'
    // Здесь можно хранить любые конфигурируемые настройки приложения (API ключи, credentials  для подключения к базе данных и т.д.)
}

export default config;