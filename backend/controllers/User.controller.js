import userService from "../services/User.service.js"


// signup
export const UserSignup = async (req, res, next) => {
  try {
    const user = await userService.signup(req.body);


   return res.status(201).json({ message: "new user created!", user: {
            id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
          } }); 
    
  } catch (err) {
    next(err)
  }
};

// login

export const Userlogin = async (req, res, next) => {
  try {
    const token = await userService.login(req.body);

    return res.status(200).json({ message: "login successful", token });
  } catch (err) {
    next(err);
  }
};
