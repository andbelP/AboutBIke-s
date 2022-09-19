import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header className='nameOfPage'>
                <h1>Все про велосипеды! Вы на правильном пути</h1>
            </header>
            <section className='pageSection'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, aut consectetur cupiditate delectus dicta dolorum eligendi exercitationem explicabo fuga iste iure magni
                    minus nobis perspiciatis quo reiciendis sint. Aliquam aut consequatur, consequuntur dicta dolorem esse, fuga
                    illum ipsam laudantium magnam natus necessitatibus nihil numquam odit perspiciatis placeat praesentium quae
                    ratione sit vero. Cum dignissimos eveniet illum incidunt laboriosam modi veritatis voluptate! Blanditiis cupiditate
                    debitis ducimus hic minima perspiciatis possimus quasi quibusdam, similique tempore vel voluptas! Asperiores cum
                    est minus mollitia nobis numquam, tenetur voluptas voluptatibus. Aliquid assumenda at ea et fuga maxime quisquam repellat
                    sed totam voluptates? Asperiores, at, <em>sit</em>.
                </p>
                <div className="source">
                    <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4">Источник: Wikipedia</a>
                </div>
            </section>
            <section className='pageSection'>
                <p>
                    ВНИМАНИЕ!!! НА САЙТЕ ИМЕЕТСЯ ТОЛЬКО СТРАНИЦА "ВЫБОР ПЕРВОГО ВЕЛОСИПЕДА" <em>sit</em>.
                </p>
                <div className="source">
                    <a href="https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4">Источник: Wikipedia</a>
                </div>
            </section>

        </div>
    );
};

export default HomePage;