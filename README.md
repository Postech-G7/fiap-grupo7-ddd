# FIAP Tech Challenge 6SOAT

## Grupo 7

### Stack Utilizada

**Back-end:**
- Node.js 20
- Express 4.18.2
- TypeScript 5.3.3

**Banco de Dados:**
- MongoDB

### Requisitos de Negócio

#### Sistema de Autoatendimento de Pedidos - Lanchonetes

**Clientes:**
- Incluir, Alterar e Consultar os Clientes.
  - Identificação por CPF.
  - A inclusão deverá conter CPF, nome e e-mail.

**Produtos:**
- Incluir, Alterar, Excluir e Listar todos ou por categorias.

**Pedidos:**
- Incluir, Alterar e Listar os Pedidos.
  - O combo pode ter ou não os seguintes itens: lanche, acompanhamento e bebida.
  - Deve exibir o nome, descrição e preço de cada produto.
  - Status do pedido: Recebido, Em Preparação, Pronto e Finalizado.
  - Exibir no monitor para o cliente acompanhar.
  - A lista de pedidos deve ser ordenada como:
    - Pronto, Em Preparação e Recebido.
    - Pedidos mais antigos primeiro.
    - Pedidos finalizados não devem aparecer.

**Fazer Checkout do Pedido:**
- Receber os produtos solicitados e retornar à identificação do pedido.

**Pagamento:**
- A forma de pagamento será via QRCode do Mercado Pago.
- Webhook para receber confirmação de pagamento aprovado ou recusado.
- Consultar o status do pagamento (aprovado ou não).
- Após o pedido ser confirmado e pago, ele é enviado para a cozinha.

## Subindo os containers do Docker

Execute os comandos abaixo (o primeiro destrói todos os containers e volumes do docker, incluindo o banco de dados, então cuidado.)

```bash
  docker-compose down -v --rmi local
  docker-compose up -d
```

## Preparação para desenvolver localmente

Clone o projeto

```bash
  git clone https://github.com/dcleme17/fiap-tech-challenge-grupo22.git
```

Vá para o diretório do projeto

```bash
  cd fiap-tech-challenge-grupo22/backend
```

Instale as dependencias

```bash
  npm install
```

Inicie o servidor

```bash
  npm dev
```

Estrutura dos arquivos e diretórios do noss projeto projeto
```shell
📦backend
 ┣ 📂src
 ┃ ┣ 📂configuration
 ┃ ┃ ┣ 📂environments
 ┃ ┃ ┃ ┗ 📜development.env
 ┃ ┃ ┣ 📜environment.config.ts
 ┃ ┃ ┣ 📜express.config.ts
 ┃ ┃ ┣ 📜routes.config.ts
 ┃ ┃ ┗ 📜server.config.ts
 ┃ ┣ 📂domains
 ┃ ┃ ┣ 📂cliente
 ┃ ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┃ ┣ 📂driven
 ┃ ┃ ┃ ┃ ┃ ┗ 📂infra
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂database
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.database.ts
 ┃ ┃ ┃ ┃ ┗ 📂driver
 ┃ ┃ ┃ ┃ ┃ ┗ 📂rest
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.controller.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂routes
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.route.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂swagger
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜acesso.swagger.ts
 ┃ ┃ ┃ ┗ 📂core
 ┃ ┃ ┃ ┃ ┣ 📂applications
 ┃ ┃ ┃ ┃ ┃ ┣ 📂ports
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.port.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.usecases.ts
 ┃ ┃ ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cliente.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜cliente.versao.ts
 ┃ ┃ ┣ 📂pagamento
 ┃ ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┃ ┣ 📂driven
 ┃ ┃ ┃ ┃ ┃ ┗ 📂infra
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.database.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂external
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂mercadopago
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜mercadopago.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂pedidos
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pedidos.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.external.ts
 ┃ ┃ ┃ ┃ ┗ 📂driver
 ┃ ┃ ┃ ┃ ┃ ┗ 📂rest
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.controller.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂routes
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.route.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂swagger
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.swagger.ts
 ┃ ┃ ┃ ┗ 📂core
 ┃ ┃ ┃ ┃ ┣ 📂applications
 ┃ ┃ ┃ ┃ ┃ ┣ 📂ports
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.port.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.usecases.ts
 ┃ ┃ ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pagamento.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.versao.ts
 ┃ ┃ ┣ 📂pedido
 ┃ ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┃ ┣ 📂driven
 ┃ ┃ ┃ ┃ ┃ ┗ 📂infra
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂database
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.database.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.database.ts
 ┃ ┃ ┃ ┃ ┗ 📂driver
 ┃ ┃ ┃ ┃ ┃ ┗ 📂rest
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.controller.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.controller.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂routes
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.route.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.route.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂swagger
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.swagger.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.swagger.ts
 ┃ ┃ ┃ ┗ 📂core
 ┃ ┃ ┃ ┃ ┣ 📂applications
 ┃ ┃ ┃ ┃ ┃ ┣ 📂ports
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.port.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.port.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.usecases.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.usecases.ts
 ┃ ┃ ┃ ┃ ┗ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┣ 📜itemPedido.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pedido.versao.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜produto.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜produto.versao.ts
 ┃ ┃ ┣ 📂suporte
 ┃ ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┃ ┗ 📂driver
 ┃ ┃ ┃ ┃ ┃ ┗ 📂rest
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂routes
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜health-check.route.ts
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┣ 📜custom.error.ts
 ┃ ┃ ┃ ┃ ┗ 📜custom.response.ts
 ┃ ┃ ┃ ┗ 📂infra
 ┃ ┃ ┃ ┃ ┣ 📂database
 ┃ ┃ ┃ ┃ ┃ ┗ 📜mongodb.ts
 ┃ ┃ ┃ ┃ ┗ 📜error.handler.ts
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂swagger
 ┃ ┃ ┣ 📜swagger.json
 ┃ ┃ ┗ 📜swagger.ts
 ┃ ┣ 📜.DS_Store
 ┃ ┣ 📜application.ts
 ┃ ┗ 📜swagger.ts
 ┣ 📜.DS_Store
 ┣ 📜Dockerfile
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

Após completar a incialização dos containers, os serviços podem ser acessados conforme abaixo:
Backend (API)
```bash
http://localhost:3000/api/<dominio>/<operações>
```
MongoDB (pelo terminal do docker é possível usar o mongosh https://www.mongodb.com/docs/mongodb-shell/)
```bash
localhost:27017
```
