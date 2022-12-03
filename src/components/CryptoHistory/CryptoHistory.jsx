import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { tableDate } from '../helper';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(item => (
          <Tr>
            <Td>{item.id}</Td>
            <Td>{item.price}</Td>
            <Td>{item.amount}</Td>
            <Td>{tableDate(item.date)}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};
