import { authAtom } from "@/atoms/authAtom";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.css";

export default function HomePage() {
    const [auth, setAuth] = useAtom(authAtom);
    const router = useRouter();
    function handleLogout(): void {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login");
        setAuth(null); 
    }

    return (
        <div className={styles.wrapper}>
            <h1>Welcome to your Profile</h1>
            <p>Your username: {auth?.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}