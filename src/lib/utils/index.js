import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";
import { clsx } from "clsx";

import successSound from "@/assets/sounds/success.wav";
import errorSound from "@/assets/sounds/oops.wav";


// ╭────────────────────────────────────────────────────────╮
// │      Utility Functions (General)
// ╰────────────────────────────────────────────────────────╯
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function capitalizeFirstLetter(string) {
  if (string?.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else {
    return string;
  }
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export function convertMongoDBDate(mongoDate) {
  // Convert MongoDB date string to JavaScript Date object
  const dateObj = new Date(mongoDate);
  const month = dateObj.toLocaleString("default", { month: "short" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  // Convert hours to 12-hour format
  let period = "am";
  if (hours >= 12) {
    period = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Add leading zero if minutes are less than 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const formattedDate = capitalizeFirstLetter(month) + " " + day + ", " + year;
  const formattedTime = hours + ":" + minutes + period;

  return { Date: formattedDate, Time: formattedTime };
};

// ╭────────────────────────────────────────────────────────╮
// │      Alert & Toast Notifications
// ╰────────────────────────────────────────────────────────╯
export const showToast = (
  msg = "Here is your toast",
  type = "success",
  time = 2000,
  primaryColor = "hsl(135.1,88.3%,38.1%)"
) => {
  toast[type](msg, {
    duration: time,
    position: "top-center",
    iconTheme: {
      primary: type === "success" ? primaryColor : "hsl(25, 95%, 53.1%)",
      secondary: "#f8f8f8",
    },
  });
};

export const showAlert = (title, text, type) => {
  Swal.fire({
    title: title,
    text: text,
    icon: type,
  });
};

// ╭────────────────────────────────────────────────────────╮
// │      Validators
// ╰────────────────────────────────────────────────────────╯
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email?.trim());
};

export function validateUsername(username) {
    if (!username || username.length < 3) {
        return false;
    }

    // starts with a letter, can contain letters, numbers, or hyphens, and ends with a letter or number
    const regex = /^[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]$/;

    return regex.test(username);
}

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateURL = (url) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol (optional)
      "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // domain name
      "localhost|" + // localhost
      "\\d{1,3}(\\.\\d{1,3}){3})" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?" + // port and path
      "(\\?[;&a-zA-Z0-9%_.~+=-]*)?" + // query string
      "(#[-a-zA-Z0-9_]*)?$",
    "i" // fragment locator
  );
  return !!urlPattern.test(url);
};

// ╭────────────────────────────────────────────────────────╮
// │      LocalStorage Helper
// ╰────────────────────────────────────────────────────────╯
export class LocalStorage {
  static setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  static getItem = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  static removeItem = (key) => {
    localStorage.removeItem(key);
  };
}

// ╭────────────────────────────────────────────────────────╮
// │      Sound Player
// ╰────────────────────────────────────────────────────────╯
export class playSound {
  static success() {
    const success = new Audio(successSound);
    success.play();
  }

  static error() {
    const error = new Audio(errorSound);
    error.play();
  }
}

// ╭────────────────────────────────────────────────────────╮
// │      Clipboard Helper
// ╰────────────────────────────────────────────────────────╯
export const copyToClipboard = async (text) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Link copied successfully.");
    } catch (err) {
      console.log(err);
      showToast("Failed to copy the link.", "error");
    }
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (!successful) throw Error;
      showToast("Link copied successfully.");
    } catch (err) {
      console.error(err);
      showToast("Failed to copy the link.", "error");
    }

    document.body.removeChild(textArea);
  }
};