import { FC, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Admin: FC = () => {
  const { password } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (password !== "1234") {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      Admin
    </div>
  );
};

export default Admin;
