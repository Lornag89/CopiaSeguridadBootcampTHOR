
SHOW DATABASES;
USE inventario_database;
SHOW TABLES;
CREATE TABLE inventario_tabla (
  id_inventario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  matricula VARCHAR(10) NOT NULL,
  color VARCHAR(15),
  marca VARCHAR(20),
  modelo VARCHAR(20),
  numero_puertas INT,
  motor INT,
  km_venta INT,
  lugar_fabricacion VARCHAR(20),
  fecha_fabricacion DATE,
  precio_venta INT,
  precio_compra INT,
  margen FLOAT(2)
);

INSERT INTO inventario_tabla (matricula,color,marca,modelo,numero_puertas,motor,km_venta,lugar_fabricacion,fecha_fabricacion,precio_venta,precio_compra,margen)
VALUES
  ('00000000A','Amarillo','Seat','Ateca',5,190,0,'España','2020-10-20',10000,500,0.95),
  ('00000000B','Verde','Audi','',5,150,0,'Alemania','2020-09-20',20000,15000,0.25),
  ('00000000C','Azul','Tesla','Model 3',3,135,100,'EEUU','2020-10-20',40000,30000,0.25),
  ('00000000D','Blanco','Tesla','Model 3',3,124,6000,'EEUU','2019-10-20',2000,600,0.70),
  ('00000000E','Blanco','Seat','Ibiza',5,80,0,'España','2020-10-20',80000,50000,0.38),
  ('00000000F','Amarillo','Seat','Ibiza',5,90,0,'España','2020-10-20',10000,500,0.95),
  ('00000000G','Verde','Audi','Q3',5,160,0,'Alemania','2020-09-20',20000,15000,0.25),
  ('00000000H','Azul','Tesla','Model 3',3,125,100,'EEUU','2020-10-20',40000,30000,0.25),
  ('00000000I','Blanco','Tesla','Model 3',3,120,6000,'EEUU','2019-10-20',2000,600,0.70),
  ('00000000J','Blanco','Seat','Ibiza',5,90,0,'España','2020-10-20',80000,50000,0.38),
  ('00000000K','Amarillo','Seat','Ibiza',5,90,0,'España','2020-10-20',10000,500,0.95),
  ('00000000L','Verde','Audi','Q5',5,150,0,'Alemania','2020-09-20',20000,15000,0.25),
  ('00000000M','Azul','Tesla','Model 3',5,120,100,'EEUU','2021-10-20',40000,30000,0.25),
  ('00000000O','Blanco','Tesla','Model 3',5,150,6000,'EEUU','2021-10-20',2000,600,0.70),
  ('00000000P','Blanco','Seat','Cordova',5,100,0,'España','2020-10-20',80000,50000,0.38),
  ('00000000K','Verde','Audi','TT',3,230,0,'Alemania','2020-10-10',30000,20000,0.33),
  ('00000000R','Rosa','Audi','TT',3,230,100,'Alemania','2020-10-20',25000,18000,0.28),
  ('00000000S','Azul Celeste','Renault','Megane',5,100,0,'Francia','2020-10-20',24000,10000,0.58),
  ('00000000T','Negro','Renault','Megane',5,100,0,'Francia','2020-10-20',24000,10000,0.58),
  ('00000001A','Ocre','volkswagen','Polo',5,150,0,'Alemania','2020-10-20',23000,9000,0.61),
  ('00000001B','Amarillo','volkswagen','Polo',5,100,3000,'Alemania','2020-10-20',20000,5000,0.75),
  ('00000001C','Blanco','volkswagen','',5,120,NULL,'','2020-10-20',NULL,NULL,NULL),
  ('00000001D','Blanco','volkswagen','Golf',5,120,NULL,'Aelmania','2020-10-20',NULL,NULL,NULL),
  ('00000001E','Blanco','Seat','Ibiza',5,90,NULL,'Spain','2020-10-20',NULL,NULL,NULL),
  ('00000001F','Negro','Porche','Carrera',2,400,NULL,'Italy','2020-10-20',NULL,NULL,NULL);
  
  SELECT * FROM inventario_tabla;
  
  **1.OPERADORES
  
  **1.1 OPERADORES LOGICOS
  SELECT * FROM inventario_tabla WHERE marca = 'Seat' AND modelo= 'Ateca';
  SELECT * FROM inventario_tabla WHERE marca = 'Renault' OR modelo= 'Ateca';
  SELECT * FROM inventario_tabla WHERE NOT marca = 'Renault';
  
  **1.2 OPERADORES DE COMPARACION
  SELECT * FROM inventario_tabla WHERE precio_venta > 10000;
  SELECT * FROM inventario_tabla WHERE lugar_fabricacion <> 'España';
  SELECT * FROM inventario_tabla WHERE precio_venta > 10000 AND precio_venta <30000;
  
  **1.3 OTROS OPERADORES
  SELECT * FROM inventario_tabla WHERE precio_venta BETWEEN 1000 AND 10000;
  SELECT * FROM inventario_tabla WHERE marca IN ('Seat', 'Tesla', 'Renault');
  SELECT * FROM inventario_tabla WHERE modelo = '';
  SELECT * FROM inventario_tabla WHERE margen IS NULL;
  SELECT * FROM inventario_tabla WHERE margen IS NULL AND lugar_fabricacion = '';
  
  **2 ALIAS
  SELECT id_inventario AS id; matricula AS mat FROM inventario_tabla;
  
  
  **3 COLUMNAS CALCULADAS
  SELECT id_inventario, matricula, precio_venta, precio_compra, ROUND ((precio_venta - precio_compra) /(precio_venta),2) AS margen_calculado FROM inventario_tabla;
  
  **4 LIMIT
  SELECT * FROM inventario_tabla LIMIT 2;
  
  **5 ORDER BY
  SELECT * FROM inventario_tabla ORDER BY precio_venta;
  SELECT * FROM inventario_tabla ORDER BY precio_venta DESC;
  
  **6 DISTINCT
  SELECT DISTINCT color FROM inventario_tabla;

**7 GROUP BY

SELECT marca, modelo, COUNT(id_inventario) AS numero_coches FROM inventario_tabla;
SELECT marca, SUM(precio_venta) AS total_precio_venta FROM inventario_tabla GROUP BY marca;
SELECT marca, AVG(precio_venta) AS total_precio_venta FROM inventario_tabla GROUP BY marca;
SELECT marca, MAX(precio_venta) AS total_precio_venta_max FROM inventario_tabla GROUP BY marca;
SELECT marca, MAX(precio_venta) AS total_precio_venta_max, MIN(precio_venta) AS total_precio_venta_min FROM inventario_tabla GROUP BY marca;

**8 HAVING

SELECT marca, MAX(precio_venta) AS precio_venta_max, MIN(precio_venta) AS precio_venta_min 
FROM inventario_tabla
GROUP BY marca
HAVING precio_venta_max >= 40000 
ORDER BY precio_venta_max DESC;






  
 

  
