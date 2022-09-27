import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Grid } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(contactsJSON);
  }, []);

  const handleClick = (Contact) => {
    setContacts([...Contacts, { name: Contact.name, phone: Contact.phone, email: Contact.email, photo: Contact.photo }]);
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={6}>
          <ContactForm handleClick={handleClick} />
        </Grid>
        <Grid item xs={6}>
          {Contacts &&
            Contacts.map((data, index) => {
              return (
                <div key={index}>
                  <Contact data={data} />
                </div>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
