import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Fragment } from "react";
import styles from "../../styles/Nav.module.css";

export default function Navbar({ pageComponentProps }) {
  return (
    <Fragment>
      <Box {...pageComponentProps} style={{ marginTop: "38px" }}>
        {/* top items */}
        <div className={styles.navTopItem}>
          <h1 className={styles.logo}>Nプロシステム</h1>
          <div>
            <div
              style={{ display: "flex", gap: "42px", paddingBottom: "15px" }}>
              <h1 className={styles.navRtText}>NO.0000</h1>
              <h1 className={styles.navRtText}>山田　太郎</h1>
            </div>
            <div>
              <h1 className={styles.navRtText}>今月のランク　プラチナ</h1>
            </div>
          </div>
        </div>

        {/* bottom menu items */}
        <div>
          <Grid container className={styles.menu}>
            <Grid item sm={6} md={3} className={styles.menuItem}>
              ランキング
            </Grid>
            <Grid item sm={6} md={3} className={styles.menuItem}>
              売上管理
            </Grid>
            <Grid item sm={6} md={3} className={styles.menuItem}>
              顧客一覧
            </Grid>
            <Grid item sm={6} md={3} className={styles.menuItem}>
              管理
            </Grid>
          </Grid>
        </div>
      </Box>
    </Fragment>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      pageComponentProps,
    },
  };
}
