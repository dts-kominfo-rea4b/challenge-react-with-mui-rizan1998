import { Card, TextField, Grid, Button } from "@mui/material";

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card variant="outlined" className="CardForm">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField id="name" fullWidth label="Name *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="phone" fullWidth type="text" label="Phone *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="email" fullWidth type="email" label="Email *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={12}>
                <TextField id="photo_url" fullWidth type="text" label="Photo URL *" variant="standard" margin="dense" />
              </Grid>
              <Grid item xs={6}>
                <div className="button-add-new">
                  <Button variant="text" color="success">
                    ADD NEW
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
