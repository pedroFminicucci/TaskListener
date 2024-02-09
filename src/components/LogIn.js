
const LogIn = () => {
  return (
    <div className="form">
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Log In</button>
    <p>Don't have an account? <a href="/signup">Sign up</a></p>
    <p>Forgot your password? <a href="/forgot-password">Reset it</a></p>
    <p>Forgot your username? <a href="/forgot-username">Reset it</a></p>
    </form>
    </div>
  )
}

export default LogIn