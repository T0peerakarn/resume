import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { menus, IMenu } from "@/constants/menu";

interface Props {
  currentMenu: string;
  setCurrentMenu: (newMenu: string) => void;
}

const MenuBar: React.FC<Props> = (props) => {
  return (
    <Card
      sx={{ py: 4, backgroundColor: "#F9F5F6", position: "sticky", top: 32 }}
      className="rounded-lg"
    >
      <List>
        {menus.map((menu: IMenu) => (
          <ListItem key={menu.id} disablePadding>
            <ListItemButton
              onClick={() => props.setCurrentMenu(menu.title)}
              sx={{ transition: "color" }}
              className="hover:bg-[#FDCEDF]"
            >
              <ListItemText
                primary={menu.title}
                primaryTypographyProps={{ fontWeight: "bold", align: "center" }}
                className={
                  props.currentMenu === menu.title
                    ? "text-[#FF8E9E]"
                    : "text-[#666666]"
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default MenuBar;
