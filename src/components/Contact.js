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
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              <div className="CardInner">
                {Contacts &&
                  Contacts.map((contact, index) => {
                    return (
                      <div key={index}>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar className="listItemAvatar">
                            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                          </ListItemAvatar>
                          <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                              <React.Fragment>
                                <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                                  Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                                <div>{contact.name}</div>
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
