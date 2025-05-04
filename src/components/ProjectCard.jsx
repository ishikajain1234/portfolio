import React, { useState } from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, image, description, demo, code }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardWrapper>
      <CardContainer onClick={() => setFlipped(!flipped)} flipped={flipped}>
        {/* Front Side */}
        <CardFront>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <button>View Details</button>
        </CardFront>

        {/* Back Side */}
        <CardBack>
          <p>{description}</p>
          <div className="buttons">
            <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
          </div>
        </CardBack>
      </CardContainer>
    </CardWrapper>
  );
};

export default ProjectCard;

// Styled Components
const CardWrapper = styled.div`
  perspective: 1000px;
`;

const CardContainer = styled.div`
  width: 280px;
  height: 380px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  cursor: pointer;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

const SharedSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const CardFront = styled(SharedSide)`
  background: linear-gradient(to bottom, #000000, #444444);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 90%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
  }

  h2 {
    margin: 1rem 0 0.5rem;
    font-size: 1.5rem;
  }

  button {
    background: #24243e;
    color: white;
    border: none;
    padding: 8px 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;

    &:hover {
      background: #e13e77;
    }
  }
`;

const CardBack = styled(SharedSide)`
  background: linear-gradient(to bottom, #1e1e1e, #444444);
  color: white;
  transform: rotateY(180deg);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 0.95rem;
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;

    a {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      text-decoration: none;
      background-color: #333;
      color: white;
      font-weight: bold;
      transition: background 0.3s;

      &:hover {
        background-color: #555;
      }
    }
  }
`;
