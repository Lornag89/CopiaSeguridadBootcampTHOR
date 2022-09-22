SHOW DATABASES
USE inventario_database

CREATE TABLE ventas_coches (
  id_cliente INT NOT NULL PRIMARY KEY,
  fecha_de_compra DATE,
  matricula_vehiculo VARCHAR(20),
  pagado BOOLEAN,
  recogido BOOLEAN
);

INSERT INTO ventas_coches
  (id_cliente,fecha_de_compra,matricula_vehiculo,pagado,recogido)
VALUES
  (1,'2022-02-01','00000000G',TRUE, FALSE),
  (2,'2022-02-01','00000000H',TRUE, FALSE ),
  (3,'2022-02-01','00000000I',FALSE, TRUE),
  (4,'2022-02-01','00000002H',FALSE, FALSE);

DESCRIBE ventas_coches;

#Tipo de datos BOOLEAN -> WHERE TRUE/FALSE

SELECT * FROM ventas_coches WHERE pagado=true;
SELECT * FROM ventas_coches WHERE pagado=0;

SELECT * FROM ventas_coches WHERE pagado=1 AND recogido=TRUE;

SELECT * FROM ventas_coches WHERE pagado=false;
SELECT * FROM ventas_coches WHERE pagado=0;


-----------------------------------------
# INNER JOIN

/*
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
*/

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra
FROM inventario_tabla
INNER JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo;

# LEFT JOIN

/*
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
*/

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra
FROM inventario_tabla
LEFT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo;

SELECT COUNT(*) FROM inventario_tabla;

# RIGHT JOIN

/*
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
*/

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra, ventas_coches.matricula_vehiculo
FROM inventario_tabla
RIGHT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo;


# VISTAS	

/*
CREATE [OR REPLACE] VIEW nombre_vista [column_list]
AS consulta_SELECT
*/

CREATE VIEW vista_count_coches
AS
SELECT marca, count(id_inventario)
FROM inventario_tabla
GROUP BY marca;

SELECT * FROM vista_count_coches;


----------------

CREATE TABLE inventario_tabla_2 (
  id_inventario INT NOT NULL PRIMARY KEY,
  matricula VARCHAR(20),
  color VARCHAR(30),
  marca VARCHAR(30),
  modelo VARCHAR(30),
  numero_puertas INT,
  motor INT,
  km_venta INT,
  lugar_fabricacion VARCHAR(255),
  fecha_fabricacion DATE,
  precio_venta INT,
  precio_compra INT,
  margen FLOAT(2)
);

INSERT INTO inventario_tabla_2
  (id_inventario,matricula,color,marca,modelo,numero_puertas,motor,km_venta,lugar_fabricacion,fecha_fabricacion,precio_venta,precio_compra,margen)
VALUES
  (1,'00000003A','Amarillo','Seat','Ibiza',5,80,0,'España','2021-12-20',10000,7500,0.25),
  (2,'00000003B','Verde','Ferrari','',2,500,0,'Italia','2021-12-30',100000,80000,0.20),
  (3,'00000003C','Azul','Citroen','C5',5,110,0,'EEUU','2021-11-17',20000,10000,0.50);

SELECT * FROM inventario_tabla_2;


SELECT * FROM inventario_tabla
UNION
SELECT * FROM inventario_tabla_2;

INSERT INTO inventario_tabla (matricula,color,marca,modelo,numero_puertas,motor,km_venta,lugar_fabricacion,fecha_fabricacion,precio_venta,precio_compra,margen)
(SELECT matricula,color,marca,modelo,numero_puertas,motor,km_venta,lugar_fabricacion,fecha_fabricacion,precio_venta,precio_compra,margen FROM inventario_tabla_2);

SELECT * FROM inventario_tabla;

SELECT COUNT(*) FROM inventario_tabla;


-------------------------------

# OPERACIONES CON PREGUNTAS

--1.CAPITAL INVERTIDO EN STOCK

SELECT SUM(precio_compra) AS total_capital_invertido FROM inventario_tabla;

--2.NÚMERO VEHICULOS POR COLOR

SELECT color, COUNT(id_inventario) AS cantidad FROM inventario_tabla GROUP BY color;


--3.VEHÍCULO MAS ANTIGUO

SELECT matricula,fecha_fabricacion FROM inventario_tabla ORDER BY fecha_fabricacion LIMIT 5;

----.V1 ----
SELECT id_inventario, matricula, fecha_fabricacion FROM inventario_tabla WHERE fecha_fabricacion = (SELECT MIN(fecha_fabricacion) FROM inventario_tabla);

-----.V2------
SELECT id_inventario, matricula, MIN(fecha_fabricacion) AS fecha_agrupacion
FROM inventario_tabla
GROUP BY id_inventario, matricula
HAVING fecha_agrupacion = (SELECT MIN(fecha_fabricacion) FROM inventario_tabla);

--4.VEHÍCULO MAS CARO
SELECT id_inventario, marca, precio_venta FROM inventario_tabla ORDER BY precio_venta DESC LIMIT 1;

--5.VEHÍCULO CON MAS MARGEN

SELECT *, MAX(margen) AS mayor_margen FROM inventario_tabla;

--6.VEHICULOS SIN MODELO REGISTRADO

SELECT * FROM inventario_tabla WHERE modelo = '';

--7. VALOR MEDIO VENTA

SELECT AVG(precio_venta) as valor_medio_venta FROM inventario_tabla;

--8. LISTA VEHICULO AMARILLO FABRICANTE ALEMANIA

SELECT id_inventario, matricula, color FROM inventario_tabla WHERE color= 'Amarillo' AND lugar_fabricacion = 'Alemania';


--9. COCHES SIN COMPRADOR

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca,
inventario_tabla.modelo, ventas_coches.matricula_vehiculo, ventas_coches.fecha_de_compra
FROM inventario_tabla
LEFT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo
WHERE ventas_coches.matricula_vehiculo IS NULL;

--10. COCHES NO INVENTARIADOS

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra, ventas_coches.matricula_vehiculo
FROM inventario_tabla
RIGHT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo
WHERE inventario_tabla.matricula IS NULL;


--11. TODOS LOS COCHES, INVENTARIADOS Y COMPRADOS

SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra
FROM inventario_tabla
LEFT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo;
UNION
SELECT inventario_tabla.id_inventario, inventario_tabla.matricula, inventario_tabla.marca, inventario_tabla.modelo, ventas_coches.fecha_de_compra, ventas_coches.matricula_vehiculo
FROM inventario_tabla
RIGHT JOIN ventas_coches
ON inventario_tabla.matricula = ventas_coches.matricula_vehiculo
WHERE inventario_tabla.matricula IS NOT NULL;



