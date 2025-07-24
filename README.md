# SistemaComercial-Faculdade
**Descrição**  

O aplicativo mobile desenvolvido tem como objetivo principal otimizar a gestão financeira e o controle de comissões em barbearias. A solução foi idealizada para oferecer ao administrador uma visão clara e detalhada das finanças do estabelecimento, permitindo o acompanhamento preciso de receitas, despesas e repasses de comissões aos colaboradores.

## Funcionalidades Principais

- Controle de receitas e despesas
- Gerenciamento de comissões dos funcionários
- Dashboard financeiro personalizado
- Relatórios detalhados
- Interface responsiva para mobile

## Pré-requisitos

```bash
# Node.js e npm
npm install -g react-native-cli

# JDK para Android
sudo apt-get install openjdk-11-jdk

# Ferramentas do Android Studio
# Configurar variáveis de ambiente conforme documentação oficial do React Native
```

## Instalação

Clone o repositório
```bash
git clone https://github.com/seu-usuario/SistemaComercial-Faculdade.git
```

Instale as dependências
```bash
cd barber_app
npm install
```

Configure as variáveis de ambiente
```bash
# Crie um arquivo .env na raiz do projeto
REACT_APP_API_URL=https://sua-api-aqui.com/api
REACT_APP_DEBUG=true
```

## Execução

### Android

```bash
npx react-native run-android
```

### iOS

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

## Configurações Adicionais

Android Studio- Configure o Android SDK Build-Tools
- Instale o Android Emulator
- Configure o Google Play Services

Xcode (iOS)- Configure sua conta de desenvolvedor Apple
- Instale os certificados necessários

## Solução de Problemas Comuns

1. Erro de dependência:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```


2. Metro Bundler não iniciar:
```bash
npx react-native start
```


3. Erro de permissão Android:
```bash
sudo chmod 755 android/gradlew
```



## Tecnologias Utilizadas

- React Native
- JavaScript
- Node.js
- npm
- React Navigation
- Native Base

## Contribuição

Faça um fork deste repositório
Crie uma branch para sua feature
Envie um pull request com suas alterações

## Licença

Este projeto utiliza a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Créditos

- Desenvolvedores: [Karla Ferreira](https://github.com/kfrural), [Victor Miranda](https://github.com/victorlak), [Igor Xisto](https://github.com/IgorXF), [Myllena Antoneli](https://github.com/mylenaantonelli), [Marcelo Patricio](https://github.com/MarceloP25)
- Orientador: [Gustavo Teixeira](https://github.com/gustavomite)

## Contato

Para dúvidas ou sugestões, entre em contato através do email institucional da faculdade.
