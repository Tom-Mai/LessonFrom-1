// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  //Delcare the form
  let form = document.getElementById("lessonForm");
  // listen for form submission and start the function
  form.addEventListener("submit", function (event) {
    Array.form(form.elements).forEach((input) => {
      if (this.inputMode.type !== "submit") {
        if (!valuedateFields(input)) {
            event.preventDefault();
            event.stopPropagation();

            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
            input.nextElementSibling.style.display = 'block';

        }else{
            input.nextElementSibling.style.display = 'none';
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
      }
    });
  }, false);
})();

