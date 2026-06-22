import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideSignup from "./SideCards/SideSignup";
import SideSignin from "./SideCards/SideSignin";
import AuthForm from "../../context/SharableForm";
import CustomToggle from "../../ui/customToggle/CustomToggle";
import { Auth } from "../../context/AuthProvider/AuthProvider";

const SharableAuth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  const navigate = useNavigate();
  const { userLogin, userSignup } = Auth();

  const handleAuth = async (data: Record<string, string>) => {
    try {
      if (isNewUser) {
        await userSignup({
          username: `${data.firstName ?? ""} ${data.lastName ?? ""}`.trim(),
          email: data.email,
          password: data.password,
        });
        setIsNewUser(false);
        return;
      }

      await userLogin({
        email: data.email,
        password: data.password,
      });

      navigate("/");
    } catch (error) {
      console.error("Auth error", error);
    }
  };




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
