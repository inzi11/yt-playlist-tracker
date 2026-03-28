import { useState } from "react";
import SideSignup from "./SideCards/SideSignup";
import SideSignin from "./SideCards/SideSignin";
import AuthForm from "./SharableForm";
import CustomToggle from "../../ui/customToggle/CustomToggle";

const SharableAuth = () => {
  const [isNewUser, setIsNewUser] = useState(true);

  const handleAuth = (payload: Record<string, string | number>) => {
    console.log("here's the payload im sending", payload);
  }



  return (
    <div className="w-full h-screen relative items-center justify-center">
      <div className="absolute right-12 top-12">
      <CustomToggle toggleOptions={{first: "Sign up", second: "Login"}}  handleToggle={setIsNewUser} isActive={isNewUser} />
      </div>

      <section
        className="
  flex max-w-fit  
  w-[60%] h-full 
  m-auto overflow-hidden 
"
      >
        {/* LEFT SIDE */}
        <div className="w-1/2 h-full flex items-center justify-center">
          {isNewUser ? <SideSignup /> : <SideSignin />}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <AuthForm
            variant={isNewUser ? "signup" : "signin"}
            onSubmit = {handleAuth}
            onVariantChange={(v) => setIsNewUser(v === "signup")}
          />
        </div>
      </section>
    </div>
  );
};

export default SharableAuth;
