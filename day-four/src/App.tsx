import { useState } from "react";
import { Container, Typography } from "@mui/material";
import { AskForm } from "./components/ask-form/AskForm";
import { AwnserFeedback } from "./components/awnser-feedback/AwnserFeedback";

export function App() {
  const [awnser, setAwnser] = useState<number | null>(null);
  const [attemptsCount, setAttemptsCount] = useState<number>(1);
  const [randomNumber, setRandomNumber] = useState<number>(
    Math.floor(Math.random() * 10) + 1
  );

  function handlePlayAgain() {
    setAttemptsCount(1);
    setAwnser(null);
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  }

  function handleRetry() {
    setAwnser(null);
    setAttemptsCount(attemptsCount + 1);
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Lista de Alimentos
      </Typography>
      {!awnser && <AskForm onAnswer={setAwnser} />}
      {awnser && (
        <AwnserFeedback
          selectedNumber={awnser}
          correctlyNumber={randomNumber}
          onRetry={() => handleRetry()}
          onPlayAgain={() => handlePlayAgain()}
          attemptsCount={attemptsCount}
        />
      )}
    </Container>
  );
}
