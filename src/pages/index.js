import React from 'react';
import * as styles from '../styles/home.module.css';
import Layout from '../components/Layout';
import {Link} from 'gatsby';

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Bhutan.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth: '100%', height: '450px', marginTop: '60px'}}/>
      </section>
    </Layout>
  );
}
