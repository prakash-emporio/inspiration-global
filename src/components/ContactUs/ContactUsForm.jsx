import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUsForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		// Submit the form data to the API
		const backendAPI = import.meta.env.VITE_IG_BACKEND_API;
		try {
			const response = await axios.post(
				`${backendAPI}store_form_data`,
				data
			);
			// Handle the response
			if (response.status === 200) {
				toast.success("Form Submitted Successfully!");
				reset();
			} else {
				console.log("Form submission failed");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<form
			id="jobForm"
			className="row job-form-wrapper"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="col-12 py-3">
				<input
					type="text"
					className="form-control form-control-lg"
					id="name"
					placeholder="Full Name *"
					{...register("name", {
						required: { value: true, message: "Name is required" },
						minLength: 3,
						maxLength: 20,
					})}
				/>
				{errors.name && (
					<p className="error-message">{errors.name.message}</p>
				)}
			</div>
			<div className="col-12 py-3">
				<input
					type="email"
					className="form-control form-control-lg"
					id="inputEmail4"
					placeholder="Email Id *"
					{...register("email", {
						required: { value: true, message: "Email is required" },
						validate: {
							matchPattern: (value) =>
								/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
									value
								) || "Email address must be a valid address",
						},
					})}
				/>
				{errors.email && (
					<p className="error-message">{errors.email.message}</p>
				)}
			</div>
			<div className="col-12 py-3">
				<input
					className="form-control form-control-lg"
					id="phone"
					type="tel"
					placeholder="Phone *"
					{...register("phone", {
						required: { value: true, message: "Phone is Required" },
						minLength: 10,
						maxLength: 14,
					})}
				/>
				{errors.email && (
					<p className="error-message">{errors.phone.message}</p>
				)}
			</div>
			<div className="col-12 py-5">
				<textarea
					id="message"
					className="form-control form-control-lg"
					aria-label="With textarea"
					placeholder="Type your message here..."
					{...register("message", {
						required: {
							value: true,
							message: "Please write your message here",
						},
					})}
				/>
				{errors.message && (
					<p className="error-message">{errors.message.message}</p>
				)}
			</div>
			<div className="col-12">
				<button
					type="submit"
					className="btn job-card-btn-two"
					id="liveToastBtn"
					onSubmit={() => console.log("Form submitted")}
				>
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
	);
}
