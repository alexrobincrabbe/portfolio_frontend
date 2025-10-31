import { useState } from "react";
import { API_BASE } from "../../../config";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE}/contact/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-200 m-auto h-full p-5 md:h-fit md:p-20">
      <form
        className="glowing-blue-border rounded-3xl w-full h-full p-10 bg-background-dark text-3xl flex justify-center items-center flex-col"
        onSubmit={handleSubmit}
      >
        <div className="w-full flex justify-between flex-col md:flex-row">
          <input
            className="rounded-3xl glowing-blue-border mb-10 mr-0 w-full md:mb-0 md:mr-5 md:w-1/2 pl-4 p-2"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="rounded-3xl glowing-blue-border ml-0 w-full md:ml-5 md:w-1/2 pl-4 p-2"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="rounded-3xl h-60 w-full glowing-blue-border m-10 pl-4 pt-4 p-2"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button 
        className="rounded-3xl pl-4 pr-4 p-2 glowing-blue-border"
        type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
