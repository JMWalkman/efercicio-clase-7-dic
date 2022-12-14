window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    
    let formulario = document.querySelector('#formulario'); // form section
    var errorsList = document.querySelector('.errores');
    let form = document.querySelector('.form'); // form object

    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let errors = [];
    let errorMessages = {
        title: {msg: 'La película debe tener un título'}
    };

    function printErrorList(errors) {
        errorsList.classList.add('alert-warning');
        errorsList.innerHTML = ``;
        for (let i=0; i < errors.length; i++) {
            errorsList.innerHTML += `<li> ${errors[i]} </li>`;
        }
    }
    
//------VALIDACIONES DEL FORMULARIO------------ //

    form.title.focus();

    form.addEventListener('submit', function(event) {
        errors = [];

        if(form.title.value == "") {
            event.preventDefault();
            errors.push('La película debe tener un título');
            form.title.classList.add('is-invalid');
        } 
        if(form.rating.value == "") {
            event.preventDefault();
            errors.push('La película debe tener un rating');
            form.rating.classList.add('is-invalid');
        }
        if(form.rating.value < 0 || form.rating.value > 10) {
            event.preventDefault();
            errors.push('La calificación debe ser un número entre 0 y 10');
            form.rating.classList.add('is-invalid');
        }
        if(form.awards.value == "") {
            event.preventDefault();
            errors.push('Escribe la cantidad de premios que haya ganado la película');
            form.awards.classList.add('is-invalid');
        }
        if(form.awards.value < 0 || form.awards.value > 10) {
            event.preventDefault();
            errors.push('La película debe tener entre 0 y 10 premios');
            form.awards.classList.add('is-invalid');
        }
        if(form.release_date.value == "") {
            event.preventDefault();
            errors.push('La película debe tener una fecha de lanzamiento');
            form.release_date.classList.add('is-invalid');
        }
        if(form.length.value == "") {
            event.preventDefault();
            errors.push('La película debe tener una duración');
            form.length.classList.add('is-invalid');
        }
        if(form.length.value < 60 || form.length.value > 360) {
            event.preventDefault();
            errors.push('La película debe tener una duración entre 60 y 360 minutos');
            form.length.classList.add('is-invalid');
        }
        if(form.genre_id.value == "") {
            event.preventDefault();
            errors.push('La película debe tener un género');
            form.genre_id.classList.add('is-invalid');
        }

        if (errors.length == 0) {
            alert("La película se guardó satisfactoriamente")
        }
        printErrorList(errors);

    });


    errors = [];

    form.title.addEventListener('blur', function() {
        if(form.title.value == "") {
            errors.push('La película debe tener un título');
            form.title.classList.add('is-invalid');
        } else {
            form.title.classList.add('is-valid');
            form.title.classList.remove('is-invalid');
        }
        printErrorList(errors);
    });
    form.rating.addEventListener('blur', function() {
        if(form.rating.value == "") {
            errors.push('La película debe tener un rating');
            form.rating.classList.add('is-invalid');
        } 
        else if(form.rating.value < 0 || form.rating.value > 10) {
            errors.push('La calificación debe ser un número entre 0 y 10');
            form.rating.classList.add('is-invalid');
        } 
        else {
            form.rating.classList.add('is-valid');
            form.rating.classList.remove('is-invalid');
        }
        printErrorList(errors);
    });
    form.awards.addEventListener('blur', function() {
        if(form.awards.value == "") {
            errors.push('Escribe la cantidad de premios que haya ganado la película');
            form.awards.classList.add('is-invalid');
        }
        else if(form.awards.value < 0 || form.awards.value > 10) {
            errors.push('La película debe tener entre 0 y 10 premios');
            form.awards.classList.add('is-invalid');
        }
        else {
            form.awards.classList.add('is-valid');
            form.awards.classList.remove('is-invalid');
        }
        printErrorList(errors);
    });
    form.release_date.addEventListener('blur', function() {
        if(form.release_date.value == "") {
            errors.push('La película debe tener una fecha de lanzamiento');
            form.release_date.classList.add('is-invalid');
        }
        else {
            form.release_date.classList.add('is-valid');
            form.release_date.classList.remove('is-invalid');
        }
        printErrorList(errors);
    });
    form.length.addEventListener('blur', function() {
        if(form.length.value == "") {
            errors.push('La película debe tener una duración');
            form.length.classList.add('is-invalid');
        }
        else if(form.length.value < 60 || form.length.value > 360) {
            errors.push('La película debe tener una duración entre 60 y 360 minutos');
            form.length.classList.add('is-invalid');
        }
        else {
            form.length.classList.add('is-valid');
            form.length.classList.remove('is-invalid');
        }
        
        printErrorList(errors);
    });
    form.genre_id.addEventListener('blur', function() {
        if(form.genre_id.value == "") {
            errors.push('La película debe tener un género');
            form.genre_id.classList.add('is-invalid');
        }
        else {
            form.genre_id.classList.add('is-valid');
            form.genre_id.classList.remove('is-invalid');
        }
        printErrorList(errors);
    });

    errors = [];
}