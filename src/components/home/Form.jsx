import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import "../css/Form.css";
export default function Form() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		// Submit the form data to the API
		const backendAPI = import.meta.env.VITE_IG_BACKEND_API;
		const response = await axios.post(`${backendAPI}store_form_data`, data);
		// Handle the response
		if (response.status === 200) {
			toast.success("Form Submitted Successfully!");
			reset();
		} else {
			console.log("Form submission failed");
		}
	};

	return (
		<div className="form-wrapper">
			<div className="container mt-0 mb-0">
				<div className="row g-0">
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
									maxLength={30}
									autoComplete="on"
									autoSave="on"
									{...register("name", {
										required: {
											value: true,
											message: "Name is Required",
										},
									})}
								/>
								{errors.name && (
									<p className="error-message">
										{errors.name.message}
									</p>
								)}
							</div>
							<div className="col">
								<input
									type="email"
									className="form-control"
									placeholder="EMAIL"
									aria-label="email"
									autoComplete="on"
									autoSave="on"
									maxLength={30}
									{...register("email", {
										required: {
											value: true,
											message: "Email is Required",
										},
									})}
								/>
								{errors.email && (
									<p className="error-message">
										{errors.email.message}
									</p>
								)}
							</div>
						</div>
						<div className="input-group">
							<textarea
								className="form-control"
								aria-label="With textarea"
								placeholder="TELL US EVERYTHING"
								autoComplete="on"
								autoSave="on"
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
									xmlns="https://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									className="icon-svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5.21967 14.7803C5.51256 15.0732 5.98744 15.0732 6.28033 14.7803L13.5 7.56066V13.25C13.5 13.6642 13.8358 14 14.25 14C14.6642 14 15 13.6642 15 13.25V5.75C15 5.33579 14.6642 5 14.25 5H6.75C6.33579 5 6 5.33579 6 5.75C6 6.16421 6.33579 6.5 6.75 6.5H12.4393L5.21967 13.7197C4.92678 14.0126 4.92678 14.4874 5.21967 14.7803Z"
									/>
								</svg>
							</button>
							<Toaster
								containerStyle={{
									top: 200,
									left: 0,
									bottom: 0,
									right: 0,
								}}
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
