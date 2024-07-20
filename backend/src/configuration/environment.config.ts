import dotenv from 'dotenv';
const NODE_ENV = process.env?.NODE_ENV || 'development';

console.log("Ambiente configurado:", NODE_ENV)
export const Environment = () => {
    dotenv.config({path: `src/configuration/environments/${NODE_ENV}.env`})
} 

