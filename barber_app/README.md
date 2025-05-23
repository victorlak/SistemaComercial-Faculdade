# Barber App

Este é o aplicativo mobile para gerenciamento de barbearias.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (`npm install -g expo-cli`)

## Instalação

1. Acesse a pasta do projeto:

   ```sh
   cd barber_app
   ```

2. Instale as dependências:

   ```sh
   npm install
   # ou
   yarn install
   ```

## Rodando o App

1. Inicie o servidor de desenvolvimento Expo:

   ```sh
   npm start
   # ou
   yarn start
   ```

2. Use o aplicativo [Expo Go](https://expo.dev/client) no seu celular para escanear o QR Code exibido no terminal ou no navegador.

3. Para rodar no emulador Android:

   ```sh
   npm run android
   ```

   Para rodar no emulador iOS (apenas Mac):

   ```sh
   npm run ios
   ```

   Para rodar no navegador:

   ```sh
   npm run web
   ```

## Configuração

- Crie um arquivo `.env` na raiz do projeto para variáveis de ambiente, se necessário.
- Configure as credenciais do Firebase em `src/services/firebaseConfig.js`.

## Observações

- Certifique-se de que o backend (Firebase) está corretamente configurado.
- Para dúvidas sobre arquitetura e requisitos, consulte a pasta [../docs](../docs).

---