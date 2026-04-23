import { useState } from "react";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "098-765-4321",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      phone: "555-555-5555",
      isFavorite: false,
    },
  ]);

  function handletoggleFavorite(contact) {
    console.log("Toggle favorite for contact:", contact);
    setContactList((prevList) =>
      prevList.map((c) => {
        if (c.id === contact.id) {
          return { ...c, isFavorite: !c.isFavorite };
        }
        return c;
      }),
    );
  }
  function handleDeleteContact(contactid) {
    console.log("Delete contact:", contactid);
    return setContactList((prevList) =>
      prevList.filter((c) => c.id !== contactid),
    );
  }
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row py-3">
        <div className="row py-2">
          <div className="col-6">ADD CONTACT</div>
          <div className="col-6">REMOVE CONTACT</div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <AddContact />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <FavoriteContacts
              favouriteClick={handletoggleFavorite}
              removeClick={handleDeleteContact}
              contacts={contactList.filter((contact) => contact.isFavorite)}
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <GeneralContacts
              favouriteClick={handletoggleFavorite}
              removeClick={handleDeleteContact}
              contacts={contactList.filter((contact) => !contact.isFavorite)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactIndex;
