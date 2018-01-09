import React from 'react';

const Score = ({correct, questions}) => {
  return <p>{correct}/{questions}</p>
}

export default Score;