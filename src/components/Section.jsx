import { SectionWrapper, Title } from "./styles";

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      {children}
    </SectionWrapper>
  );
}
