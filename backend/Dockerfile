FROM node:20
USER root
WORKDIR /home/node/app

# Copie o package.json e o tsconfig.json
COPY backend/package.json ./
COPY backend/tsconfig.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte
COPY backend/src ./src

# Execute o comando tsx após instalar as dependências
RUN npx tsx ./src/swagger.ts

# Configure as variáveis de ambiente
ENV PORT=3000
ENV DATABASE_URL=mongodb://root:mongo2023@localhost:27017
ENV MERCADOPAGO_WEBHOOK_URL=http:/br
ENV MERCADOPAGO_TOKEN=TEST-2
ENV MERCADOPAGO_POS=SU
ENV MERCADOPAGO_URL=https://api.mercadopago.com/123
ENV MERCADOPAGO_USERID=8496

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]