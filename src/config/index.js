import dotenv from 'dotenv';
dotenv.config();

export default {
    ENVIRONMENT: process.env.NODE_ENV || 'dev',
    PORT: Number(process.env.PORT || 3000),
    DATBASE_NAME : process.env.DATABASE_NAME || "mini_whatsapp",
    DATABASE_USERNAME : process.env.DATABASE_USERNAME || "cisco",
    DATABASE_PASSWORD : process.env.DATABASE_PASSWORD || "cisco123",
    DATABASE_PORT : Number(process.env.DATABASE_PORT || 3306),
    DATABASE_DIALECT : process.env.DATABASE_DIALET || "mysql",
    DATABASE_HOST : process.env.DATABASE_HOST || "localhost",
    SMTP_HOST: process.env.SMTP_HOST || 'smtp.example.com',
    SMTP_PORT: Number(process.env.SMTP_PORT || 587),
    SMTP_USER: process.env.SMTP_USER || 'dev',
    SMTP_PASSWORD: process.env.SMTP_PASSWORD || 'devpass',
    SMTP_SECURE: process.env.SMTP_SECURE === 'true' || false,
    TYPICODE_API_URL: process.env.TYPICODE_API_URL || 'https://jsonplaceholder.typicode.com',
    TYPICODE_API_KEY: process.env.TYPICODE_API_KEY || '',
};