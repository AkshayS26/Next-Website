import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Link href="/">
            <Image src={"/aklogo.png"} width={150} height={40} alt="logo" />
          </Link>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
