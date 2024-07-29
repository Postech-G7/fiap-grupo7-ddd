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

- Criar, Atualizar e Consultar os Clientes.
  - Identificação por CPF.
  - A inclusão deverá conter CPF, nome e e-mail.

**Produtos:**

- Criar, Atualizar, Excluir e Listar todos ou por categorias.

**Pedidos:**

- Criar, Atualizar e Listar os Pedidos.
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

## Preparação para desenvolver localmente

Clone o projeto

```bash
  git clone https://github.com/luansdr/fiap-grupo7-ddd.git
```

Vá para o diretório do projeto

```bash
  cd fiap-grupo7-ddd/backend
```

Instale as dependencias

```bash
  npm install
```

## Subindo os containers do Docker

Vá para o diretório kubernetes

```bash
  cd fiap-grupo7-ddd/kubernetes
```

Execute os comandos abaixo:

```bash
  kubectl apply -f backend
  kubectl apply -f database
  kubectl apply -f mongo-express
  kubectl get pods para validar os pods
  kubectl get svc para validar os serviços e portas
```

Para quem utiliza minikube, acesse a url do serviço backend:

```bash
  minikube service backend-ext
```

Após completar a incialização dos containers, os serviços podem ser acessados conforme abaixo:
Backend (API)

```bash
http://localhost:31300/api/<dominio>/<operações>
```

MongoDB

```bash
http://localhost:31000/
```

Para quem utiliza minikube, acesse a url do serviço mongo-express:

```bash
  minikube service backend-ext
```

Para visualizar o swagger da api

```bash
http://localhost:31300/api-docs/
```

Collections
```bash
https://elements.getpostman.com/redirect?entityId=19168448-e1329958-0058-4f45-b1c6-cc9548d7a701&entityType=collection
```

Documentaçâo da arquitetura do projeto:
![alt text](<arquitetura hexagonal.jpg>)

Vídeo:

```bash
https://www.youtube.com/watch?v=nfeyK9pgyZ8
```

Estrutura dos arquivos e diretórios do noss projeto projeto

```shell
📦backend
 ┣ 📂src
 ┃ ┣ 📂configuration
 ┃ ┃ ┣ 📂environments
 ┃ ┃ ┃ ┣ 📜development.env
 ┃ ┃ ┃ ┗ 📜production.env
 ┃ ┃ ┣ 📜environment.config.ts
 ┃ ┃ ┣ 📜express.config.ts
 ┃ ┃ ┣ 📜http.config.ts
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
 ┃ ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┣ 📜pagamento.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜pagamento.versao.ts
 ┃ ┃ ┃ ┃ ┗ 📂value-objects
 ┃ ┃ ┃ ┃ ┃ ┣ 📜cpf.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜email.ts
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
 ┃ ┃ ┃ ┃ ┃ ┗ 📜repository.ts
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
 ┣ 📜pnpm-lock.yaml
 ┗ 📜tsconfig.json
📦kubernetes
 ┣ 📂backend
 ┃ ┣ 📜configmap.yaml
 ┃ ┣ 📜deployment.yaml
 ┃ ┣ 📜hpa.yaml
 ┃ ┣ 📜secrets.yaml
 ┃ ┗ 📜service-ext.yaml
 ┣ 📂database
 ┃ ┣ 📜configmap.yaml
 ┃ ┣ 📜deployment.yaml
 ┃ ┣ 📜persistent-volume-claim.yaml
 ┃ ┣ 📜persistent-volume.yaml
 ┃ ┣ 📜secrets.yaml
 ┃ ┣ 📜service-external.yaml
 ┃ ┗ 📜service.yaml
 ┣ 📂mongo-express
 ┃ ┣ 📜configmap.yaml
 ┃ ┣ 📜deployment.yaml
 ┃ ┣ 📜secrets.yaml
 ┃ ┗ 📜service-ext.yaml
 ┗ 📜READMME.md
```
