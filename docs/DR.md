# Análise de Requisitos  
**Versão:** 1.0.0  
**Data:** 10/04/2025  
**Projeto:** Aplicativo mobile para o gerenciamento de comissões de barbearias  
**Objetivo:** Otimizar a gestão financeira e o controle de comissões em barbearias.

---

## 1. Visão Geral  
Este documento define os requisitos funcionais e não funcionais para o desenvolvimento de um aplicativo mobile para gestão de finanças e comissões de barbearias. O aplicativo visa auxiliar os proprietários na gestão financeira e no controle do comércio.

## 2. Escopo  
O aplicativo será desenvolvido para dispositivos móveis com sistemas operacionais Android e iOS. Ele será uma plataforma web com interface móvel, permitindo acesso remoto e sincronização offline/online.

## 3. Requisitos Funcionais

### 3.1 Acesso ao sistema
- O sistema deve permitir o login com e-mail e senha  
- O sistema deve diferenciar o login do administrador e dos funcionários  

### 3.2 Cadastro
- O sistema deve permitir o CRUD de serviços e funcionários pelo administrador  
- O sistema deve permitir ao administrador buscar os funcionários cadastrados pelo nome e ID  

### 3.3 Funcionalidades do Atendente (barbeiro)
- O funcionário deve poder marcar os serviços realizados  
- O funcionário deve poder visualizar os serviços previamente marcados  
- O funcionário deve poder visualizar a receita bruta dos serviços e suas comissões até o momento  

### 3.4 Controle Financeiro (Funcionalidades do administrador)
- O administrador deve poder visualizar as comissões totais e parciais dos barbeiros  
- O administrador deve poder visualizar a receita bruta individual e total do sistema  
- O administrador deve poder visualizar a receita líquida da barbearia  

## 4. Requisitos Não Funcionais

### 4.1 Usabilidade
- Interface intuitiva e fácil de usar  
- Design responsivo para diferentes tamanhos de tela  
- Suporte a acessibilidade (leitura em alto contraste, zoom)  

### 4.2 Desempenho
- Tempo de carregamento rápido das páginas principais  
- Resposta rápida às interações do usuário  

### 4.3 Segurança
- Autenticação segura (login e senha)  
- Proteção contra acesso não autorizado  
