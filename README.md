# Formatador-SQL---BASA
### O PROBLEMA ##
No departamento de automação bancária do Banco da Amazônia é muito comum a ocorrência de solicitações de resgate de transações financeiras, geralmente
em virtude de decisões judiciais. Isto ocorre quando há necessidade de analisar dados - depositante, conta de crédito, conta de débito e etc, para fins de consulta e/ou investigação. Estas solicitações são formalizadas em planilhas, que podem chegar a ter mais de 100 registros, todos em datas diferentes.
O administrador, então, decide como fará a filtragem em sua consulta SQL de extração: ele poderá definir um range entre a primeira e a última data ou simplesmente digitar todas as datas uma a uma. O problema da primeira opção de filtragem é sua ineficiência: vários registros desnecessários serão trazidos, prejudicando a legibilidade da planilha que será entregue como resposta a solicitação; já na segunda opção, o problema é que pode ser demasiado trabalhoso digitar as datas uma a uma, pois não são raros os casos de planilhas que solicitam dezenas de transações, quando não mais. 
### ESTA FERRAMENTA ###
A solução proposta visa automatizar o processo de formatação das datas para consultas SQL. A proposta é que o usuário copie todas as datas da planilha, cole na caixa formatadora, clique em converter e receba, automaticamente, as datas encaixadas no formato de consulta SQL. Ainda há a opção de formatação de valores.
### RESULTADOS ###
A ferramenta, apesar de pouco complexa, se mostrou bastante eficaz na agilização da extração das consultas, bem como aumentou o nível de satisfação dos remetentes do chamado, que agora não precisam mais dispender longos minutos em uma atividade mecânica e massante. 
### FERRAMENTAS UTILIZADAS ###
As funcionalidades do projeto foram inteiramente desenvolvidas em JavaScript. O front end foi desenvolvido em Bootstrap 5. Dada a natureza pouco complexa da ferramenta, não foi necessária utilização de banco de dados e/ou lado servidor.
