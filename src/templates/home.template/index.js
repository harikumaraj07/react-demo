import React from 'react';
import { container, header, card, loadingText } from './index.module.scss';

const Home = props => {

    const { handleScroll, tasks, loading } = props;

    return (
        <div className={container}>
            <header className={header}>
                <h1>Cards</h1>
            </header>
            <section onScroll={handleScroll}>
                <div>
                    {tasks.map(task => (
                        <div className={card} key={task.id}>
                            <h3>{task.title}</h3>
                            <p>{task.body}</p>
                        </div>
                    ))}
                    {
                        loading && <p className={loadingText}>{`Loading${tasks.length ? ' More' : ''} Cards...`}</p>
                    }
                </div>
            </section>
        </div>
    )
}

export default Home;