import { useState } from "react";
import SideSignup from "./SideCards/SideSignup";
import SideSignin from "./SideCards/SideSignin";
import AuthForm from "../../context/SharableForm";
import CustomToggle from "../../ui/customToggle/CustomToggle";
import { login, signup } from "./AuthSlice";
import { useAppDispatch } from "../../store/hooks";
const SharableAuth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  
  const dispatch = useAppDispatch();

  const handleAuth = (payload: Record<string, string>) => {
    console.log("here's the payload im sending", payload);
    if (isNewUser) {
      // signup
      dispatch(signup({ name: payload.name, password: payload.password, email: payload.email }));
    } else {
      dispatch(login({ password: payload.password, email: payload.email }));
    }
  }



  return (
    <div className="w-full h-screen relative items-center justify-center">
      <div className="absolute right-12 top-12">
        <CustomToggle
          toggleOptions={{ first: "Sign up", second: "Login" }}
          handleToggle={setIsNewUser}
          isActive={isNewUser}
        />
      </div>

      <section
        className="
  flex max-w-fit  
  w-[60%] h-full 
  m-auto overflow-hidden flex-nowrap lg:flex-wrap
"
      >
        {/* LEFT SIDE */}
        <div className="w-1/2 h-full flex items-center justify-center shrink-0 lg:shrink">
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
