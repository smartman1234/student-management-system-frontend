import { Container, Grid, Paper, Typography } from "@mui/material";

interface RowProps {
  titles: string[];
  isHead: boolean;
}

interface listProps {
  rows: Object[];
}

function Row({ titles, isHead }: RowProps) {
  const grid = (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      p={(theme) => theme.spacing(2)}
      sx={(theme) => ({
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
      })}
    >
      {titles.map((title, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          key={i}
          color={isHead ? "text.secondary" : "text.primary"}
        >
          {isHead ? title : i === 0 ? title[title.length - 1] : title}
        </Grid>
      ))}
    </Grid>
  );
  return <>{isHead ? <Paper elevation={2}>{grid}</Paper> : grid}</>;
}

export default function List({ rows }: listProps) {
  return (
    <Container sx={{ mt: (theme) => theme.spacing(4) }}>
      <Paper sx={{ p: (theme) => theme.spacing(4) }}>
        <Typography variant="h3" fontWeight={500} color="text.primary">
          Students
        </Typography>
        <br />
        <Row isHead titles={["Id", "Name", "Email", "Address", "Contact"]} />
        {rows.map((row, i) => {
          const titles: string[] = [];
          Object.values(row).forEach((val) => {
            titles.push(val);
          });
          return <Row isHead={false} titles={titles} key={i} />;
        })}
      </Paper>
    </Container>
  );
}
