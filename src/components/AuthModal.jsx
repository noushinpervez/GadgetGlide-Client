import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';

const AuthModal = ({ isOpen, onClose }) => {
    const { signInUser, createUser, googleLogin } = useAuth();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!isOpen) {
            setEmail('');
            setPassword('');
        }
    }, [isOpen]);

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

    const handleGoogleLogin = async () => {
        try {
            await googleLogin(() => {
                onClose();
            });
        } catch (error) {
            console.error("Google Login Error:", error);
        }
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-blueGray-800 bg-opacity-50 z-50" onClick={ handleOverlayClick }>
                <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6 lg:p-8">
                    <h2 className="text-xl font-semibold text-center mb-4">{ isSignUp ? 'Sign Up' : 'Sign In' }</h2>
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-4">
                            <label
                                htmlFor="UserEmail"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="email"
                                    id="UserEmail"
                                    placeholder="Email"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={ email }
                                    onChange={ (e) => setEmail(e.target.value) }
                                    required
                                />
                                <span
                                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Email
                                </span>
                            </label>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="Password"
                                className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                            >
                                <input
                                    type="password"
                                    id="Password"
                                    placeholder="Password"
                                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    value={ password }
                                    onChange={ (e) => setPassword(e.target.value) }
                                    required
                                />
                                <span
                                    className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
                                >
                                    Password
                                </span>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 w-full"
                        >
                            { isSignUp ? 'Sign Up' : 'Sign In' }
                        </button>
                    </form>

                    <button
                        onClick={ handleGoogleLogin }
                        className="inline-block rounded border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-indigo-500 w-full mt-4"
                    >
                        Sign in with Google
                    </button>
                    <div className="text-center mt-4">
                        <button
                            onClick={ () => setIsSignUp(!isSignUp) }
                            className="text-blue-600 underline"
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
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default AuthModal;