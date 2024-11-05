import React from 'react';
import QuickStartComponent from './quickStartComponent';

const QuickStart = () => {
  return (
    <section className='flex items-center justify-center'>
    <div className="flex flex-col gap-2 w-11/12">
      <h2 className='font-bold text-2xl'>Quick Start</h2>
      <QuickStartComponent
        title={'Exam'}
        time={20}
        img={'./image/cat/exam-cat.png'}
        gradient={
          'bg-gradient-to-r from-cyan-100 via-blue-300 to-indigo-400'
        }
      />
      <QuickStartComponent
        title={'Vocabulary'}
        time={10}
        img={'./image/cat/vocab-cat.png'}
        gradient={'bg-gradient-to-br from-purple-200 via-violet-300 to-indigo-500'}
      />
      <QuickStartComponent
        title={'Grammar'}
        time={20}
        img={'./image/cat/grammar-cat.png'}
        gradient={'bg-gradient-to-br from-green-100 via-emerald-400 to-teal-500'}
      />
    </div>
    </section>
  );
};

export default QuickStart;
