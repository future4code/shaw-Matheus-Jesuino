Exercicio 1

*a) Explique o que é uma chave estrangeira*

A FOREIGN KEY é um campo em uma tabela, que se refere a PRIMARY KEYem outra tabela. Podendo assim relacionar as tabelas.


*b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes*

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating VALUES
(10253, "Otimo Filme","10", '001'),
(66283, "Uma verdadeira obra de arte","8", '002'),
(25613, "Um marco no cinema mundial","9", '003'),
(36541, "Isso podesse chamar de cinema","7", '004');

SELECT * FROM Rating;


*c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado daquery.*

Error Code: 1062. Duplicate entry '10253' for key 'PRIMARY', ele diz a id priary está em duplicidade.

d) *Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.*

ALTER TABLE Movie
DROP COLUMN Rating;


*e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.*

Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança.

Exercicio 2

*a) Explique, com as suas palavras, essa tabela*

Esssa tabela ira unir as tabela de atores, com as de filmes.

*b) Crie, ao menos, 6 relações nessa tabela* 

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"002",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);

*c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query*

Dá erro e diz que atores ou filmes não existem.

*d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query*

Você está usando o modo de atualização segura e tentou atualizar uma tabela sem um WHERE que usa uma coluna KEY. Não é possível usar o acesso de intervalo no índice 'PRIMARY' devido à conversão de tipo ou agrupamento no campo 'id' Para desabilitar o modo de segurança.

Exercicio 3

*a) Explique, com suas palavras, a query acima. O que é o operador `ON`?*

O operador on é o operador que faz a concatenação entre o que queremos unir.

*b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.*

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
