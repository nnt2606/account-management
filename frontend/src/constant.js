import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export const SIDEBAR = [
    {
        key: '1',
        label: 'Overview',
        icon: <HomeOutlinedIcon />,
        path: "/"
    },
    {
        key: '2',
        label: 'User management',
        icon: <GroupOutlinedIcon />,
        path: "/management/user"
    }
]

export const drawerWidth = "280px";