import { Avatar, Box, IconButton, InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Header() {
    const user = {
        name: "Technical test",
        email: "test@gmail.com",
        image: "https://picsum.photos/200"
    }

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={1} backgroundColor="#F5F5F5">
        <Box display="flex" backgroundColor='#F5F5F5' borderRadius="3px">
        <IconButton type="button" sx={{width:'24px',height: '24px', p:1}}>
                <SearchIcon />
            </IconButton>          
        </Box>

        <Box display="flex" alignItems="center">
            <Avatar alt={user.name} src={user.image} sx={{width:'24px',height: '24px'}}/>
            <KeyboardArrowDownIcon color="#6C737F"/>
        </Box>
      </Box>
    </>
  );
}
