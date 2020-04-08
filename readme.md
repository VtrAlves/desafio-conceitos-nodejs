<h3 align="center">
  Desafio GoStack: Conceitos do Node.js
</h3>
<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-%2304D361">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafios?color=%2304D361">
  <img alt="MadeBy" src="https://img.shields.io/badge/made%20by-Vitor%20Alves-%2304D361">
</p>

## ❕ Sobre o desafio

Esse desafio foi solicitado pela Rocketseat com as instruções passadas <a href= "https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs"> nesse repositório </a>.

## 💻 Alterações do desafio

Foi baixado o <a href="https://github.com/Rocketseat/gostack-template-conceitos-nodejs">template</a> enviado e assim criei as rotas para criação / listagem / edição / remoção dos repositórios, além da funcionalidade de adicionar um like em cada repositório.

Rota de Remoção para um repositório foi atualizada os parâmetros do middleware para se manter no padrão do restante.

## 📖 Bibliotecas Utilizadas

- `Express`: Utilizado para escutar e responder requisições realizadas.
- `Nodemon`: Utilizado para reiniciar o servidor a cada mudança nos arquivos. (Instalado em ambiente de desenvolvimento)
- `Cors`: Utilizado para gerenciar o compartilhamento de recursos com origens diferentes.
- `UUIDv4`: Utilizado para gerar um ID unico em cada repositório criado.
- `Jest`: Utilizado para realização de testes automatizados na aplicação. (Instalado em ambiente de desenvolvimento)

## 🚀 Iniciar aplicação

Primeiramente é necessário baixar as dependências com o comando:

> yarn

Após a instalação, para iniciar o servidor utilize o comando:

> yarn dev

Caso deseja rodar os testes, utilize o seguinte comando:

> yarn test

<hr />
