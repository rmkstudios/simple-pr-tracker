import { useState } from "react";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alert, AlertIcon } from "@chakra-ui/react";

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        inputEmail,
        inputPassword
      );
      setLoginError(false);
      setInputEmail("");
      setInputPassword("");
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <form className="login" onSubmit={login}>
      {!auth.currentUser ? (
        <>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input
              placeholder="Email"
              bg="white"
              borderColor="border"
              fontSize=".9em"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<InfoOutlineIcon color="gray.300" />}
            />
            <Input
              placeholder="Password"
              bg="white"
              borderColor="border"
              fontSize=".9em"
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </InputGroup>
          <Button type="submit" colorScheme="green">
            Login
          </Button>
          {loginError ? (
            <Alert status="warning" variant="subtle" className="alert span3">
              <AlertIcon />
              Username and password did not match, please try again.
            </Alert>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </form>
  );
}

export default Login;
