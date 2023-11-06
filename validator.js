const REQUIRED_FIELD = "Vui lòng điền vào form.";
const EMAIL_FORMAT = "Vui lòng điền đúng format của email.";
const regression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var validator = new Validator({
  form: document.getElementById("form"),
  rules: {
    content: {
      validate: (val) => (val ? " " : REQUIRED_FIELD),
    },
    name: {
      validate: (val) => (val ? " " : REQUIRED_FIELD),
    },
    email: {
      validate: (val) =>
        val ? (regression.test(val) ? " " : EMAIL_FORMAT) : REQUIRED_FIELD,
    },
  },
});

validator.form.onsubmit = (evn) => {
  evn.preventDefault();
  const values = validator.getValues();
  //   console.log(values);
  //   console.log(validator);
  if (validator.errorMessages) {
    for (const key in validator.errorMessages) {
      //   //   document.querySelector(`modal-form-right-${key}-errors`).textContent = validator.errorMessages[key];
      //   console.log(validator.errorMessages[key]);
      //   console.log(`modal-form-right-${key}-errors`);
      $(`.modal-form-right-${key}-errors`).text(validator.errorMessages[key]);
    }
  }
};

validator.form.onreset = (evn) => {
  const data = validator.reset();
  console.log(data);
  document.getElementById("info").innerHTML = JSON.stringify(data, null, 2);
  console.log(validator.errorMessages);
  if (validator.errorMessages) {
    document.getElementById("error").innerHTML = JSON.stringify(
      validator.errorMessages,
      null,
      2
    );
  }
};
