import { useNavigate } from "react-router-dom";
const DetailPage = ({ characters }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/home");
  };

  return (
    <div>
      <button onClick={handleOnClick}>Back</button>
      <h1>Soy el detailPage</h1>
    </div>
  );
};

export default DetailPage;
