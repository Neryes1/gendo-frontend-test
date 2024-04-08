# Teste para vaga de front-end na Gendo.com.br
Este repositório tem como fim testar os candidatos para vaga de front-end developer na empresa [Gendo](https://gendo.com.br).
> Para esta vaga buscamos alguém apaixonado por HTML, CSS, JavaScript e atento aos detalhes!

## Instruções Básicas
1. Faça um fork deste repositório
2. Implemente o HTML e CSS de forma que fique fiel ao layout
3. Atenção com espaçamentos e tamanhos de fonte
4. Qualquer contribuição para melhorar o resultado será bem vinda!
5. O usuário do GitHub utilizado no exemplo pode ser qualquer um de sua escolha
6. Ao finalizar, atualize o README.md no seu repositório com as instruções para instalar e executar sua entrega

## Desafio (opcional para Junior), a página deve:
1. Carregar os dados de forma dinâmica utilizando a [API do GitHub](https://developer.github.com/v3/)
2. Carregar os repositórios do usuário inicialmente
3. Carregar os favoritos do usuário ao acessar a tab **Starred**
4. Fazer uma busca ao digitar e fazer o submit com "Enter"

## O que esperamos no teste
* HTML Semântico
* CSS de fácil leitura e reutilização
* Uso de pré-processadores CSS como Sass, Less ou Stylus
* Utilizar algum empacotador como Webpack ou similiar

## Stack
### Preferível
* Utilizar Sass como pré-processador
* Mobile First

### Bônus
* AngularJS, Angular (2+), React, VueJS ou Javascript puro e organizado
* Testes unitários (Jest, Jasmine ou similar)
* CSS transitions
* [BEM](https://tableless.com.br/bem-um-novo-metodo-para-seu-css/) (Block, Element Modifier) nas nomenclaturas do CSS

## Material
Todo o layout está hospedado no Zeplin neste link: 
https://scene.zeplin.io/project/5b48f7870acff10844983114

## Envio do teste
1. Suba o repositório no seu Github e envie o link com o assunto: **Teste Front-End** para Juliano Baladão [jbaladao@gendo.com.br](mailto:jbaladao@gendo.com.br)


# Atutalização do README

## Instalação
Para instalar e configurar o projeto, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o comando npm install para instalar todas as dependências listadas no package.json.
4. Após a instalação das dependências, você pode executar o comando npm run watch para iniciar o modo de desenvolvimento com webpack.

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir com a instalação.

## Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes scripts:

`npm run watch`

Executa o webpack no modo de desenvolvimento, assistindo as alterações nos arquivos e recompilando automaticamente.

## Dependências de Desenvolvimento
* css-loader: ^6.10.0
* glob: ^10.3.12
* mini-css-extract-plugin: ^2.8.1
* stylus: ^0.63.0
* stylus-loader: ^8.1.0
* webpack: ^5.91.0
* webpack-cli: ^5.1.4