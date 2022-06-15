export default function validateCompany(input) {
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

  return errors;
}
