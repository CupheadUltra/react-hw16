import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

export const SectionWrapper = styled.section`
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StatText = styled.p`
  margin: 4px 0;
`;

export const NotificationText = styled.p`
  color: #777;
`;
