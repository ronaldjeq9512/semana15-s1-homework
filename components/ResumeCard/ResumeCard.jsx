import './ResumeCard.css';

export const ResumeCard = () => {
  return (
    <div className="resume-card">
      <div className="overlay">
        <h1>Explore the sights of the Azores</h1>
        <p>A place where nature and adventure unite</p>
        <button>Book now</button>
      </div>
      <div className="bottom-buttons">
          <button className="round-button">&#x25C0;</button>
          <button className="round-button">&#x25B6;</button>
      </div>
    </div>
  );
};
