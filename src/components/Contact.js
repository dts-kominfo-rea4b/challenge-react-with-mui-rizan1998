// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ Contacts }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Grid container spacing={1} direction="row" justify="flex-start" alignItems="flex-start" alignContent="stretch" wrap="nowrap">
        <Grid item xs={12}>
          <div className="CardContact">
            <List sx={{ width: "100%", paddingTop: "10px", bgcolor: "#DBF6F0", paddingBottom: "20px" }}>
              <div className="CardInner">
                {Contacts &&
                  Contacts.map((Contact, index) => {
                    return (
                      <div key={index} style={{ marginBottom: "5px" }}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar className="listItemAvatar">
                            <Avatar sx={{ width: 56, height: 56 }} alt={Contact.name} src={Contact.photo} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={Contact.name}
                            secondary={
                              <React.Fragment>
                                <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.secondary">
                                  {Contact.phone}
                                </Typography>
                                <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.secondary">
                                  {Contact.email}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </div>
                    );
                  })}
              </div>
            </List>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
