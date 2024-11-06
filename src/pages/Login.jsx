import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add authentication logic here
    navigate('/')
  }

  return (
    <div className="min-h-screen white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">Hey It's Good to See you</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-2 -mt-px px-1  text-xs font-medium text-green-500"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <label
                  htmlFor="password"
                  className="absolute -top-2 left-2 -mt-px px-1  text-xs font-medium text-green-500"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full pl-10 px-3 py-2 border border-green-500 text-white placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Continue
          </button>
          <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-emerald-500 hover:text-emerald-400">
            Sign up
          </Link>
        </p>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center text-sm px-4">
              <span className="bg-white px-2  text-gray-400">OR</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-left px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-small text-gray-700  hover:bg-gray-700"
            >
              <img 
                src="/Google Logo.svg" 
                alt="Google" 
                className="h-5 w-5 mr-2"
              />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-left px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-small text-gray-700  hover:bg-gray-700"
            >
              <img 
                src="/Microsoft Logo.svg" 
                alt="Microsoft" 
                className="h-5 w-5 mr-2"
              />
              Continue with Microsoft Account
            </button>
          </div>
        </form>

        
      </div>
    </div>
  )
}