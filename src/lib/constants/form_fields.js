// Fancy way ? just for fun!

export class form_fields {
  static signUp() {
    return [
      {
        label: "Name",
        name: "name",
        type: "text"
      },
      {
        label: "Username",
        name: "username",
        type: "text"
      },
      {
        label: "Email",
        name: "email",
        type: "email"
      },
      {
        label: "Password",
        name: "password",
        type: "password"
      },
      {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password"
      }
    ];
  }

  static signIn() {
    return [
      {
        label: "Email",
        name: "email",
        type: "email"
      },
      {
        label: "Password",
        name: "password",
        type: "password"
      }
    ];
  }

  static submitResource() {
    return [
      {
        label: "Title",
        name: "title",
        type: "text"
      },
      {
        label: "Keywords",
        name: "keywords",
        type: "text",
        placeholder: "keywords (separate by ,)"
      },
      {
        label: "Link",
        name: "link",
        type: "url"
      }
    ];
  }
}
