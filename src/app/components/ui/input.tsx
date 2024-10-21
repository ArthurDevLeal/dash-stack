"use client"
interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}
export default function Input({ id, placeholder, value, setValue }: InputProps) {
  return (
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full bg-bgdashboard p-4 border-[#D5D5D5] border rounded-md text-diferentblack text-[14px] focus:outline-none placeholder:text-[#A6A6A6]"
      placeholder={placeholder}
      required
    />
  );
}
