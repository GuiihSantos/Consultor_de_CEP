# **Consultor de CEP**

Este projeto é um **consultor de CEP** , desenvolvido com **HTML, CSS e JavaScript puro**. A ferramenta permite que você insira um CEP para buscar e exibir automaticamente as informações de endereço correspondentes, como rua, bairro, cidade e estado. A aplicação faz uma requisição a uma API externa (`ViaCEP`) para buscar os dados.

🔗 Acesse o projeto online:  
<<<<<<< HEAD
https://guiihsantos.github.io/Consultor_de_CEP/
=======
 https://guiihsantos.github.io/Consultor_de_CEP/
>>>>>>> 0247a93f7df400264655d604280ee1ce9e88b230

## Funcionalidades

- **Busca de Endereço**: Insira um CEP e obtenha o endereço completo de forma rápida.
- **Formatação Automática**: O campo de entrada formata o CEP no padrão `00000-000` enquanto você digita.
- **Validação de Entrada**: A aplicação valida o formato e a quantidade de dígitos do CEP, exibindo mensagens de erro claras.
- **Acesso à API**: Utiliza a API `ViaCEP` para buscar dados de endereço de forma assíncrona (`async/await`).
- **Botões de Copiar**: Para cada informação do endereço (CEP, endereço, cidade, etc.), um botão permite copiar o conteúdo para a área de transferência com um único clique.
- **Feedback Visual**: Mensagens de erro ou sucesso são exibidas para guiar a experiência do usuário.
- **Busca por Teclado**: A busca pode ser acionada ao pressionar a tecla `Enter`.

## Conceitos de JavaScript Aplicados

Este projeto foi uma excelente oportunidade para aplicar e reforçar os seguintes conceitos de JavaScript:

- **Manipulação do DOM**: Seleção e manipulação de elementos HTML para exibir dados e mensagens.
- **API `Fetch` e `async/await`**: Realização de requisições assíncronas para a API externa, buscando dados do CEP de forma eficiente.
- **Tratamento de Eventos**: Captura de eventos de clique (`click`), teclado (`keyup`) e entrada de texto (`input`) para gerenciar as interações do usuário.
- **Validação de Dados**: Uso de lógica condicional (`if/else`) e expressões regulares (`regex`) para garantir que o CEP inserido seja válido.
- **Manipulação de `clipboard`**: Implementação da funcionalidade de copiar texto para a área de transferência do sistema.
- **Modularização de Código**: O código é organizado em funções (`geraCep`, `preencheInfo`, `copiaInfo`) para facilitar a leitura e a manutenção.

## Tecnologias usadas:

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

## Imagens do projeto:

  <div  align="center"> 
    <img src="https://github.com/user-attachments/assets/f0a9b9fc-ea94-46fc-96d5-8994e9d52417" width="100%"; margin="0 15px;">
    <img src="https://github.com/user-attachments/assets/24990fec-e907-4acb-8a03-2185703da40c" width="100%"; margin="0 10px;">
    <img src="https://github.com/user-attachments/assets/a0a3565b-7cd4-4809-a625-b069521bb3c0" width="30%"; margin="0 10px;">
  </div>

## Licença

Este projeto está licenciado sob a **Licença MIT**. Você pode usar, copiar, modificar e distribuir este código para fins educacionais e não comerciais, desde que a atribuição original seja mantida.
