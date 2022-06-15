export default function validateUser(input) {
  let errors = {};
  if (
    input.email &&
    !input.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errors.email = "Please enter a valid email";
  }
  if (
    input.linkedin &&
    !input.linkedin.match(
      /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi
    )
  ) {
    errors.linkedin = "Please enter a valid link";
  }
  if (input.name && !input.name.match(/^[a-z ,.'-]+$/i)) {
    errors.name = "Please enter a valid name";
  }
  if (input.age && (input.age > 100 || input.age < 10)) {
    errors.age = "Please enter a valid age";
  }
  return errors;
}
