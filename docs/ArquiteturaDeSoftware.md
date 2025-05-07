# Arquitetura de Software - Sistema de Gerenciamento para Barbearia

## Sumário
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Tipo de Arquitetura](#tipo-de-arquitetura)
- [Componentes do Software](#componentes-do-software)
- [Componentes de Hardware](#componentes-de-hardware)
- [Detalhes dos Componentes Principais](#detalhes-dos-componentes-principais)
- [Comunicação entre Componentes](#comunicação-entre-componentes)
- [Diagrama Simplificado](#diagrama-simplificado)
- [Considerações Finais](#considerações-finais)

## Arquitetura do Sistema
Adotamos uma arquitetura em camadas com padrão cliente-servidor e MVC (Model-View-Controller), ideal para nosso aplicativo mobile desenvolvido em React Native com Firebase.

## Tipo de Arquitetura
| Característica          | Descrição                                                                 |
|-------------------------|---------------------------------------------------------------------------|
| Arquitetura em Camadas  | Organização lógica com separação clara de responsabilidades              |
| Cliente-Servidor        | Aplicativo mobile (cliente) se comunicando com backend na nuvem (servidor)|
| MVC no Frontend         | Facilita desenvolvimento com React Native, separando lógica da interface  |

## Componentes do Software

### Frontend (React Native)
| Componente               | Tecnologias/Bibliotecas                                                   |
|--------------------------|---------------------------------------------------------------------------|
| Telas de autenticação    | React Navigation, Firebase Auth                                          |
| Módulo administrativo    | Redux/Context API, React Native Paper                                    |
| Módulo do funcionário    | Axios, React Native Charts                                               |
| Componentes compartilhados | Formulários, listas, UI components                                     |

### Backend (Firebase)
| Serviço                  | Função                                                                   |
|--------------------------|---------------------------------------------------------------------------|
| Firebase Authentication  | Gerenciamento de usuários e acesso                                       |
| Firestore Database       | Banco de dados principal                                                 |
| Firebase Functions       | Lógica de negócio complexa                                               |
| Firebase Storage         | Armazenamento de arquivos                                                |
| Firebase Cloud Messaging | Notificações push                                                        |

## Componentes de Hardware

### Desenvolvimento
- Computadores com capacidade para rodar emuladores mobile
- Dispositivos físicos para testes (Android e iOS)
- Acesso aos serviços do Firebase na nuvem

### Implantação
- Servidores do Firebase (gerenciados pelo Google)
- Dispositivos móveis dos usuários finais (celulares e tablets)

## Detalhes dos Componentes Principais

| Componente               | Tecnologias              | Casos de Uso Atendidos                     |
|--------------------------|--------------------------|--------------------------------------------|
| Autenticação             | Firebase Auth            | Login, logout, recuperação de senha        |
| Gerenciamento de Funcionários | Firestore, React Native | CRUD de funcionários, ativação/desativação |
| Gerenciamento de Serviços | Firestore, React Native  | CRUD de serviços e comissões               |
| Registro de Serviços     | Firestore, Firebase Functions | Registro de serviços, cálculo comissões |
| Relatórios               | React Native Charts      | Geração de relatórios financeiros         |

## Comunicação entre Componentes
- Frontend → Backend: Chamadas HTTP/HTTPS via SDK do Firebase
- Sincronização offline: Recursos nativos do Firestore
- Notificações: Firebase Cloud Messaging
- Comunicação segura e criptografada

## Diagrama Simplificado
```mermaid
graph TD
    A[Dispositivo Mobile] -->|HTTPS| B[Firebase Auth]
    A -->|HTTPS| C[Firestore Database]
    A --> D[Componentes UI]
    C --> E[Firebase Functions]
    E --> F[Processamento Complexo]
    A --> G[Firebase Cloud Messaging]
