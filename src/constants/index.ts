import Happy from '../assets/img/happy.svg';
import HappySelected from '../assets/img/happySelected.svg';
import Calm from '../assets/img/calm.svg';
import CalmSelected from '../assets/img/calmSelected.svg';
import Depressed from '../assets/img/depressed.svg';
import DepressedSelected from '../assets/img/depressedSelected.svg';
import Sad from '../assets/img/sad.svg';
import SadSelected from '../assets/img/sadSelected.svg';
import Swings from '../assets/img/swings.svg';
import SwingsSelected from '../assets/img/swingsSelected.svg';

export const icons = [
  {
    Selected: HappySelected,
    Unselected: Happy,
    text: 'Радостное',
  },
  {
    Selected: CalmSelected,
    Unselected: Calm,
    text: 'Спокойное',
  },
  {
    Selected: SwingsSelected,
    Unselected: Swings,
    text: 'Перепады настроения',
  },
  {
    Selected: SadSelected,
    Unselected: Sad,
    text: 'Грустное',
  },
  {
    Selected: DepressedSelected,
    Unselected: Depressed,
    text: 'Подавленное',
  },
];

export const titles = [
  {title: 'отстутствует', color: '#A1A9B5'},
  {
    title: 'легкий',
    color: '#FFCE51',
  },
  {
    title: 'средний',
    color: '#FFA73F',
  },
  {
    title: 'сильный',
    color: '#FC7E56',
  },
  {
    title: 'невыносимый',
    color: '#FC5656',
  },
];

export const bars = [
  {
    color: '#FFCE51',
  },
  {
    color: '#FFA73F',
  },
  {
    color: '#FC7E56',
  },
  {
    color: '#FC5656',
  },
];
