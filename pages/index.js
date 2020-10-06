import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to LinkGraph</h1>
    </Layout>
  );
}
