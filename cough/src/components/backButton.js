import { useNavigate } from 'react-router-dom';
import './backButton.css';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div className="backButtonContainer">
        <div className="backButton" onClick={goBack}>Back</div>
    </div>
  );
}

export default BackButton;