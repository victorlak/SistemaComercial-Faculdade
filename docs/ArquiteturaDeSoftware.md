
# Sistema de Gerenciamento para Barbearia

## Sumário

1. [Arquitetura do Sistema](#arquitetura-do-sistema)  
2. [Tipo de Arquitetura](#tipo-de-arquitetura)  
3. [Componentes do Software](#componentes-do-software)  
   - [Frontend (React Native)](#frontend-react-native)  
   - [Backend (Firebase)](#backend-firebase)  
4. [Componentes de Hardware](#componentes-de-hardware)  
5. [Detalhes dos Componentes Principais](#detalhes-dos-componentes-principais)  
   - [Componente de Autenticação](#1-componente-de-autenticação)  
   - [Gerenciamento de Funcionários](#2-gerenciamento-de-funcionários)  
   - [Gerenciamento de Serviços](#3-gerenciamento-de-serviços)  
   - [Registro de Serviços](#4-registro-de-serviços)  
   - [Relatórios](#5-relatórios)  
6. [Comunicação entre Componentes](#comunicação-entre-componentes)  
7. [Diagrama Simplificado](#diagrama-simplificado)  
8. [Considerações Finais](#considerações-finais)  

---

## Arquitetura do Sistema

O sistema adota uma **arquitetura em camadas**, baseada nos padrões **cliente-servidor** e **MVC (Model-View-Controller)**. Essa estrutura é ideal para o desenvolvimento de um aplicativo mobile utilizando **React Native** e **Firebase**, permitindo clara separação de responsabilidades e organização do código.

---

## Tipo de Arquitetura

- **Arquitetura em camadas**: separa as funcionalidades de forma lógica e organizada.  
- **Cliente-servidor**: o app mobile atua como cliente, comunicando-se com o backend hospedado na nuvem.  
- **MVC no frontend**: separa a interface (View), lógica (Controller) e dados (Model), facilitando o desenvolvimento com React Native.

---

## Componentes do Software

### Frontend (React Native)

O aplicativo mobile contará com os seguintes módulos e recursos:

- **Telas de autenticação**: login e recuperação de senha.  
- **Módulo administrativo**: cadastros de funcionários e serviços, além de geração de relatórios.  
- **Módulo do funcionário**: registro de atendimentos e consulta de ganhos.  
- **Componentes reutilizáveis**: como formulários e listas.

**Bibliotecas utilizadas:**

- `React Navigation`: navegação entre telas.  
- `Redux` ou `Context API`: gerenciamento de estado.  
- `Axios`: chamadas à API.  
- `React Native Paper`: componentes de UI.  
- `React Native Charts`: visualização de dados em gráficos.

### Backend (Firebase)

Serviços e funcionalidades da nuvem que serão utilizados:

- `Firebase Authentication`: autenticação de usuários.  
- `Firestore Database`: banco de dados principal.  
- `Firebase Functions`: lógica de negócio mais complexa.  
- `Firebase Storage`: armazenamento de arquivos (opcional).  
- `Firebase Hosting`: suporte a versão web no futuro.  
- `Firebase Cloud Messaging`: envio de notificações.  
- Bibliotecas para geração de **PDFs e planilhas**.  
- Bibliotecas para **validação de formulários**.

---

## Componentes de Hardware

### Desenvolvimento

- Computadores capazes de rodar emuladores mobile.
- Dispositivos físicos Android e iOS para testes.
- Acesso à internet para conexão com o Firebase.

### Implantação

- Servidores do Firebase (gerenciados pelo Google).  
- Dispositivos móveis dos usuários finais (celulares e tablets).

---

## Detalhes dos Componentes Principais

### 1. Componente de Autenticação

- Login, logout e recuperação de senha.
- Utiliza o **Firebase Authentication**.
- Atende aos casos de uso de validação de acesso ao sistema.

### 2. Gerenciamento de Funcionários

- CRUD (criar, ler, atualizar e desativar funcionários).
- Desenvolvido com **Firestore Database** e **React Native**.
- Atende aos casos de cadastro e ativação/desativação.

### 3. Gerenciamento de Serviços

- CRUD completo para serviços e comissões.
- Também baseado em **Firestore** e **React Native**.
- Atende aos casos relacionados à gestão de serviços da barbearia.

### 4. Registro de Serviços

- Permite registrar os serviços realizados e calcular comissões.
- Utiliza **Firestore** para dados e **Firebase Functions** para cálculos.
- É o recurso principal do módulo do funcionário.

### 5. Relatórios

- Visões financeiras e de desempenho.
- Firestore para dados, **React Native Charts** para gráficos.
- Serve ao administrador e aos funcionários.

---

## Comunicação entre Componentes

- A comunicação entre o app e o backend é feita via **HTTP/HTTPS**, usando o SDK do Firebase.
- O **Firestore** oferece suporte **offline-first**, permitindo o uso sem internet com sincronização posterior.
- As **notificações push** são tratadas com Firebase Cloud Messaging.

---

## Diagrama Simplificado

Fluxo de dados e componentes principais:

1. O dispositivo mobile envia requisições HTTPS para os serviços do Firebase.
2. O app interage com componentes de UI no React Native.
3. Firebase Functions trata lógicas complexas (como cálculo de comissão).
4. Toda a comunicação é **segura e criptografada**.

---

## Considerações Finais

A arquitetura proposta é:

- **Offline-first**, permitindo uso mesmo sem internet.
- **Segura**, com autenticação, regras de acesso e criptografia.
- **Escalável**, preparada para crescer conforme a barbearia evoluir.
- **Modular e extensível**, facilitando a adição de novas funcionalidades.

A união entre **React Native** e **Firebase** oferece uma base sólida, segura e eficiente para o desenvolvimento de um sistema completo de gerenciamento para barbearias.
