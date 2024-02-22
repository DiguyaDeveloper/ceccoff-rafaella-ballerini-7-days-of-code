import { useState } from "react";
import { Container } from "@mui/material";
import { StackForm } from "./components/stack-from/StackForm";
import { LanguageForm } from "./components/language-form/LanguageForm";
import { SpecForm } from "./components/spec-form/SpecForm";
import { TechSelectedTable } from "./components/tech-selected-table/TechSelectedTable";
import { TechForm } from "./components/tech-form/TechForm";

export function App() {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string | null
  >(null);
  const [techSelected, setSelectedTech] = useState<string | null>(null);

  return (
    <Container>
      <StackForm onAnswer={setSelectedStack} />

      {selectedStack && (
        <LanguageForm
          selectedStack={selectedStack}
          onAnswer={setSelectedLanguage}
        />
      )}

      {selectedLanguage && <SpecForm onAnswer={setSelectedSpecialization} />}

      {selectedSpecialization && <TechForm onAnswer={setSelectedTech} />}

      {techSelected && <TechSelectedTable newTech={techSelected} />}
    </Container>
  );
}
