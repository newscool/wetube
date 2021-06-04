const join = (req, res) => res.send('join')
const edit = (req, res) => res.send('edit user')
const remove = (req, res) => res.send('remove user')
const login = (req, res) => res.send('login')
const logout = (req, res) => res.send('logout')
const see = (req, res) => res.send('see')

export {
  join,
  edit,
  remove,
  login,
  logout,
  see,
}