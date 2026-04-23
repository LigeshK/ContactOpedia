function Contact(props) {
  console.log(props);

  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderradius: "10px", border: "1px solid #555" }}
    >
      <div className="col-2 pt-2">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          alt={props.contact.name}
          style={{ width: "80%" }}
        />
      </div>
      <div className="col-6 text-warning pt-0">
        <span className="h5">{props.contact.name}</span>
        <br />
        <span className="text-white-50">{props.contact.email}</span>
        <br />
        <span className="text-white-50">{props.contact.phone}</span>
      </div>
      <div className="col-1 pt-2">
        <button
          className="{`btn btn-sm m-1 
        ${props.contact.isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}"
          onClick={() => props.favouriteClick(props.contact)}
        >
          <i className="bi bi-star-fill" />
        </button>
      </div>
      <div className="col-3 pt-2">
        <button className="btn btn-info btn-sm m-1">
          <i className="bi bi-pencil-square" />
        </button>
        <button className="btn btn-danger btn-sm m-1">
          <i
            className="bi bi-trash-fill"
            onClick={() => props.removeClick(props.contact.id)}
          />
        </button>
      </div>
    </div>
  );
}
export default Contact;
