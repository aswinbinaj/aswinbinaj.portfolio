export const sendMessageToWhatsApp = (data) => {
  const phoneNumber = "919539711107";

  const message = `
New Contact Message:

Full Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
  `;

  const encodedMessage = encodeURIComponent(message.trim());
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};

export const redirectToWhatsApp = (text) => {
  const phoneNumber = "919539711107";

  const encodedMessage = encodeURIComponent(text);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
};
