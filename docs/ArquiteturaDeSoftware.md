# 💈 Sistema de Gerenciamento para Barbearia

Sistema mobile desenvolvido com **React Native** e **Firebase**, pensado para modernizar e facilitar o gerenciamento de barbearias, desde o controle de funcionários e serviços até a geração de relatórios financeiros.

---

## 📚 Sumário

- [📐 Arquitetura do Sistema](#-arquitetura-do-sistema)
- [🧱 Tipo de Arquitetura](#-tipo-de-arquitetura)
- [🧩 Componentes do Software](#-componentes-do-software)
- [🖥️ Componentes de Hardware](#️-componentes-de-hardware)
- [🔍 Detalhes dos Componentes Principais](#-detalhes-dos-componentes-principais)
- [🔗 Comunicação entre Componentes](#-comunicação-entre-componentes)
- [📊 Diagrama Simplificado](#-diagrama-simplificado)
- [✅ Considerações Finais](#-considerações-finais)

---

## 📐 Arquitetura do Sistema

Adotamos uma arquitetura em **camadas** com padrão **cliente-servidor** e **MVC (Model-View-Controller)**, adequada para nosso app mobile feito com React Native e backend gerenciado com Firebase.

---

## 🧱 Tipo de Arquitetura

- **Camadas**: separa responsabilidades de forma lógica e organizada.
- **Cliente-Servidor**: app mobile (cliente) + backend Firebase (servidor).
- **MVC**: facilita separação de lógica e interface no React Native.

---

## 🧩 Componentes do Software

### Frontend (React Native)

- Telas de autenticação (login, recuperação de senha)
- Módulo administrativo (cadastros, relatórios)
- Módulo do funcionário (registro de serviços, ganhos)
- Componentes reutilizáveis (formulários, listas)

**Bibliotecas utilizadas:**

- `React Navigation`
- `Redux` ou `Context API`
- `Axios`
- `React Native Paper`
- `React Native Charts`

### Backend (Firebase)

- `Firebase Authentication`
- `Cloud Firestore`
- `Firebase Functions`
- `Firebase Storage`
- `Firebase Hosting` (para futura versão web)
- `Firebase Cloud Messaging`
- Geração de PDFs e planilhas
- Validação de formulários

---

## 🖥️ Componentes de Hardware

### Para desenvolvimento:

- Computadores com emuladores Android/iOS
- Dispositivos físicos (Android e iOS)

### Para implantação:

- Servidores do Firebase (gerenciados pelo Google)
- Dispositivos móveis dos usuários

---

## 🔍 Detalhes dos Componentes Principais

### 1. Autenticação

- Login, logout, recuperação de senha
- Utiliza Firebase Authentication

### 2. Gerenciamento de Funcionários

- CRUD de funcionários
- Firestore + React Native

### 3. Gerenciamento de Serviços

- Cadastro, edição e remoção de serviços
- Firestore + React Native

### 4. Registro de Serviços

- Registro e cálculo de comissões
- Firestore + Firebase Functions

### 5. Relatórios

- Dados financeiros e de desempenho
- Firestore + React Native Charts

---

## 🔗 Comunicação entre Componentes

- Comunicação via **HTTP/HTTPS** com o **SDK do Firebase**
- Recursos de **sincronização offline** do Firestore
- Notificações via **Firebase Cloud Messaging**

---

## 📊 Diagrama Simplificado

```mermaid
flowchart TD
    A[App React Native] -->|HTTPS| B[Firebase Authentication]
    A -->|HTTPS| C[Cloud Firestore]
    A --> D[Firebase Functions]
    C --> E[Relatórios (Charts)]
    D --> F[Comissões e lógica avançada]
    A --> G[Firebase Cloud Messaging]
```

---

## ✅ Considerações Finais

Esta arquitetura foi pensada para:

- ✅ Funcionar offline (offline-first)
- 🔐 Garantir segurança com regras do Firebase
- 📈 Escalar conforme o crescimento da barbearia
- ♻️ Facilitar adição de novas funcionalidades

A união de **React Native** com **Firebase** proporciona uma solução robusta, segura e com excelente desempenho para atender as necessidades modernas de uma barbearia.
