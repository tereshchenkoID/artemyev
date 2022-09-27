import React, {Suspense} from "react";

import { routes } from '../routing/mainRoutes';

import styles from './index.module.scss'

import Routing from '../Components/Routing'
import Nav from "../Components/Nav";
import Header from "../Sections/Header";
import Footer from "../Sections/Footer";
import SectionPowered from "../Sections/SectionPowered";

import DecorLeft from './DecorLeft'
import DecorRight from './DecorRight'

function Index() {
  return (
    <main className={styles.block}>
      <div className={styles.decor}>
          <DecorLeft />
      </div>
      <div>
        <Nav/>
        <Header/>
        <Suspense
          fallback={
            <div>Preloader</div>
          }
        >
          <Routing {...{ routes }} />
        </Suspense>
        <SectionPowered />
        <Footer />
      </div>
      <div className={styles.decor}>
          <DecorRight />
      </div>
    </main>
  );
}

export default Index;
