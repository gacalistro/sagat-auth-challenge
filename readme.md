# Sagat Auth Challenge

## Objetivo

Criar telas para autenticação de usuário e consumir API de autenticação e uma rota privada utilizando o token gerado após estar autorizado.

## Design de telas

Foram desenhadas utilizando Figma.
[Ver telas no Figma](https://www.figma.com/design/kUuadFMcUAGx2zyPcQV8jf/Sagat?node-id=0-1&t=6MgG6JOOz3mqtnlF-1)

## Testando a aplicação

### Pré-requisitos

Git
Node.js
Back-end fornecido rodando no docker

### Rodando o APP localmente

```bash
# Clone este repositório
$ git clone <https://github.com/gacalistro/sagat-auth-challenge>

# Acesse a pasta do projeto no terminal/cmd ou no terminal integrado de algum editor de código

# Instale as dependências
$ npm install

# Verifique o arquivo axios.ts dentro da pasta lib e altere a baseURL
# de acordo com o seu dispositivo. A baseURL está definido como 10.0.2.2
# pois é o padrão que o emulador do AndroidStudio utiliza para acessar o
# localhost da máquina.

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Execute a aplicação em um emulador/simulador ou utilizando o app Expo Go.
# Leve em consideração a comunicação com o backend.
```
