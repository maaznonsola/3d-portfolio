import {Canvas} from "@react-three/fiber";
import React, {Suspense, useState} from "react";
import Loader from "../components/Loader";
import {Center, OrbitControls, Stage} from "@react-three/drei";
import ManMobile from "../models/ManMobile";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact Us: Message from ${name}`;
    const body = `I am ${name},\n\n${message}`;
    const mailToLink = `mailto:yourpersonalemail@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the email client with the mailto link (Uncomment this)
    // window.location.href = mailToLink;
    window.location.href = "#";
    setName("");
    setMessage("");
  };

  return (
    <section className="w-full h-full relative flex px-20 pt-20 pb-10">
      <div className="min-w-[50%]">
        <h1 className="head-text">Get in Touch</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 mt-1"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              rows="3"
              className="textarea"
              placeholder="Write your thoughts here..."
            />
          </label>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <div className="min-w-[50%]">
        <Canvas>
          <Suspense fallback={<Loader />}>
            <Center>
              <Stage environment="sunset" intensity={1}></Stage>
              <ManMobile />
              <OrbitControls />
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
