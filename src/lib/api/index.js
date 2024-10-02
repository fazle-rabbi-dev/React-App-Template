import { ENV_MODE, API_BASE_URL } from "@/lib/secrets"
import { LocalStorage } from "@/lib/utils";

const BASE_URL =
  ENV_MODE === "dev"
    ? "http://localhost:3000/api"
    : API_BASE_URL;


// ╭────────────────────────────────────────────────────────╮
// │      Helpers
// ╰────────────────────────────────────────────────────────╯
const log = ({ error, msg }) => {
  if (!error) {
    return console.log(msg);
  }

  console.error({
    error,
    message: msg
  });
};

const ApiRequest = async ({
  path,
  method,
  data,
  includeToken = false,
  headers
}) => {
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  };

  if (headers) {
    options.headers = {
      ...options.headers,
      ...headers
    };
  }

  if (includeToken) {
    const user = LocalStorage.getItem("user");

    if (!user || !user?.accessToken) {
      return {
        success: false,
        tamperd: true
      };
    }

    const { accessToken } = user;
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(`${BASE_URL}${path}`, options);
    const jsonData = await res.json();

    return jsonData;
  } catch (error) {
    log(error, `While calling api in path: /${path}`);
    return false;
  }
};



// ╭────────────────────────────────────────────────────────╮
// │      Authentication
// ╰────────────────────────────────────────────────────────╯

// Create Account
export const createUserAccount = async userData => {
  const data = {
    path: `/auth/register`,
    method: "POST",
    data: userData,
    includeToken: false
  };

  const response = await ApiRequest(data);
  return response;
};

// Confirm account
export const confirmAccount = async userData => {
  if (!userData || !userData.username || !userData.token) return false;
  const { username, token } = userData;

  const data = {
    path: `/auth/confirm-account?username=${username}&token=${token}`,
    method: "GET"
  };

  const response = await ApiRequest(data);
  return response;
};

// Login Account
export const loginUserAccount = async userData => {
  const data = {
    path: `/auth/login`,
    method: "POST",
    data: userData,
    includeToken: false
  };

  const response = await ApiRequest(data);
  return response;
};

// Social Login (Google & Github)
export const socialLogin = async ({ platform, user }) => {
  const data = {
    path: `/auth/social-login`,
    method: "POST",
    data: {
      platform,
      accessToken: user?.accessToken
    },
    includeToken: false
  };

  const response = await ApiRequest(data);
  return response;
};

// Get Logged_In User
export const getUser = async () => {
  const user = LocalStorage.getItem("user");
  
  if (!user) return false;
  const { _id: userId } = user;

  const data = {
    path: `/users/${userId}`,
    method: "GET",
    includeToken: true
  };

  const response = await ApiRequest(data);
  return response;
};

// Change password
export const changePassword = async ({ oldPassword, newPassword }) => {
  const data = {
    path: "/auth/change-password",
    method: "PUT",
    includeToken: true,
    data: {
      oldPassword,
      newPassword
    }
  };

  const response = await ApiRequest(data);
  return response;
};

// Update account
export const updateAccount = async ({ username, fullName }) => {
  const data = {
    path: "/users/update-account",
    method: "PATCH",
    includeToken: true,
    data: {
      username,
      fullName
    }
  };

  const response = await ApiRequest(data);
  return response;
};
