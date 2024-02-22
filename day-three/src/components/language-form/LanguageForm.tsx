import React from "react";
import { Grid, Typography } from "@mui/material";
import { RadioButton } from "../radio-button/radio-button";

const TECNOLOGIES = {
  front: {
    react: {
      id: "REACT",
      name: "React",
    },
    vue: {
      id: "VUE",
      name: "Vue",
    },
  },
  back: {
    c: {
      id: "C",
      name: "C#",
    },
    java: {
      id: "JAVA",
      name: "Java",
    },
  },
};

type LanguageFormProps = {
  selectedStack: string;
  onAnswer: (response: string) => void;
};

export const LanguageForm: React.FC<LanguageFormProps> = ({
  onAnswer,
  selectedStack,
}) => {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Qual linguagem de programação deseja aprender?
      </Typography>

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {Object.entries(
          TECNOLOGIES[selectedStack.toLowerCase() as keyof typeof TECNOLOGIES]
        ).map(([, value]) => {
          return (
            <RadioButton
              key={value.name}
              id={value.id}
              name={value.name}
              onSelect={onAnswer}
            ></RadioButton>
          );
        })}
      </Grid>
    </>
  );
};
