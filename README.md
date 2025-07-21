# WalkSafe - Plataforma Colaborativa de Segurança

WalkSafe é uma plataforma colaborativa onde você pode relatar e se manter informado sobre ocorrências de segurança em sua região.

Este projeto foi desenvolvido com Remix e React, utilizando o `localStorage` do navegador para armazenar todos os dados, eliminando a necessidade de um backend ou banco de dados.

## Funcionalidades

* 🔐 **Login de Usuário (Simulado):** Para relatar uma ocorrência, o usuário precisa estar "logado". Qualquer nome de usuário não vazio funciona.
* 📝 **Relatar Ocorrências:** Um formulário completo para registrar os detalhes de um incidente.
* 🗺️ **Listar Ocorrências:** Visualize os relatos mais recentes em uma área específica.
* 💬 **Detalhes e Comentários:** Veja os detalhes completos de uma ocorrência e adicione comentários.

## Tecnologias Utilizadas

* **Framework:** [Remix](https://remix.run/)
* **Linguagem:** TypeScript
* **Biblioteca UI:** React
* **Estilização:** CSS Padrão
* **Armazenamento de Dados:** `localStorage` do navegador

## Como Rodar a Aplicação

Siga os passos abaixo para executar o projeto em sua máquina local.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) (versão 18 ou superior)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

**1. Clone o Repositório**
```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_SEU_PROJETO>

npm install
``` 

## Inicie o Servidor de Desenvolvimento
```bash
npm run dev
```

## Abra no Navegador
Acesse http://localhost:3000 em seu navegador para ver a aplicação funcionando.
