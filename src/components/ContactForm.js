import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Card, TextField, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [Contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo_url: "",
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card variant="outlined" style={{ backgroundColor: "#F3F1EB", paddingBottom: "20px" }} className="CardForm">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField id="name" value={Contact.name} onChange={(e) => setContact({ ...Contact, name: e.target.value })} fullWidth label="Name *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="phone" value={Contact.phone} onChange={(e) => setContact({ ...Contact, phone: e.target.value })} fullWidth type="text" label="Phone *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="email" value={Contact.email} onChange={(e) => setContact({ ...Contact, email: e.target.value })} fullWidth type="email" label="Email *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="photo" value={Contact.photo} onChange={(e) => setContact({ ...Contact, photo: e.target.value })} fullWidth type="text" label="Photo URL *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={6}>
                <div className="button-add-new">
                  <Button
                    variant="text"
                    onClick={() => {
                      handleClick(Contact);
                      setContact({
                        name: "",
                        phone: "",
                        email: "",
                        photo_url: "",
                      });
                    }}
                    color="success"
                  >
                    ADD NEW
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
