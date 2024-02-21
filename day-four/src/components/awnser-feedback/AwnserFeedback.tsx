import React from "react";
import { Alert, Button, Stack } from "@mui/material";

type AwnserProps = {
  selectedNumber: number;
  correctlyNumber: number;
  attemptsCount: number;
  onPlayAgain: () => void;
  onRetry: () => void;
};

export const AwnserFeedback: React.FC<AwnserProps> = ({
  selectedNumber,
  correctlyNumber,
  attemptsCount,
  onRetry,
  onPlayAgain,
}) => {
  const isCorrectly = selectedNumber === correctlyNumber;

  return (
    <Stack spacing={2}>
      {isCorrectly && (
        <>
          <Alert severity="success">
            Parabéns, você adivinou o número: {correctlyNumber}
          </Alert>
          <Button variant="contained" onClick={onPlayAgain}>
            Jogar novamente!
          </Button>
        </>
      )}

      {!isCorrectly && attemptsCount <= 2 && (
        <>
          <Alert severity="warning">
            Infelizmente você errou! Tentar novamente? Tentativa:{" "}
            {attemptsCount}
            Você tem no máximo 2 tentativas!
          </Alert>
          <Button variant="contained" onClick={onRetry}>
            Tentar novamente!
          </Button>
        </>
      )}

      {!isCorrectly && attemptsCount > 2 && (
        <>
          <Alert severity="error">
            Infelizmente você errou e perdeu todas suas tentativas!
          </Alert>
          <Button variant="contained" onClick={onPlayAgain}>
            Jogar novamente!
          </Button>
        </>
      )}
    </Stack>
  );
};
