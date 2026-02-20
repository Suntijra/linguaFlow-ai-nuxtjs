// Simulated auth state using useState + localStorage for persistence across navigation
export const useAuth = () => {
  const isLoggedIn = useState<boolean>('auth.isLoggedIn', () => {
    // Restore from localStorage on first init (client-side only)
    if (import.meta.client) {
      return localStorage.getItem('linguaflow_auth') === 'true'
    }
    return false
  })

  const user = useState('auth.user', () => ({
    name: 'Demo User',
    email: 'demo@linguaflow.ai',
    credits: 150,
    plan: 'Enterprise'
  }))

  const login = () => {
    isLoggedIn.value = true
    if (import.meta.client) {
      localStorage.setItem('linguaflow_auth', 'true')
    }
  }

  const logout = () => {
    isLoggedIn.value = false
    if (import.meta.client) {
      localStorage.removeItem('linguaflow_auth')
    }
  }

  return { isLoggedIn, user, login, logout }
}
