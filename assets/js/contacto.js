const frmEmail = document.getElementById('frmEmail');
frmEmail.addEventListener('submit', sendEmail);
  
const serviceId = 'service_mrq188e';
const templateId = 'template_l5z7n2r';
const apikey = '08XLFJ1Bamr8Efm4_';

    function sendEmail(event){
    	event.preventDefault();
          
          emailjs.init(serviceId);
            
          emailjs.sendForm(serviceId,templateId,frmEmail,apikey)
          .then((result) => Swal.fire('Formulario enviado correctamente'))
            .catch((error) => {
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo enviar el mensaje. Por favor intente de nuevo',
            footer: '<a href="">Why do I have this issue?</a>'
          });
    });
    
    }