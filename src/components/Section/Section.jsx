import { SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};

export default Section;
