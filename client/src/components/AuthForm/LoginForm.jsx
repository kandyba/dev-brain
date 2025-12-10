import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/userSlice';
import FormControl from '../FormControl.jsx';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formState));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-[380px]">

      <h2 className="text-2xl font-semibold text-slate-800 mb-2">Login</h2>

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
        {loading ? 'Loading...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
