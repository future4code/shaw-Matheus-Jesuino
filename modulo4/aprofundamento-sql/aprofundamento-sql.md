Exercicio 1
a. ALTER TABLE Actor DROP COLUMN salary;
Esse comando deletera a coluna de salary.

b.ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Esse comando está trocando o nome da coluna de gender, para sex, e falando que é uma string de no maximo 6 caracteres.

c.ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Esse comando está mantem o nome da coluna de gender, e fala que é uma string de no maximo 255 caracteres.

d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercicio 2 
a. Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor
SET name = "Marlon Brando"
WHERE id = "003"

UPDATE Actor
SET birth_date = "1924-04-03"
WHERE id = "003"

b) *Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.*

SELECT UPPER (name)
FROM Actor 
WHERE id = "005"

SELECT LOWER (name)
FROM Actor 
WHERE id = "005"

c) *Escreva uma query que atualize todas as informações do ator com o id `005`*

UPDATE Actor
SET name = "Robert Del Niro",
 birth_date = "1996-03-20",
 gender = "male",
salary = "80000"
WHERE id = "005"


d) *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.*

UPDATE Actor
SET movies = "The godfather"
WHERE id = "005"

Error Code: 1054. Unknown column 'movies' in 'field list'

Como a coluna de movies não existe,ela não poder ser alterada.

Exercicio 3

a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`*

DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) *Escreva uma query que apague todos os atores (do gênero `male`) com o salário maior do que R$1.000.000,00*

DELETE FROM Actor
WHERE gender = "male" AND
salary > 1000000


eXERCICIO 4 

a) *Escreva uma query que pegue o maior salário de todos os atores e atrizes*

SELECT MAX(salary) FROM Actor

b) *Escreva uma query que pegue o menor salário das atrizes*

SELECT MIN(salary) FROM Actor
WHERE GENDER = "female"

c) *Escreva uma query que pegue a quantidade de atrizes*

SELECT COUNT(*) FROM Actor
WHERE gender = "female"

d) *Escreva uma query que pegue a soma de todos os salários*

SELECT SUM(salary) FROM Actor


Exercicio 5 

a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*

Ela Retorna a quantidade de atores e atrizes que tem a propriedade gender.

b) *Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética*

SELECT id, name FROM Actor
ORDER BY name DESC


c) *Faça uma query que retorne todos os atores ordenados pelo salário*


SELECT * FROM Actor
ORDER BY salary 


d) *Faça uma query que retorne os atores com os três maiores salarios*

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3

e) *Faça uma query que retorne a média de salário por gênero*

SELECT AVG (salary),
gender FROM Actor
GROUP BY gender;

Exercicio 6

a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.* 

ALTER TABLE Movie ADD playing_limit_date DATE;

b) *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*

ALTER TABLE Movie CHANGE rating rating FLOAT;

c) *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*

UPDATE Movie
SET playing_limit_date = "2020-12-31"
WHERE id = "001"

d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*

DELETE FROM Movie WHERE id = "001"