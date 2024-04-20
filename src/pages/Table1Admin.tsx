import React from 'react';
import { Row } from '../components/table/Row';
import { Item } from '../components/table/Item';
import { Input } from '../components/input/Input';
import { useTable1Context } from '../contexts/table1Context';

export default function Table1AdminPage() {
  const { table, updateTableChange } = useTable1Context();

  return (
    <>
      <Row>
        <Item text={'Назва команди'} />
        <Item text={'Основний ф.'} />
        <Item text={'Додатковий ф.'} />
        <Item text={'Дизайн'} />
        <Item text={'Презентація'} />
        <Item text={'Загалом'} />
      </Row>

      {table.map((item) => (
        <Row key={item.id}>
          <Item text={item.commandName} />

          <Input value={item.mainF} onChange={(e) => updateTableChange({ e, id: item.id, row: 'mainF' })} />
          <Input value={item.optionF} onChange={(e) => updateTableChange({ e, id: item.id, row: 'optionF' })} />
          <Input value={item.design} onChange={(e) => updateTableChange({ e, id: item.id, row: 'design' })} />
          <Input
            value={item.presentation}
            onChange={(e) => updateTableChange({ e, id: item.id, row: 'presentation' })}
          />

          <Item text={item.sum} />
        </Row>
      ))}
    </>
  );
}
