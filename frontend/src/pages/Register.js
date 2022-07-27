import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link} from "react-router-dom";
import api from "../api";
import Message from "../components/Message";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [bio,setBio] = useState()
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await api.post("/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await api.post("/chef/register", {
        name,
        email,
        password,
        profilePicture:image,
        details:bio
      });
      if(result){
        setMsg(result.data.message)
        setError("")
      } 

    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
      setMsg("")
    }
  };
  return (
    <Container>
      <h1>Sign Up</h1>
       {error && <Message variant="danger">{error}</Message>}
       {msg && <Message variant="success">{msg}</Message>}
      <Form onSubmit={handelSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label> Profile Picture:</Form.Label>

          <Form.Control
            type="file"
            // value={image}
            id="image-file"
            label="choose File"
            name="image"
            onChange={handleImageUpload}
          ></Form.Control>
          {uploading && "Uploading"}
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            required={true}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Bio:</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            placeholder="Enter Bio"
            value={bio}
            required={true}
            onChange={(e) => setBio(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark" className="mt-3">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          All Ready Have Account? <Link to="/">Login</Link>
        </Col>
      </Row>
    </Container>
  );
};
