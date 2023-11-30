//forms
const formPersons = document.getElementById('fomrPerson');
const formAnimals = document.getElementById('formAnimal');
const formVetery = document.getElementById('formVeterinary');

//inputs

//formPersons
const nameP = document.getElementById('namePerson');
const lastNameP = document.getElementById('lastNamePerson');
const ageP = document.getElementById('agePerson');
const identificationP = document.getElementById('identificationPerson');

//formAnimals
const nameA = document.getElementById('nameAnimal');
const sexA = document.getElementById('sexAnimal');
const raceA = document.getElementById('raceAnimal');

//formVetery
const nameV = document.getElementById('nameVetery');
const addressV = document.getElementById('addressVetery');
const telV = document.getElementById('telVetery');


//Class create person
class persons{
  constructor(nameP, lastNameP, ageP, identificationP){
      this.name = nameP;
      this.lastName = lastNameP;
      this.age = ageP;
      this.identification = identificationP;
  }

  mostrarNombreUser(){
    return 'El usuario presente es ' + this.name 
  }

  mostrarDatos(){
    return 'Datos \n' + 'Nombre: ' + this.name + '\n Apellido: ' + this.lastName + '\n Edad: ' + this.age + '\n Cédula: ' + this.identification;
    }
    
    guardarEnBaseDeDatos() {
    return 'Guardando usuario ' + this.name + ' en la base de datos';
  }
}

//Class create animal
class animals{
	  constructor(nameA, sexA, raceA){
      this.name = nameA;
      this.sex = sexA;
      this.race = raceA;
  }
  
    mostrarNombreUser(){
    return 'El animal presente es ' + this.name 
  }
  
    mostrarDatos() {
    let datos = 'Datos \n' + 'Nombre: ' + this.name + '\n Sexo: ' + this.sex + '\n Raza: ' + this.race;
    return datos;
  }
  
    guardarEnBaseDeDatos() {
    return 'Guardando mascota ' + this.name + ' en la base de datos';
  }
}

//Class create veterinary
class veterinary{
	  constructor(nameV, addressV, telV){
      this.name = nameV;
      this.dir = addressV;
      this.tel = telV;
  }
  
    mostrarNombreUser(){
    return 'El nombre de la veterinaria presente es ' + this.name 
  }

    mostrarDatos() {
    let datos = 'Datos \n' + 'Nombre: ' + this.name + '\n Dirección: ' + this.dir + '\nTeléfono: ' + this.tel;
    return datos;
  }
  
    guardarEnBaseDeDatos() {
    return 'Guardando veterinaria ' + this.name + ' en la base de datos';
  }
}
let idCounter = 1;

//Save forms
function onSubmitForm(event){
	event.preventDefault();
  
	if (event.target === formPersons) {
		const name = nameP.value;
		const lastName = lastNameP.value;
		const age = ageP.value;
		const identification = identificationP.value;

    // Crear una nueva fila en la tabla con los valores guardados
    const tablaPersonas = document.querySelector('.div2 table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${idCounter}</td>
        <td>${name}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${identification}</td>
    `;

    idCounter++;
    tablaPersonas.appendChild(newRow);
    formPersons.reset();

		const newPerson = new persons(name, lastName, age, identification);

		newPerson.guardarEnBaseDeDatos();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: newPerson.guardarEnBaseDeDatos(),
			showConfirmButton: false,
			timer: 1500
		});
		console.log(newPerson.mostrarDatos());

	} else if (event.target === formAnimals) {
		const name = nameA.value;
		const sex = sexA.value;
		const race = raceA.value;

        const tableAnimals = document.querySelector('.div3 table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${idCounter}</td>
        <td>${name}</td>
        <td>${sex}</td>
        <td>${race}</td>
    `;

    idCounter++;
    tableAnimals.appendChild(newRow);
    formAnimals.reset();

		const newAnimal = new animals(name, sex, race);
		newAnimal.guardarEnBaseDeDatos();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: newAnimal.guardarEnBaseDeDatos(),
			showConfirmButton: false,
			timer: 1500
		});
		console.log(newAnimal.mostrarDatos());

	} else if (event.target === formVetery) {
		const name = nameV.value;
		const address = addressV.value;
		const tel = telV.value;

        const tableVeterinary = document.querySelector('.div4 table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${idCounter}</td>
        <td>${name}</td>
        <td>${address}</td>
        <td>${tel}</td>
    `;

    idCounter++;
    tableVeterinary.appendChild(newRow);
    formVetery.reset();

		const newVeterinary = new veterinary(name, address, tel);
		newVeterinary.guardarEnBaseDeDatos();
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: newVeterinary.guardarEnBaseDeDatos(),
			showConfirmButton: false,
			timer: 1500
		});
		console.log(newVeterinary.mostrarDatos());
	}
}

formPersons.addEventListener('submit', onSubmitForm);
formAnimals.addEventListener('submit', onSubmitForm);
formVetery.addEventListener('submit', onSubmitForm);