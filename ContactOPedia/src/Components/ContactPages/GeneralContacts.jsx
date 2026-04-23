import Contact from "./Contact";
function GeneralContacts(props) {
  return (
    <div
      className="col-12 p-2"
      style={{ border: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">General Contacts</div>

      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact
            favouriteClick={props.favouriteClick}
            removeClick={props.removeClick}
            contact={contact}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
export default GeneralContacts;
