import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function BigCard(props) {
  const theme = useTheme();
  const img = props.data.image;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        m: 2,
        mt: 8,
        p: "auto",
        MinHeight: "100vh",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: { sm: 200, md: 450 }, m: "auto" }}
        image={`${img}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: { sm: "column" } }}>
        <CardContent sx={{ flex: "auto" }}>
          <Typography
            component="div"
            variant="h3"
            sx={{ width: "maxContent", textAlign: "center" }}
          >
            {props.data.title}
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            component="div"
            sx={{ mt: 10 }}
          >
            ${props.data.price}
          </Typography>
          <Typography
            component="div"
            variant="h5 "
            sx={{ width: "maxContent", mt: 1 }}
          >
            {props.data.category}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ flexWrap: "wrap", mt: 2 }}
          >
            {props.data.description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mt: 10 }}
          >
            Rating: {props.data.rating.rate}{" "}
            <Rating name="read-only" value={props.data.rating.rate} readOnly />
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ mt: 1 }}
          >
            Count: {props.data.rating.count}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default BigCard;
