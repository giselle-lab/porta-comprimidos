
# Porta Medicamentos Digital/Inteligente

## Funcionalidades

O aplicativo possui as seguintes funcionalidades:

- Cadastro: Permite que os usuários se cadastrem no aplicativo utilizando nome, e-mail e senha.
- Login: Os usuários podem fazer login no aplicativo utilizando o e-mail e senha cadastrados.
- Vincular o App com a Caixinha: Permite vincular o aplicativo à caixinha digital através de um código exibido no LCD da caixinha.
- Home: Exibe o status dos compartimentos do porta medicamentos digital, mostrando quais medicamentos foram tomados no horário programado.
- Configurações: Permite ao usuário definir os horários desejados para cada compartimento e enviar essas configurações ao servidor.

## Como Funciona?

1. **Cadastro**: O usuário se cadastra no aplicativo na tela de cadastro com seu nome, senha e e-mail.

2. **Login**: O usuário faz login no aplicativo utilizando o e-mail e senha cadastrados anteriormente. O aplicativo armazena o token de autenticação que vem do servidor para permitir o acesso às funcionalidades protegidas.

3. **Vincular o App com a Caixinha**: O usuário visualiza um código exibido no LCD da caixinha e o digita na tela de "VincularApp". O aplicativo envia o código para o servidor, que verifica a correspondência e associa o aplicativo à caixinha.

4. **Home**: Na tela "Home", o usuário pode visualizar o status dos compartimentos do porta medicamentos digital, mostrando quais medicamentos foram tomados no horário programado e quais ainda precisam ser tomados.

5. **Configurações**: Na tela de "Configurações", o usuário pode digitar os horários desejados para cada compartimento. Ao pressionar o botão "Salvar", o aplicativo envia as configurações ao servidor para serem armazenadas e sincronizadas com a caixinha digital.

6. **Desvincular o App**: Caso o usuário deseje desvincular o aplicativo da caixinha, ele pode acessar a tela de "VincularApp" e pressionar o botão "Desvincular". O aplicativo envia uma solicitação ao servidor para remover a associação entre o aplicativo e a caixinha.


## Bibliotecas e Dependências

O aplicativo utiliza diversas bibliotecas e dependências para fornecer suas funcionalidades. Algumas das principais bibliotecas utilizadas incluem:

- `react`: Biblioteca JavaScript para criação de interfaces de usuário.
- `react-native`: Framework JavaScript para desenvolvimento de aplicativos móveis multiplataforma.
- `axios`: Biblioteca para realizar requisições HTTP, utilizada para a comunicação com o servidor.
- `react-navigation`: Biblioteca para implementar a navegação entre as telas do aplicativo.


## Instalação

Siga as etapas abaixo para instalar e executar o aplicativo Porta Medicamentos Digital/Inteligente em seu ambiente de desenvolvimento:

### 1. Instalar Node.js

Certifique-se de ter o Node.js instalado em sua máquina. O aplicativo foi desenvolvido utilizando o ambiente Node.js, que é necessário para executar o projeto. Caso precise instalá-lo, você pode baixar a versão mais recente em: [Node.js](https://nodejs.org/).

### 2. Clonar o Repositório

Clone este repositório em sua máquina local usando o Git:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git

git clone https://github.com/seu-usuario/nome-do-repositorio.git

# instalar dependencias

cd nome-do-repositorio
npm install
npx expo start

# para ver em web

npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
npx expo start --web

