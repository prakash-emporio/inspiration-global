import axios from "axios";
import { useForm } from "react-hook-form";
import "./jobform.css";

export default function JobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Submit the form data to the API
    const backendAPI = import.meta.env.VITE_IG_BACKEND_API;
    const response = await axios.post(`${backendAPI}submit-form`, data);
    // Handle the response
    if (response.status === 200) {
      console.log("Form submitted successfully");
    } else {
      console.log("Form submission failed");
    }
  };

  function handleOnChange(e) {
    const input = e.target;
    const fileName = input.files[0]?.name || "No file chosen";
    input.setAttribute("title", fileName);
  }

  return (
    <form
      id="jobForm"
      className="row job-form-wrapper"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="py-3 col-12 py-md-5">
        <input
          type="text"
          className="form-control form-control-lg"
          id="name"
          placeholder="Name"
          maxLength={30}
          {...register("name", {
            required: { value: true, message: "Name is required" },
          })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>
      <div className="py-3 col-12 py-md-5">
        <input
          type="email"
          className="form-control form-control-lg"
          id="inputEmail4"
          placeholder="Email"
          maxLength={30}
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <div className="py-3 col-12 py-md-5">
        <input
          className="form-control form-control-lg"
          id="resume"
          type="file"
          accept=".pdf"
          placeholder="Add Your Resume"
          onChange={handleOnChange}
          {...register("resume", {
            required: { value: true, message: "Resume is required" },
          })}
        />
      </div>
      <div className="py-3 col-12 py-md-5">
        <label for="message" className="form-label job-form-label">
          Is there anything else you'd like to add in support of your
          application?
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="3"
          aria-label="With textarea"
          placeholder="Type here..."
          {...register("message", { required: true })}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>
      <div className="col-12">
        <button type="submit" className="btn job-card-btn-two">
          Send
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="ms-1 icon-svg"
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
  );
}
