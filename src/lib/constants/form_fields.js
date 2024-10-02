// Fancy way ? just for fun!

export class form_fields {
  static signUp() {
    return [
      {
        label: "Name",
        name: "name",
        type: "text",
        placeholder: "Your name"
      },
      {
        label: "Username",
        name: "username",
        type: "text",
        placeholder: "Choose an username"
      },
      {
        label: "Email address",
        name: "email",
        type: "email",
        placeholder: "Enter your email"
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your password"
      },
      {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        placeholder: "Re enter your password"
      }
    ];
  }

  static signIn() {
    return [
      {
        label: "Email address",
        name: "email",
        type: "email",
        placeholder: "Enter your email"
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        placeholder: "Enter your password"
      }
    ];
  }
}
