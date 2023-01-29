import { AccordionLabel } from './Accordion.styles'
import List from './presentational/List'
import ListItems from './presentational/ListItem'

type Item = {
  itemId: number;
  itemName: string;
  backgroundColor: string;
  color: string;
};

export const Accordion = ({
  labelText,
  title,
  items,
  updateItemClass,
}: {
  labelText: string;
  title: string;
  items: Array<Item>;
  updateItemClass: Function;
}) => {
  const getItemName = (id: number) => {
    let name = ''
    items.map((item: Item) => {
      if (item.itemId === id) {
        name = item.itemName
      }
    })
    return name
  }

  return (
    <>
      {labelText && <AccordionLabel>{labelText}</AccordionLabel>}
      <List title={title} itemLength={items.length}>
        <>
          {items.map((item: Item, index: number) => {
            return (
              <ListItems
                key={index}
                itemId={item['itemId']}
                itemName={getItemName(item['itemId'])}
                handleClickCallback={updateItemClass}
              />
            )
          })}
        </>
      </List>
    </>
  )
}

Accordion.displayName = 'NekoAccordion'
