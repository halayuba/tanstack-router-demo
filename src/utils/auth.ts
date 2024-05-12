export function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true'
}

export function signIn() {
  return localStorage.setItem('isAuthenticated', 'true')
}

export function signOut() {
  return localStorage.removeItem('isAuthenticated')
}
