import Input from "@/app/components/ui/input";
interface InputForm {
  placeholder: string;
  label: string;
  id: string;
  value: string;
  setValue: (value: string) => void;
}
export default function InputForm({ placeholder, label, id,value,setValue }: InputForm) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input id={id} placeholder={placeholder}  setValue={setValue} value={value}/>
    </div>
  );
}
