import { Given, When, Then } from '@cucumber/cucumber';
//llamamos a las clases de las páginas
import { DatosPage } from '../../pages/DatosPage';
import { ClicksPage } from '../../pages/ClicksPage';
import { SelectPage } from '../../pages/SelectPage';
import { ButtonPage } from '../../pages/ButtonPage';

//declaramos las variables para las páginas
let datosPage: DatosPage;
let clicksPage: ClicksPage;
let selectPage: SelectPage;
let buttonPage: ButtonPage;
Given('ingreso a la página de Novus Technology', async function () {
    // Inicializamos la página con el contexto de Playwright
  datosPage = new DatosPage(this.page);
  clicksPage = new ClicksPage(this.page);
  selectPage = new SelectPage(this.page);
  buttonPage = new ButtonPage(this.page);
    //llamamos al primer metodo de DatosPage para navegar a la página
    await datosPage.NavegaWeb();
    });

When('mis datos personales con el nombre {string} y el apellido {string}', async function (nombre, apellido) {
    //llamamos al segundo metodo de DatosPage para ingresar el nombre
    await datosPage.DatosNombre(nombre);
    //llamamos al tercer metodo de DatosPage para ingresar el apellido
    await datosPage.DatosApellido(apellido);
    });

When('ingreso mi correo electrónico {string} y mi número de teléfono {string}', async function (correo, telefono) {
    //llamamos al segundo metodo de DatosPage para ingresar el correo electrónico
    await datosPage.DatosCorreo(correo);
    //llamamos al tercer metodo de DatosPage para ingresar el número de teléfono
    await datosPage.DatosTelefono(telefono);
    //colocar pausa para observar los datos ingresados antes de cerrar el navegador
    
    });

When ('selecciono el pasatiempo', async function () {
    //llamamos al primer metodo de ClicksPage para seleccionar el pasatiempo
    await clicksPage.Pasatiempo();
    });

When ('selecciono el género', async function () {
    //llamamos al segundo metodo de ClicksPage para seleccionar el género
    await clicksPage.Genero();
    });

When ('selecciono el lugar el departamento {string} y la ciudad {string}', async function (departamento, ciudad) {
    //llamamos al primer metodo de SelectPage para seleccionar el departamento
    await selectPage.Departamento(departamento);
    //llamamos al segundo metodo de SelectPage para seleccionar la ciudad
    await selectPage.Ciudad(ciudad);
    });
When ('selecciono un comando', async function () {
    //llamamos al tercer metodo de SelectPage para seleccionar un comando
    await selectPage.Comando();
    });

When ('cargo un documento', async function () {
    //llamamos al tercer metodo de ClicksPage para cargar un documento
    await clicksPage.CargarDocumento();

    });

Then('visualizo un mensaje con el nombre y el apellido', async function () {
    // Aquí puedes agregar la lógica para verificar el mensaje con el nombre y el apellido
    //click boton enviar formulario
    await buttonPage.EnviarFormulario();
    });