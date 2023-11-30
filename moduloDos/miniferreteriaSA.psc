Algoritmo miniferreteriaSA
	// recibir los datos
	Escribir 'Ingrese el valor del artículo Martillo'
	Leer valorMartillo
	Escribir 'Ingrese la cantidad de articulos vendidos'
	Leer cantMartillos
	Escribir 'Ingrese el valor del artículo Puntilla'
	Leer valorPuntillas
	Escribir 'Ingrese la cantidad de articulos vendidos'
	Leer cantPuntillas
	// logica matemática
	cantidadVentas <- cantMartillos+cantPuntillas
	totalVentas <- (valorMartillo*cantMartillos)+(valorPuntillas*cantPuntillas)
	comision <- 200000
	// lógica para la informacion de los ingresos
	Si totalVentas<200000 Entonces
		Escribir 'No cumpliste con las ventas mínimas del mes'
	SiNo
		// dar comision o no
		Si totalVentas>1000000 Entonces
			Escribir 'Total en ventas: ', totalVentas
			totalFinal <- totalVentas+comision
			Escribir 'Comisión: ', comision
			Escribir 'Total: ', totalFinal
		SiNo
			Escribir 'Total en ventas: ', totalVentas
			Escribir 'Comisión: 0'
			Escribir 'Total: ', totalVentas
		FinSi
	FinSi
FinAlgoritmo
