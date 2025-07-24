import { authAtom } from "@/atoms/authAtom";
import { login } from "@/services/auth.service";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import styles from "@/styles/login.module.css";

export default function LoginPage() {
    const [,setAuth] = useAtom(authAtom);
    const router = useRouter();
    async function handleLogin(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const username = formData.get("username") as string;

        try {
            const response = await login(username);
            if(response.status === 401) {
                alert("Invalid username. Please try again.");
                return;
            }
            
            localStorage.setItem("accessToken", response.accessToken);
            localStorage.setItem("accessToken", response.accessToken);
            setAuth({ username });
            router.push("/");
        } catch (error) {
            console.error("Login failed:", error);
            alert("Login failed. Please try again.");            
        }
    }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
          <h2>Login</h2>
          <input
          className={styles.input}
          name="username"
          placeholder="Username"
          />
          <button type="submit">Login</button>
      </form>
  </div>
  );
}