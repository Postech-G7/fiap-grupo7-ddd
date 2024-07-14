FROM node:20
USER root
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json .
COPY src ./src
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm tsx ./src/swagger.ts
ENV PORT=3000
ENV DATABASE_URL=mongodb://root:mongo2023@localhost:27017

ENV MERCADO_PAGO_USERID=8496
ENV MERCADO_PAGO_TOKEN=TEST-2
ENV MERCADO_PAGO_WEBHOOK_URL=http:/br
ENV MERCADO_PAGO_POS=SU
ENV MERCADO_PAGO_URL=https://api.mercadopago.com/44234242342342

EXPOSE 3000
CMD [ "pnpm", "start"]