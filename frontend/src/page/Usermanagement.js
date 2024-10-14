import {
  Container,
  TableContainer,
  Typography,
  Box,
  TableHead,
  Paper,
  Table,
  Stack,
  Divider,
  TextField,
  InputAdornment,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
  Tooltip,
  TablePagination,
} from "@mui/material";
import { USER_DATA } from "../MOCK_DATA";
import FilterListIcon from "@mui/icons-material/FilterList";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { useEffect, useState } from "react";
import { UserDrawer } from "../component/Drawer";
import { getAllUser } from "../APIs/userAPIs";

const getRoleColor = (role) => {
  switch (role) {
    case "Electrician":
      return { backgroundColor: "#E9D5FF", color: "#7C3AED" }; // Light purple background, dark purple text
    case "Estimator":
      return { backgroundColor: "#DBEAFE", color: "#1D4ED8" }; // Light blue background, dark blue text
    case "Construction Managera":
      return { backgroundColor: "#F3F4F6", color: "#6B7280" }; // Light gray background, dark gray text
    default:
      return { backgroundColor: "#E5E7EB", color: "#374151" }; // Default gray
  }
};

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

const UserManagement = () => {
  const [datainit, setDatainit] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userData, setUserData] = useState({});


  useEffect(()=> {
    getData(page, rowsPerPage);
  },[])

  const getData = async(page, rowsPerPage) => {
    try{
      const response = await getAllUser();
      const tmp = response.data.data;
      setDatainit(response.data.data);
      const displayedRows = tmp.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      );
      setData(displayedRows);
    }catch (e) {
      console.log(e);
      alert("Load data failed!")
    }
    
  }

  const getDataWithSearch = (page, rowsPerPage) => {
    const filteredRow = datainit.filter((row) => 
      row.name.toLowerCase().includes(search.toLowerCase().trim())
    ).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    setData(filteredRow);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    if (!search) {
      getData(page, rowsPerPage);
      return true;  // If searchTerm is empty, return all rows
    }
    getDataWithSearch(page, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page after changing rows per page
  };

  const handleChangeSearh = (event) => {
    setSearch(event.target.value);
  }

  const onClickSearchButton = () =>{
    if (!search) {
      getData(page, rowsPerPage);
      return true;  // If searchTerm is empty, return all rows
    }
    getDataWithSearch(page, rowsPerPage);
  }

  const onClickRowView = (row) => {
    console.log(row);
    setUserData(row);
    setIsDrawerOpen(true);
  }

  const onClickRowEdit = (row) => {
    
  }

  const onClickRowDelete = (row) => {

  }

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
 

  return (
    <Container maxWidth={false} sx={{
      minHeight: '100vh'
    }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(","),
          fontWeight: 700,
          pb: 4,
        }}
      >
        User management
      </Typography>

      <TableContainer component={Paper} sx={{ borderRadius: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="h6" fontWeight="700" paddingLeft="20px">
            List of user
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<FilterListIcon />}
              sx={{
                backgroundColor: "#E5E7EB", // Setting the button color
                color: "#000", // Setting text/icon color to black
                "&:hover": {
                  backgroundColor: "#D1D5DB", // A slightly darker color for hover
                },
                boxShadow: "none", // Remove default shadow
                textTransform: "none", // Keep text normal (no uppercase)
                borderRadius: 3,
              }}
            >
              Filter
            </Button>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#635BFF",
                textTransform: "none",
                borderRadius: 3,
              }}
            >
              Add new member
            </Button>
          </Stack>
        </Box>

        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            gap: 3,
          }}
        >
          <TextField
            fullWidth
            id="search"
            label=""
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            placeholder="Search for question id, other keywords"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px", // Set the desired border radius here
              },
            }}
            onChange={handleChangeSearh}
            value={search}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#635BFF",
              textTransform: "none",
              borderRadius: 3,
            }}
            onClick={onClickSearchButton}
          >
            Search
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F3F4F6", fontWeight: "700" }}>
              {" "}
              {/* Light gray background for table header */}
              <TableCell sx={{ fontWeight: "700" }}>NO</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>USER ID</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>FULL NAME</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>EMAIL</TableCell>
              <TableCell sx={{ fontWeight: "700" }}>ROLE</TableCell>
              <TableCell align="center" sx={{ fontWeight: "700" }}>
                JOIN DATE
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "700" }}>
                STATUS
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "700" }}>
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        maxWidth: "150px", // Fix the width of the column
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {user._id}
                    </span>
                    <Tooltip title="Copy to clipboard">
                      <IconButton onClick={() => copyToClipboard(user._id)}>
                        <ContentCopyTwoToneIcon sx={{ color: "#635BFF" }} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Chip
                    label={user.role}
                    sx={{
                      ...getRoleColor(user.role),
                      borderRadius: "12px",
                      fontWeight: "700",
                    }}
                  />
                </TableCell>
                <TableCell align="center">{user.date}</TableCell>
                <TableCell align="center">
                  <Chip
                    label={user.status ? "ACTIVATED" : "WAITING"}
                    sx={{
                      backgroundColor: user.status ? "#15B79E1F" : "#F790091F",
                      color: user.status ? "#107569" : "#B54708",
                      fontWeight: "700",
                      borderRadius: 5,
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="view" sx={{ color: "#6B7280" }} onClick={() => onClickRowView(user)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton aria-label="edit" sx={{ color: "#6B7280" }} onClick={() => onClickRowEdit(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" sx={{ color: "#6B7280" }} onClick={() => onClickRowDelete(user)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                {isDrawerOpen && <UserDrawer user={userData} open={isDrawerOpen} onClose={closeDrawer} onAction='View'/>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={USER_DATA.length} // Total number of rows
          page={page} // Current page
          onPageChange={handleChangePage} // Page change handler
          rowsPerPage={rowsPerPage} // Rows per page
          onRowsPerPageChange={handleChangeRowsPerPage} // Rows per page change handler
          rowsPerPageOptions={[5, 10, 15, 20]} // Options for rows per page
        />
      </TableContainer>


    
    </Container>
  );
};

export default UserManagement;
