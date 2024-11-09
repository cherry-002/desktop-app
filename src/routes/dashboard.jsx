import React from 'react';
import MainItem from '../components/mainItem';
import WordSets from '../components/wordSets';
import Profile from '../components/profile';
import Statistic from '../components/statistic';
import QuickStart from '../components/quickStart';

const Dashboard = () => {
  return (
    <section className="main-section">
      <WordSets />
      <Profile />
      <Statistic />
      <QuickStart />
    </section>
  );
};

export default Dashboard;
