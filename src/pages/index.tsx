import { authAtom } from "@/atoms/authAtom";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

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
        <div>
            <h1>Welcome, {auth?.username}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}