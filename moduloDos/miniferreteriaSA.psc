Algoritmo miniferreteriaSA
	// recibir los datos
	Escribir 'Ingrese el valor del art�culo Martillo'
	Leer valorMartillo
	Escribir 'Ingrese la cantidad de articulos vendidos'
	Leer cantMartillos
	Escribir 'Ingrese el valor del art�culo Puntilla'
	Leer valorPuntillas
	Escribir 'Ingrese la cantidad de articulos vendidos'
	Leer cantPuntillas
	// logica matem�tica
	cantidadVentas <- cantMartillos+cantPuntillas
	totalVentas <- (valorMartillo*cantMartillos)+(valorPuntillas*cantPuntillas)
	comision <- 200000
	// l�gica para la informacion de los ingresos
	Si totalVentas<200000 Entonces
		Escribir 'No cumpliste con las ventas m�nimas del mes'
	SiNo
		// dar comision o no
		Si totalVentas>1000000 Entonces
			Escribir 'Total en ventas: ', totalVentas
			totalFinal <- totalVentas+comision
			Escribir 'Comisi�n: ', comision
			Escribir 'Total: ', totalFinal
		SiNo
			Escribir 'Total en ventas: ', totalVentas
			Escribir 'Comisi�n: 0'
			Escribir 'Total: ', totalVentas
		FinSi
	FinSi
FinAlgoritmo
