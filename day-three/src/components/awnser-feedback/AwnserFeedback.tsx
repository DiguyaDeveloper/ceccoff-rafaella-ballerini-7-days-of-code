import React from "react";
import { Alert, Stack } from "@mui/material";

type AwnserProps = {
  selectedStack: string;
  selectedLanguage: string;
  selectedSpecialization: string;
};

export const AwnserFeedback: React.FC<AwnserProps> = ({}) => {
  return (
    <Stack spacing={2}>
      <>
        <Alert severity="success">Parabéns, você adivinou o número:</Alert>
      </>
    </Stack>
  );
};
