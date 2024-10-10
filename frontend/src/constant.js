import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

export const SIDEBAR = [
    {
        label: 'Overview',
        icon: <HomeOutlinedIcon />,
        path: "/management"
    },
    {
        label: 'User',
        icon: <GroupOutlinedIcon />,
        path: "/management/user"
    }
]