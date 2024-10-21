import { Camera } from "lucide-react";

export default function CameraInput(){
  return (
    <div className="w-20 h-20 relative rounded-full bg-bgdashboard flex justify-center items-center">
      <label htmlFor="file" className="w-full h-full absolute"></label>
      <Camera />
      <input type="file" id="file" name="file" hidden />
    </div>
  );
}