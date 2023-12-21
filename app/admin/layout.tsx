
import Footers from "../components/menu/footers"
import Navbars from "../components/menu/navbars"
import { AppWrapper } from "../context/ApiContext";

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {

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