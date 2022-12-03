import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const arrOfIcons = [<FaRegThumbsUp/>, <MdPeople/>, <MdOutlineProductionQuantityLimits/>, <GiTreeDoor/>];

export const Statistics = ({stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>{ title}</StatisticTitle>}
  
      <StatisticsList> 
        {stats.map((stat, idx) => <StatisticItem key={stat.id} icon={arrOfIcons[idx]} title={ stat.title} total={stat.total} />)}
</StatisticsList>
    </>
  );
};
