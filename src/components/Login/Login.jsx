import { useEffect } from "react";
import { useTitle } from "../TitleContext";
import { Link } from "react-router";

const Login = () => {

    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle("Login - Dashboard");
    }, [setTitle]);

    return (
        <div className="flex items-center min-h-screen">
            <div className="bg-base-200 border border-base-300 p-6 gap-10 rounded-box mx-auto flex justify-between flex-col md:flex-row">
                <div>
                    <h1 className="text-4xl mb-5">Login</h1>
                    <p className="max-w-sm text-base-content/60">Use your credentials to access your account</p>
                </div>
                <form className="fieldset w-md">
                    <label htmlFor="email" className="fieldset-label">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" name="email" required />

                    <label htmlFor="password" className="fieldset-label">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" name="password" required />

                    <button type="submit" className="btn bg-main text-black hover:bg-white mt-4">Login</button>

                    <div className="divider">OR</div>

                    <button className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    {/* Facebook */}
                    <button className="btn bg-[#1A77F2] text-white border-[#005fd8]">
                        <svg aria-label="Facebook logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                        Login with Facebook
                    </button>
                    <p>Don't have an Account? <Link to="/register" className="link text-main">Register Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;