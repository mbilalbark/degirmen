const SERVERURL = 'http://localhost:8080/'
 
const degirmenAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(user, cb) {
    this.isAuthenticated = true
    this.user = user
    cb()
  },
  signout(cb) {    
    localStorage.clear()
    this.isAuthenticated = false
    this.user = null
    cb()
  },
  getFullname() {
    return this.user.fullname
  },
  getId() {
    return this.user._id
  },
  isAdmin() {
    return this.user.type
  }
}

export { degirmenAuth, SERVERURL }