"use client";
import { useTeam } from "@/stores/use-team";
import Link from "next/link";
import { useState } from "react";
import CameraInput from "./camera-input";
import InputForm from "./input-form";
import SubmitButton from "./submit-button";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const { add } = useTeam();

  const handleClickSubmit = () => {
    if (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      phoneNumber.trim() !== "" &&
      role.trim() !== ""
    ) {
      add(firstName, lastName, email, role);
    }
  };

  return (
    <form className="grid grid-cols-2 w-full max-w-[780px] gap-[60px] mt-10">
      <div className="flex flex-col items-center justify-center col-span-2">
        <CameraInput />
        <p className="text-babyblue font-semibold text-[14px] mt-2">Upload foto</p>
      </div>
      <InputForm
        id="firstName"
        label="First Name"
        placeholder="Enter your first name"
        value={firstName}
        setValue={setFirstName}
      />

      <InputForm
        id="lastName"
        label="Last Name"
        placeholder="Enter your last name"
        value={lastName}
        setValue={setLastName}
      />

      <InputForm
        id="email"
        label="Your Email"
        placeholder="Enter your Email"
        value={email}
        setValue={setEmail}
      />

      <InputForm
        id="phoneNumber"
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        setValue={setPhoneNumber}
      />

      <InputForm id="Role" label="Role" placeholder="Enter your role" value={role} setValue={setRole} />

      <Link href={"/team"} onClick={handleClickSubmit} className="self-end">
        <SubmitButton />
      </Link>
    </form>
  );
}
