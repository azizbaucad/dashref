import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

export const DMenuButton = ({
  rightIcon,
  leftIcon,
  borderWidth,
  pl,
  onClick,
  colorScheme,
  bgColor,
  color,
  name,
  menus,
  _hover,
  _active,
}) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        {...{
          _active,
          _hover,
          rightIcon,
          leftIcon,
          borderWidth,
          pl,
          onClick,
          colorScheme,
          bgColor,
          color,
        }}
      >
        {name}
      </MenuButton>
      <MenuList>
        {menus.map((item, i) => (
          <MenuItem
            icon={item.icon}
            onClick={() => onClick(item.value)}
            key={i}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
