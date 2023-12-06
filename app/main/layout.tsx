
import Footers from "../components/menu/footers"
import Navbars from "../components/menu/navbars"
import { AppWrapper } from "../context/ApiContext";

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const api = "http://localhost:8081/WHAPI/api";
    return (
        <>
            <AppWrapper >
                <Navbars />
                {children}
                <Footers />
            </AppWrapper>

        </>
    )
}