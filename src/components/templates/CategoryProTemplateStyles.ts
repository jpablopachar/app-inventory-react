import styled from 'styled-components'

interface CategoryProTemplateStylesProps {
  theme: {
    bgTotal: string;
    text: string;
  };
}

export const CategoryProTemplateContainer = styled.div<CategoryProTemplateStylesProps>`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgTotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 60px
    "main" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .area1 {
    grid-area: area1;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content:end;

  }

  .main {
    grid-area: main;
  }
`

export const ContentFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:end;
  width:100%;
  gap:15px;
`
