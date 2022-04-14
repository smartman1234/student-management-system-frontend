import {
  Button,
  CircularProgress,
  Dialog,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { SetStateAction, useState } from "react";
import axios from "axios";

interface modalProps {
  visible: boolean;
  cleanup: () => void;
  updateList: (newVal: SetStateAction<never[]>) => void;
}

export default function AddStudent({
  visible,
  cleanup,
  updateList,
}: modalProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:8080/addStudent", formData)
      .then(({ data }) => {
        updateList(data);
        cleanup();
        setLoading(false);
      });
  }

  return (
    <Dialog open={visible} onClose={cleanup} fullWidth maxWidth="md">
      <Paper sx={{ p: (theme) => theme.spacing(4) }}>
        <Typography variant="h5"> Add new student </Typography>
        <br />
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            type="text"
            label="Student name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <TextField
            fullWidth
            required
            type="email"
            label="Student email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <TextField
            fullWidth
            required
            type="number"
            label="Student contact"
            name="contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <TextField
            fullWidth
            required
            type="address"
            label="Student address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          />
          <br />
          <br />
          <Button fullWidth type="submit" variant="contained">
            {loading ? <CircularProgress sx={{ color: "black" }} /> : "Submit"}
          </Button>
        </form>
      </Paper>
    </Dialog>
  );
}
