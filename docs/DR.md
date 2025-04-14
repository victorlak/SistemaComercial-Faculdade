# **Documento de Requisitos de Software (DRS)**

## Sistema de Gerenciamento de Barbearias

**Versão do Documento:** 1.0.0  
**Data de Criação:** 10/04/2025  
**Última Atualização:** 14/04/2025  
**Autor:** [Seu Nome]  
**Projeto:** Aplicativo Mobile para Gerenciamento Financeiro e de Comissões de Barbearias

---

## **Sumário**

1. [Visão Geral](#1-visão-geral)  
2. [Escopo do Sistema](#2-escopo-do-sistema)  
3. [Objetivos do Sistema](#3-objetivos-do-sistema)  
4. [Usuários e Stakeholders](#4-usuários-e-stakeholders)  
5. [Requisitos Funcionais](#5-requisitos-funcionais)  
6. [Requisitos Não Funcionais](#6-requisitos-não-funcionais)  
7. [Regras de Negócio](#7-regras-de-negócio)  
8. [Requisitos Suplementares](#8-requisitos-suplementares)  
9. [Protótipos e Telas (Opcional)](#9-protótipos-e-telas-opcional)  
10. [Glossário](#10-glossário)  
11. [Controle de Versão](#11-controle-de-versão)

---

## **1. Visão Geral**

Este documento especifica os requisitos funcionais e não funcionais para o desenvolvimento de um sistema mobile que auxilia barbearias na gestão de agendamentos, serviços, comissões e receitas. A aplicação permitirá que tanto administradores quanto funcionários possam utilizar o sistema de maneira segura, eficaz e prática.

---

## **2. Escopo do Sistema**

O sistema será um aplicativo mobile compatível com Android e iOS, com possibilidade de acesso também via plataforma web (PWA). Permitirá o gerenciamento completo da operação diária de uma barbearia, incluindo:

- Cadastro e controle de funcionários e serviços;
- Registro de atendimentos e cálculo de comissões;
- Controle de receitas brutas e líquidas;
- Visão administrativa detalhada por período.

O sistema contará com funcionalidades offline e sincronização automática ao reconectar com a internet.

---

## **3. Objetivos do Sistema**

- Automatizar o processo de agendamento e controle financeiro;
- Garantir o cálculo correto das comissões;
- Proporcionar transparência aos funcionários e gestores;
- Otimizar o controle operacional da barbearia.

---

## **4. Usuários e Stakeholders**

| Tipo de Usuário  | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| Administrador    | Proprietário da barbearia. Responsável por cadastros, finanças e relatórios. |
| Barbeiro/Funcionário | Responsável por registrar atendimentos e acompanhar suas comissões.        |
| Cliente final (futuro) | Poderá agendar horários com base na disponibilidade dos barbeiros.        |

---

## **5. Requisitos Funcionais**

### 5.1 Acesso ao Sistema

- RF01: O sistema deve permitir login com e-mail e senha.
- RF02: O sistema deve diferenciar perfis de acesso (administrador e funcionário).
- RF03: O sistema deve manter sessões ativas com segurança por tempo determinado.

### 5.2 Cadastro e Gerenciamento

- RF04: O administrador deve poder cadastrar, editar e excluir serviços.
- RF05: O administrador deve poder cadastrar, editar e excluir funcionários.
- RF06: O administrador deve poder buscar funcionários por nome e ID.
- RF07: O sistema deve permitir a definição de percentual de comissão por serviço.

### 5.3 Funcionalidades dos Funcionários

- RF08: O funcionário deve poder registrar os serviços realizados.
- RF09: O funcionário deve poder visualizar sua agenda de atendimentos futuros.
- RF10: O funcionário deve visualizar seu faturamento bruto e comissão acumulada no período.

### 5.4 Funcionalidades Administrativas

- RF11: O administrador deve poder visualizar a receita bruta por funcionário e total.
- RF12: O administrador deve poder visualizar as comissões pagas/parciais por funcionário.
- RF13: O administrador deve poder visualizar a receita líquida da barbearia por período.
- RF14: O sistema deve fornecer relatórios financeiros mensais, semanais e por período customizado.

### 5.5 Agendamento (Futuro)

- RF15: O sistema permitirá ao cliente visualizar horários disponíveis e agendar cortes.
- RF16: O barbeiro receberá notificações de novos agendamentos.

---

## **6. Requisitos Não Funcionais**

### 6.1 Usabilidade

- RNF01: A interface deve ser intuitiva e acessível para usuários leigos.
- RNF02: Deve suportar layout responsivo e leitura em alto contraste.

### 6.2 Desempenho

- RNF03: O tempo de carregamento das telas principais deve ser inferior a 2 segundos.
- RNF04: A sincronização de dados offline deve ocorrer automaticamente em segundo plano.

### 6.3 Segurança

- RNF05: Toda comunicação deve ser criptografada (HTTPS).
- RNF06: O sistema deve armazenar senhas de forma criptografada.
- RNF07: Deve haver controle de permissões para cada tipo de usuário.

---

## **7. Regras de Negócio**

- RB01: Cada serviço possui um valor fixo e um percentual de comissão.
- RB02: A receita líquida é calculada como: receita bruta - (total de comissões + taxas fixas operacionais).
- RB03: Um funcionário só pode registrar atendimentos no próprio nome.
- RB04: Um serviço não pode ser excluído se estiver vinculado a atendimentos passados.

---

## **8. Requisitos Suplementares**

- Integração futura com meios de pagamento (ex: Pix, cartão de crédito);
- Notificações push para lembrar o barbeiro sobre seus agendamentos;
- Exportação de relatórios em PDF e Excel;
- Backup automático em nuvem (Google Firebase ou similar).

---

## **9. Digramas UML**

> (Inserir imagens.)

---

## **10. Glossário**

| Termo         | Definição                                                                 |
|---------------|--------------------------------------------------------------------------|
| Receita bruta | Total obtido com todos os atendimentos realizados.                      |
| Receita líquida | Receita bruta menos comissões e custos operacionais.                   |
| Comissão      | Percentual pago ao funcionário por cada serviço realizado.              |
| CRUD          | Operações de Criação, Leitura, Atualização e Exclusão de dados.         |
| Backend       | Parte do sistema que trata regras de negócio e acesso a banco de dados. |
| Frontend      | Interface visual do sistema que interage com o usuário.                 |

---

## **11. Controle de Versão**

| Versão | Data       | Autor         | Descrição das alterações                      |
|--------|------------|---------------|-----------------------------------------------|
| 1.0.0  | 10/04/2025 | [Seu Nome]    | Criação do documento inicial                  |
| 1.0.1  | 14/04/2025 | [ChatGPT + Você] | Expansão do escopo, requisitos e seções extras |
