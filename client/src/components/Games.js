import React from 'react';
import Game from './Game';
import { useGlobalContext } from '../context';
const Games = () => {
  const { games } = useGlobalContext();
  return (
    <section className='bg-transparent h-auto transform -translate-y-32'>
      <div className='container bg-light rounded-t-xl lg:mx-auto mx-3'>
        <h1
          className='
            sm:text-7xl
            text-center text-5xl
            font-homenaje font-bold
            tracking-widest
            mt-14
            mb-5
            text-hero
          '
        >
          Assassin's Creed Games
        </h1>
        <div className='sm:w-1/4 w-1/2 rounded h-under bg-light-hero mx-auto mb-9'></div>
        <p
          className='
            sm:px-10
            px-4
            sm:pt-4
            pt-0
            pb-10
            text-gray-800
            font-homenaje font-bold
            sm:text-xl
            text-center text-lg
            leading-8
            tracking-wider
          '
        >
          Assassin's Creed is an open-world action-adventure stealth video game
          franchise published by Ubisoft and developed mainly by its studio
          Ubisoft Montreal using the game engine Anvil and its more advanced
          derivatives. Created by Patrice Désilets, Jade Raymond, and Corey May,
          the Assassin's Creed series depicts a fictional millennia-old struggle
          between the Assassins, who fight for peace and free will, and the
          Templars, who desire peace through order and control.
        </p>
        <div
          className='
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            grid-cols-1
            gap-8
            justify-center
            items-center
            sm:p-6
            p-3
            font-homenaje
            tracking-widest
          '
        >
          {games.map((game) => (
            <Game key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
