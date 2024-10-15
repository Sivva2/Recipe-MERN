import { Link } from "react-router-dom";
const TermsPage = () => {
  return (
    <>
      <h1>Terms and Conditions</h1>

      <Link to={"/signup"}>Back to Signup</Link>
    </>
  );
};
export default TermsPage;
