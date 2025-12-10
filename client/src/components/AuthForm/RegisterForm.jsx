import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, resetRegistrationState } from "../../store/userSlice";
import FormControl from '../FormControl.jsx';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, registrationSuccess } = useSelector((state) => state.user);

  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formState));
  };

  useEffect(() => {
    if (registrationSuccess) {
      toast.success("Account created successfully!");
      navigate("/login");

      dispatch(resetRegistrationState());
    }
  }, [registrationSuccess, navigate])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[380px]">

      <h2 className="text-2xl font-semibold text-slate-800 mb-2">Register</h2>

      <FormControl
        type="text"
        name="name"
        placeholder="First name"
        value={formState.name}
        onChange={handleChange}
        required
        className="input-base"
        error={error}
      />

      <FormControl
        type="text"
        name="surname"
        placeholder="Last name"
        value={formState.surname}
        onChange={handleChange}
        required
        className="input-base"
        error={error}
      />

      <FormControl
        type="email"
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={handleChange}
        required
        className="input-base"
        error={error}
      />

      <FormControl
        type="password"
        name="password"
        placeholder="Password"
        value={formState.password}
        onChange={handleChange}
        required
        className="input-base"
        error={error}
      />

      <button
        type="submit"
        disabled={loading}
        className="btn btn-large btn-primary"
      >
        {loading ? "Loading..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
