import axios from "axios";
import React from "react";

export const contactService = async (email, subject, message) => {
  try {
    const res = await axios.post("/api/contacts", {
      email,
      subject,
      message,
    });
    const data = res.data;
    console.log(data);
 } catch (error) {
  console.error("contact error:", error.response?.data || error.message);
}

};
