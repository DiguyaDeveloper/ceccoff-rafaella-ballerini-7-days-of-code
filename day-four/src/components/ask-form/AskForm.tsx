import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

type AskFormProps = {
  onAnswer: (response: number) => void;
};

export const AskForm: React.FC<AskFormProps> = ({ onAnswer }) => {
  const [response, setResponse] = useState<number | null>(null);

  function handleAddFood() {
    if (!response) return;

    onAnswer(response);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Qual a sua tentativa?"
          onChange={(e) => setResponse(Number(e.target.value))}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleAddFood}>
          Responder!
        </Button>
      </Grid>
    </Grid>
  );
};
