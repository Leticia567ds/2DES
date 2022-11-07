# GESTÃO DE ESTACIONAMENTO FASTPARKING
_ _ _

    O projeto foi criado com o objetivo de cumprimento avaliatório da disciplina de Algoritmos do curso técnico de Desenvolvimento em Sistemas, realizado na escola técnica profissionalizante SENAI Prof. "Vicente Amato".

## Propostas e Requisitos
_ _ _

    O objetivo principal proposto pela empresa foi criar um sistema de controle de veículos, onde o operador do projeto possa ter uma maior facilidade em administrar seu estacionamento, podendo assim controlar o valor por hora no estacionamento, analisar a hora de entrada e de saída do veículo através do software do projeto e cobrar o cliente sem precisar calcular de forma manual, mas com alguns requisitos que precisariam estar no registro, assim concluidos. Porém não deveria usar nenhum tipo de framework para a montagem do sistema que facilitaria assim sua criação.

- Para a forma de planejamento do projeto, foi seguido as etapas que a empresa propôs, como: 

    * Ter a validação dos campos em que o operador digitar (Ex: para a placa, aceitar apenas letras e numeros);

    * Ter um Relatório Diário dos veículos que saíram, com o nome do cliente e a placa do carro, e o preço pago pelo cliente; 

    * Adicionar o veículo pelo nome do cliente e a placa de veículo, e assim adicionar em um registro onde possa ser administrado pelo operador. No registro haverá a data de entrada e ações que o operador possa manipular;

    * Gerar comprovante de dados do veiculo e do cliente no momento de sua entrada;

    * Se houver erros de digitação, apenas o nome e a placa do veículo pode ser alterada;

    * Armazenar preços da primeira hora e das demais horas;

    * Com os preços armazenados, o operador poderá cobrar o valor por hora que o cliente precisa pagar na retirada de seu veículo;
  
## Tecnologias utilizadas
_ _ _

### HTML / CSS 

- A estrutura básica do sistema foi montada com a linguagem de marcação HTML e com linguagem de estilização CSS, sem a utilização de frameworks.

### JavaScript

- A linguagem foi utilizada baseando-se na metodologia de programação funcional, utilizando arrow functions e métodos auxiliares como map(), filter(), reduce() e pipe().

### Web Storage

- O uso da Web Storage servirá para adicionar os dados do cliente no próprio navegador, assim não interferindo no acesso entre Cliente e Banco, e sem precisar do uso da internet.
