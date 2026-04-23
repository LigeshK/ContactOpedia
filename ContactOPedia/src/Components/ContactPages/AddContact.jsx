function AddContact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      newsLetter: formData.get("newsLetter") === "on" ? true : false,
      contactMethod: formData.get("contactMethod"),
    };
    console.log(contactData);
  }
  return (
    <div className="border col-12 p-2 text-white">
      <form onSubmit={handleSubmit}>
        <div className="text-center text-white-50 h5 text-center">
          Add New Contact
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Enter phone"
          />
        </div>
        <div className="col-12">
          <input type="checkbox" name="newsLetter" />
          <label htmlFor="newsLetter">Subscribe to Newsletter</label>
        </div>
        <div className="col-12">
          Contact Method:
          <div>
            <label>
              <input type="radio" name="contactMethod" value="email" /> Email
            </label>
            <label>
              <input type="radio" name="contactMethod" value="phone" /> Phone
            </label>
          </div>
        </div>
        <div className="text-success">Contact added successfully!</div>
        <div className="text-danger">Failed to add contact!</div>
        <div className="col-6">
          <button type="submit" className="btn btn-primary btn-sm form-control">
            Add Contact
          </button>
        </div>
        {/* <div className="col-6">
          <button type="submit" className="btn btn-danger btn-sm form-control">
            Cancel
          </button>
        </div> */}
      </form>
    </div>
  );
}
export default AddContact;
