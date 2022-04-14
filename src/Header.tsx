import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";

interface headerProps {
  showform: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Header({ showform }: headerProps) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ p: (theme) => theme.spacing(2) }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <Grid item flex={2}>
            <Typography variant="h4" fontWeight={700}>
              Student Management System
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="info" onClick={showform}>
              Add new Student
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
