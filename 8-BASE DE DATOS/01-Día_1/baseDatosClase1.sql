SHOW DATABASES;
USE inventario_database;
SHOW TABLES;
CREATE TABLE pedidos_pollo_pepe(
num_pedido VARCHAR(10) NOT NULL,
fecha_pedido DATE NOT NULL,
hora_pedido TIME, 
hora_llegada DATETIME,
proveedor VARCHAR(30),
orden VARCHAR(15),
direccion VARCHAR (30),
id_cliente INT(5),
tipo_pago VARCHAR(10),
precio FLOAT(4),
PRIMARY KEY (num_pedido)
);
SHOW TABLES;
SELECT * FROM pedidos_pollo_pepe;
DESCRIBE pedidos_pollo_pepe;
INSERT INTO pedidos_pollo_pepe(num_pedido, fecha_pedido,  hora_pedido, hora_llegada, proveedor, orden, direccion, id_cliente, tipo_pago, precio)
VALUES ('XH32NJ', '2022-07-29', '14:18:22', '2022-07-29 16:25:20', 'GLOVO', 'Menu 1', 'Les Corts Catalanes 630', 12456, 'Tarjeta', 27.58);
SELECT * FROM pedidos_pollo_pepe;


