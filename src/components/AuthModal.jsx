import { useState } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const AuthModal = ({ isOpen, onClose }) => {
    const { signInUser, createUser, googleLogin } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                await createUser(email, password);
            } else {
                await signInUser(email, password);
            }
            onClose();
        } catch (error) {
            console.error("Authentication Error:", error);
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
                    <h2 className="text-xl font-semibold text-center mb-4">{ isSignUp ? 'Sign Up' : 'Sign In' }</h2>
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                value={ email }
                                onChange={ (e) => setEmail(e.target.value) }
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input
                                type="password"
                                value={ password }
                                onChange={ (e) => setPassword(e.target.value) }
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500"
                        >
                            { isSignUp ? 'Sign Up' : 'Sign In' }
                        </button>
                    </form>
                    <button
                        onClick={ googleLogin }
                        className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400"
                    >
                        Sign in with Google
                    </button>
                    <div className="text-center mt-4">
                        <button
                            onClick={ () => setIsSignUp(!isSignUp) }
                            className="text-indigo-600 hover:underline"
                        >
                            { isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up' }
                        </button>
                    </div>
                    <button
                        onClick={ onClose }
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                        &times;
                    </button>
                </div>
            </div>
        )
    );
};

AuthModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AuthModal;