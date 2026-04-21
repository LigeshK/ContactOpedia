import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";

function ContactIndex() {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      isFavorite: false,
    },
  ]);
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">REMOVE CONTACT</div>
        </div>
        <div className="row py-2">
          <div className="col-12">Form to add new contact</div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <FavoriteContacts />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12">General contact</div>
        </div>
      </div>
    </div>
  );
}
export default ContactIndex;
