# **Documento de Requisitos de Software (DRS)**

## Sistema de Gerenciamento de Barbearias

**Versão do Documento:** 1.0.2  
**Data de Criação:** 10/04/2025  
**Última Atualização:** 31/05/2025  
**Autor:** Karla Cristina Ferreira, Igor Xisto Ferreira, Victor Miranda, Marcelo Prata Patrício, Mylena Antonelli Ferraz Netto  
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

## **9. UML**

### Casos de Uso - Sistema de Gerenciamento para Barbearia

Documentação completa dos casos de uso do sistema de gerenciamento para barbearia.

#### Índice de Casos de Uso

1. [Validar ID e Senha](CasosDeUso.md#validar-id-e-senha)
2. [Cadastrar Funcionário](CasosDeUso.md#cadastrar-funcionário)
3. [Cadastrar Serviço](CasosDeUso.md#cadastrar-serviço)
4. [Registrar Serviço Realizado](CasosDeUso.md#registrar-serviço-realizado)
5. [Visualizar Relatório Financeiro](CasosDeUso.md#visualizar-relatório-financeiro)
6. [Consultar Ganhos Pessoais](CasosDeUso.md#consultar-ganhos-pessoais)
7. [Desativar Funcionário](CasosDeUso.md#desativar-funcionário)
8. [Ativar Funcionário](CasosDeUso.md#ativar-funcionário)
9. [Desativar Serviço](CasosDeUso.md#desativar-serviço)
10. [Ativar Serviço](CasosDeUso.md#ativar-serviço)
11. [Recuperar Senha](CasosDeUso.md#recuperar-senha)
12. [Gerenciar Banco de Dados](CasosDeUso.md#gerenciar-banco-de-dados)

---

#### Validar ID e Senha
**Interação**: 3, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Sistema  
**Objetivo no contexto**: Validar as informações do usuário ao tentar logar no sistema.  

**Pré-condições**:
- O usuário deve estar devidamente cadastrado.
- O usuário deve ter acesso à interface de login.

**Quem aciona**: O funcionário/Administrador decide logar no sistema informando seus dados.  

**Cenário**:
1. O funcionário acessa a tela de login.
2. O funcionário insere e-mail e senha.
3. O sistema busca os dados informados no banco de dados.
4. O sistema confere se os dados são válidos.
5. O sistema informa se o login foi bem-sucedido ou não.

**Exceções**:
- As credenciais estão incorretas.

**Prioridade**: Prioridade alta, a ser implementada juntamente com outras funcionalidades básicas.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Servidor de autenticação.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O sistema permitirá login com redes sociais ou contas do Google e Apple no futuro?

---

#### Cadastrar Funcionário
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Cadastrar um novo barbeiro/funcionário no sistema.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja adicionar um funcionário.  

**Cenário**:
1. O administrador acessa a opção "Funcionários".
2. Clica em "Novo Funcionário".
3. Preenche os dados: nome, e-mail, senha (CPF ou senha aleatória enviada por e-mail).
4. Clica em "Cadastrar".
5. O sistema salva os dados e envia um e-mail.

**Exceções**:
- E-mail já cadastrado ou inválido.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O funcionário poderá alterar sua senha?

---

#### Cadastrar Serviço
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Cadastrar serviços como cortes, barba, etc., com seus respectivos valores.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja adicionar um novo serviço.  

**Cenário**:
1. Acessa o menu "Serviços".
2. Clica em "Novo Serviço".
3. Preenche nome, valor, descrição, comissão.
4. Clica em "Salvar".
5. O sistema registra o novo serviço.

**Exceções**:
- Serviço com nome duplicado.
- Campos obrigatórios vazios.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência baixa.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Serviços poderão ser desativados sem exclusão?

---

#### Registrar Serviço Realizado
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Barbeiro/Funcionário  
**Objetivo no contexto**: Registrar um serviço prestado (ex: corte de cabelo) para cálculo de comissão.  

**Pré-condições**:
- O funcionário deve estar cadastrado.
- O serviço deve estar cadastrado previamente.
- O funcionário deve estar logado.

**Quem aciona**: O funcionário acessa o sistema após realizar um serviço.  

**Cenário**:
1. O funcionário faz login no sistema.
2. Seleciona a opção "Registrar Serviço".
3. O sistema exibe a lista de serviços cadastrados.
4. O funcionário seleciona o serviço realizado.
5. (Opcional) Preenche observações ou forma de pagamento.
6. Clica em "Registrar".
7. O sistema salva os dados e atualiza o histórico.

**Exceções**:
- Serviço inexistente ou não cadastrado.
- Funcionário não logado.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados remoto.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será permitido editar registros após o envio?

---

#### Visualizar Relatório Financeiro
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Gerar relatórios financeiros por período, por funcionário ou por serviço.  

**Pré-condições**:
- O administrador deve estar logado.
- Devem existir registros no período selecionado.

**Quem aciona**: O administrador deseja analisar o desempenho financeiro.  

**Cenário**:
1. Acessa o menu "Relatórios".
2. Seleciona tipo e intervalo de tempo.
3. Clica em "Gerar Relatório".
4. Visualiza os dados e pode exportar.

**Exceções**:
- Nenhum dado encontrado.
- Falha ao gerar ou exportar relatório.

**Prioridade**: Prioridade moderada, a ser implementada no segundo incremento.  
**Quando disponível**: Segundo incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Os relatórios poderão ser enviados por e-mail?

---

### Consultar Ganhos Pessoais
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Funcionário  
**Objetivo no contexto**: Consultar o total acumulado em comissões e serviços prestados.  

**Pré-condições**:
- O funcionário deve estar logado.
- Devem existir registros de serviços.

**Quem aciona**: O funcionário deseja saber quanto ganhou.  

**Cenário**:
1. Acessa a área "Meus Ganhos".
2. Escolhe o período desejado.
3. O sistema exibe serviços, total e comissão.

**Exceções**:
- Nenhum serviço registrado.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência alta.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- O sistema poderá gerar comprovantes de ganhos?

---

#### Desativar Funcionário
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Impedir temporariamente o acesso de um funcionário ao sistema.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja desativar um funcionário.  

**Cenário**:
1. Acessa a lista de funcionários.
2. Seleciona o funcionário.
3. Clica em "Desativar".
4. O sistema atualiza o status do funcionário para inativo.

**Exceções**:
- Funcionário já desativado.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Baixa  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Funcionários desativados podem ser reativados com os mesmos dados?

---

#### Ativar Funcionário
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Reativar um funcionário previamente desativado.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja ativar um funcionário.  

**Cenário**:
1. Acessa a lista de funcionários inativos.
2. Seleciona o funcionário.
3. Clica em "Ativar".
4. O sistema atualiza o status do funcionário para ativo.

**Exceções**:
- Funcionário já ativo.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Baixa  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Há um limite de reativações por funcionário?

---

#### Desativar Serviço
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Retirar um serviço do catálogo sem excluí-lo.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja desativar um serviço.  

**Cenário**:
1. Acessa a lista de serviços.
2. Seleciona o serviço.
3. Clica em "Desativar".
4. O sistema atualiza o status do serviço para inativo.

**Exceções**:
- Serviço já desativado.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Moderada  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Nenhuma no momento

---

#### Ativar Serviço
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Administrador  
**Objetivo no contexto**: Reativar um serviço previamente desativado.  

**Pré-condições**:
- O administrador deve estar logado.

**Quem aciona**: O administrador deseja ativar um serviço.  

**Cenário**:
1. Acessa a lista de serviços inativos.
2. Seleciona o serviço.
3. Clica em "Ativar".
4. O sistema atualiza o status do serviço para ativo mantendo o histórico.

**Exceções**:
- Serviço já ativo.

**Prioridade**: Alta  
**Quando disponível**: Primeiro incremento  
**Frequência de uso**: Moderada  
**Canal com o autor**: Interface do aplicativo mobile  
**Atores secundários**: Banco de dados  
**Canais com os atores secundários**: Via internet  

**Perguntas abertas**:
- Nenhuma no momento

---

#### Recuperar Senha
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício   
**Ator primário**: Funcionário/Administrador  
**Objetivo no contexto**: Permitir que o funcionário recupere o acesso ao sistema em caso de esquecimento da senha.  

**Pré-condições**:
- O e-mail do funcionário deve estar cadastrado no sistema.
- Deve haver acesso à internet.

**Quem aciona**: O funcionário esqueceu a senha e deseja redefini-la.  

**Cenário**:
1. O funcionário acessa a tela de login.
2. Clica em "Esqueci minha senha".
3. Informa o e-mail cadastrado.
4. O sistema envia um link para redefinição de senha.
5. O funcionário acessa o link e cria uma nova senha.
6. O sistema confirma a alteração.

**Exceções**:
- E-mail não cadastrado.
- Falha no envio do e-mail.

**Prioridade**: Prioridade alta, a ser implementada no primeiro incremento.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência moderada.  
**Canal com o autor**: Pela interface do aplicativo mobile.  
**Atores secundários**: Sistema de envio de e-mails.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será exigido algum tipo de verificação adicional para redefinir a senha?

---

#### Gerenciar Banco de Dados
**Interação**: 1, última modificação: 31 de maio feito por Marcelo Prata Patrício  
**Ator primário**: Sistema  
**Objetivo no contexto**: Estabelecer e manter a conexão com o banco de dados para operações como login, cadastro, e consulta de dados.  

**Pré-condições**:
- O sistema deve estar em funcionamento.
- A conexão com a internet deve estar ativa.

**Quem aciona**: Qualquer funcionalidade do sistema que necessite acessar ou alterar dados.  

**Cenário**:
1. O sistema realiza uma operação (ex: login, cadastro, consulta).
2. Verifica se há conexão com o banco de dados.
3. Envia ou solicita os dados necessários.
4. Recebe os dados ou confirma o salvamento.

**Exceções**:
- Falha na conexão com o banco de dados.
- Tempo de resposta excedido.
- Dados inconsistentes ou inválidos.

**Prioridade**: Prioridade alta, necessário para todas as demais funcionalidades.  
**Quando disponível**: Primeiro incremento.  
**Frequência de uso**: Frequência constante.  
**Canal com o autor**: Através da infraestrutura do sistema.  
**Atores secundários**: Banco de dados.  
**Canais com os atores secundários**: Via internet.  

**Perguntas abertas**:
- Será utilizado banco de dados em nuvem ou local?

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
| 1.0.0  | 10/04/2025 | Mylena e Victor    | Criação do documento inicial                  |
| 1.0.1  | 14/04/2025 | Marcelo Prata Patrício | Expansão do escopo, requisitos e seções extras |
| 1.0.2 | 31/05/2025 | Marcelo Prata Patrício    | Acréscimo dos casos de uso   |


