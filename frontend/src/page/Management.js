import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import { Box} from "@mui/material";

const Management = () => {
    return(
        <Box>
            <Header />
            <Sidebar />

            {/* Nested route content will render here */}
            <Box sx={{ padding: 3 }}>
                <Outlet />
            </Box>
        </Box>
    )
}

export default Management;