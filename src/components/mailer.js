import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "sriram-pothumani",
        "template_po4z5p9",
        e.target,
        "user_0ZyOrchgEZPoh31PXzsaH"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }
  return (
    <div class="container card py-3 justify-content-center lead bg-secondary text-white">
      <div class="card-body">
        <form onSubmit={sendEmail}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="user_email"
              class="form-control"
              id="exampleFormControlInput2"
            />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <input
            type="submit"
            class="btn btn-light"
            name="Send"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Mailer;
