import styled from 'styled-components'

import { iconsAndVars } from '@/styles'

interface CategoriesTableStylesProps {
  theme: {
    text: string
  }
}

export const CategoriesTableContainer = styled.div<CategoriesTableStylesProps>`
  position: relative;
  margin: 5% 3%;

  @media (min-width: ${iconsAndVars.bpBart}) {
    margin: 2%;
  }

  @media (min-width: ${iconsAndVars.bpHomer}) {
    margin: 2em auto;
  }

  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;

    @media (min-width: ${iconsAndVars.bpBart}) {
      font-size: 0.9em;
    }

    @media (min-width: ${iconsAndVars.bpMarge}) {
      font-size: 1em;
    }

    thead {
      position: absolute;
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;

      @media (min-width: ${iconsAndVars.bpBart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }

      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};

        &:first-of-type {
          text-align: center;
        }
      }
    }

    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }

    tr {
      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-row;
      }
    }

    th,
    td {
      padding: 0.5em;
      vertical-align: middle;

      @media (min-width: ${iconsAndVars.bpLisa}) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-cell;
        padding: 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpMarge}) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: ${iconsAndVars.bpHomer}) {
        padding: 0.75em;
      }
    }

    tbody {
      @media (min-width: ${iconsAndVars.bpBart}) {
        display: table-row-group;
      }

      tr {
        margin-bottom: 1em;

        @media (min-width: ${iconsAndVars.bpBart}) {
          display: table-row;
          border-width: 1px;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        &:nth-of-type(even) {
          @media (min-width: ${iconsAndVars.bpBart}) {
            background-color: rgba(78, 78, 78, 0.12);
          }
        }
      }

      th[scope='row'] {
        @media (min-width: ${iconsAndVars.bpLisa}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
        }

        @media (min-width: ${iconsAndVars.bpBart}) {
          background-color: transparent;
          text-align: center;
          color: ${({ theme }) => theme.text};
        }
      }

      .contentCell {
        text-align: right;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid rgba(161, 161, 161, 0.32);

        @media (min-width: ${iconsAndVars.bpBart}) {
          justify-content: center;
          border-bottom: none;
        }
      }

      td {
        text-align: right;

        @media (min-width: ${iconsAndVars.bpBart}) {
          border-bottom: 1px solid rgba(161, 161, 161, 0.32);
          text-align: center;
        }
      }

      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;

        @media (min-width: ${iconsAndVars.bpLisa}) {
          font-size: 0.9em;
        }

        @media (min-width: ${iconsAndVars.bpBart}) {
          content: none;
        }
      }
    }
  }
`
