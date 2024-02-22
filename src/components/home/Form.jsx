import "../css/Form.css";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (d) => alert(JSON.stringify(d));

  return (
    <div className="form-wrapper">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 my-auto">
            <h1 className="form-heading">Let’s Talk</h1>
          </div>
          <form
            id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
            className="mb-5 col-12 col-lg-6 px-5"
          >
            <div className="row my-5">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="NAME"
                  aria-label="name"
                  {...register("name", { required: true })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                  aria-label="email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>
            <div className="input-group">
              <textarea
                className="form-control"
                aria-label="With textarea"
                placeholder="TELL US EVERYTHING"
                rows={5}
                {...register("message", { required: true })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                value="submit"
                className="btn form-btn mt-5"
              >
                Send
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ms-2 icon-svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
