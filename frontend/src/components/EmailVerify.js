import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/emailVerify.css';
import success from '../images/successIcon.png';

import api from "../api";

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `/chef/${param.id}/verify/${param.token}`;
				const { data } = await api.post(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className="email_container">
					<img src={success} alt="success_img" className="success_img" />
					<h1>Email verified successfully</h1>
					<Link to="/">
						<button className="green_btn">Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;