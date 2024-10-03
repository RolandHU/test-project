import { FormEvent } from "react"

const Login = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    
    const formData = new FormData(event.target as HTMLFormElement)
    const email = String(formData.get("email"))
    const password = String(formData.get("password"))

    console.log(email, password)
  }

  return (
    <main>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email@domain.com"/>
        <input type="password" name="password" placeholder="********"/>
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}

export default Login