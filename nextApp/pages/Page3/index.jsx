import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../../styles/Table.module.css";
import Link from "next/link";

const columns = [
  {
    id: 1,
    label: "#",
    minWidth: 128,
    align: "center",
    border: "1px solid #000",
    borderRight: "1px solid rgba(0, 0, 0, 0.13)",
    borderLeft: "1px solid #000",
    padding: " 19px 4px",
  },

  {
    id: 2,
    label: "店舗名",
    minWidth: 254,
    align: "center",
    border: "1px solid #000",
    borderRight: "1px solid rgba(0, 0, 0, 0.13)",
    borderLeft: "0px",
    padding: " 19px 4px",
  },
  {
    id: 3,
    label: "エリア",
    minWidth: 248,
    align: "center",
    border: "1px solid #000",
    borderRight: "1px solid rgba(0, 0, 0, 0.13)",
    borderLeft: "0px",
    padding: " 19px 4px",
  },

  {
    id: 4,
    label: "",
    minWidth: 165,
    align: "center",
    padding: " 19px 4px",
    border: "1px solid #000",
    borderLeft: "0px",
    borderRight: "1px solid #000",
  },
];

const rows = [
  {
    id: 1,
    value1: "AA",
    value2: "渋谷",
    value3: "ZAA西東京G",
    value4: "編集　　削除",
  },
  {
    id: 2,
    value1: "AB",
    value2: "銀座",
    value3: "ZAB東東京G",
    value4: "編集　　削除",
  },
  {
    id: 3,
    value1: "AC",
    value2: "池袋",
    value3: "ZAC南東京G",
    value4: "編集　　削除",
  },
  {
    id: 4,
    value1: "AD",
    value2: "銀座",
    value3: "ZAD北東京G",
    value4: "編集　　削除",
  },
  {
    id: 5,
    value1: "AE",
    value2: "新宿",
    value3: "ZAA西東京G",
    value4: "編集　　削除",
  },
];

export default function Page3({ pageComponentProps }) {
  return (
    <Fragment>
      <Box {...pageComponentProps}>
        <Container>
          <Navbar />

          <div className={styles.tableContainer}>
            <TableContainer
              sx={{ maxWidth: 795 }}
              style={{ borderBottom: "1px solid #000" }}>
              <Table aria-label="table">
                <TableHead>
                  <TableRow>
                    <TableCell className={styles.tableHeaderLt} colSpan={2}>
                      店舗一覧
                    </TableCell>
                    <TableCell
                      className={styles.tableHeaderRt}
                      align="center"
                      colSpan={1}>
                      新規登録
                    </TableCell>
                    <TableCell
                      className={styles.tableHeaderRt}
                      align="center"
                      colSpan={1}>
                      インポート
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          top: 57,
                          minWidth: column.minWidth,
                          border: column.border,
                          borderRight: column.borderRight,
                          borderLeft: column.borderLeft,

                          padding: column.padding,
                        }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody className={styles.tableBody}>
                  {rows.map((row) => {
                    return (
                      <TableRow key={row.id}>
                        <TableCell
                          align="center"
                          style={{
                            borderRight: "1px solid rgba(0, 0, 0, 0.13)",
                            borderLeft: "1px solid #000",
                            padding: "19px 4px",
                          }}>
                          {row.value1}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            borderRight: "1px solid rgba(0, 0, 0, 0.13)",
                            padding: "19px 4px",
                          }}>
                          {row.value2}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            borderRight: "1px solid rgba(0, 0, 0, 0.13)",
                            padding: "19px 4px",
                          }}>
                          {row.value3}
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{
                            borderRight: "1px solid #000",

                            padding: "19px 4px",
                          }}>
                          {row.value4}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className={styles.tableBtnStyles}>
            <Link href="/" passHref className={styles.tableButton}>
              <a className={styles.tableButton} rel="noopener noreferrer">
                {" "}
                戻る
              </a>
            </Link>
          </div>
        </Container>
      </Box>
    </Fragment>
  );
}

// export async function getServerSideProps(ctx) {
//   return {
//     props: {
//       pageComponentProps,
//     },
//   };
// }
