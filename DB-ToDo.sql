DROP TABLE TodoItems; 

USE ToDoDB;
GO

CREATE TABLE TodoItems (
    Id INT PRIMARY KEY IDENTITY,
    Title NVARCHAR(100) NOT NULL,
    IsComplete BIT NOT NULL,
);



INSERT INTO TodoItems (Title,IsComplete)
VALUES ('Comprar leche', 0);

INSERT INTO TodoItems (Title, IsComplete)
VALUES ('Preparar informe trimestral', 0);

INSERT INTO TodoItems (Title, IsComplete )
VALUES ('Ir al gimnasio',  0);

INSERT INTO TodoItems (Title, IsComplete)
VALUES ('Revisar la presentación para la reunión', 0);

INSERT INTO TodoItems (Title, IsComplete,)
VALUES ('Organizar el almuerzo del domingo', 0);
