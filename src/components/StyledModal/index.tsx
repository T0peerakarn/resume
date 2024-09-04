import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

import {
  Box,
  Card,
  Divider,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface IStyledModal {
  isOpen: boolean;
  handleClose: () => void;
  title: string;
  children: ReactNode;
}

const StyledModal = ({
  isOpen,
  handleClose,
  title,
  children,
}: IStyledModal) => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: isTablet ? "50%" : "100%",
          transform: "translate(-50%, -50%)",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#666666", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Box
            sx={{ ml: "auto" }}
            onClick={handleClose}
            className="rounded-full hover:cursor-pointer hover:bg-[#DDDDDD] transition-all"
          >
            <IoClose size="1.5em" color="#666666" />
          </Box>
        </Box>
        <Divider sx={{ my: 0.5 }} />
        {children}
      </Card>
    </Modal>
  );
};

export default StyledModal;
