import { useState } from "react";
import api from "../api";
import styles from "../styles/forgetPassword.module.css";
import Message from "./Message";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `/passReset`;
			const { data } = await api.post(url,{ email });
			setMsg(data.message);
			setError("");
			setMsg("Password ResSet Link Sent To your email")
			window.alert("Password ResSet Link Sent To your email")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
		
	};

	return (
		<div className={styles.container}>
			{msg && <Message variant="success">{msg}</Message>}
			{error && <Message variant="danger">{error}</Message>}
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Forgot Password</h1>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className={styles.input}
				/>
			
				
				<button type="submit" className={styles.green_btn}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;