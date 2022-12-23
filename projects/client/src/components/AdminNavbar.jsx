import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import homeLogo from "../assets/home.png";
import productLogo from "../assets/product.png";
import orderLogo from "../assets/order.png";
import otherLogo from "../assets/other_list.png";
import OtherMenuBar from "./OtherMenuBar";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  // const [menu, setMenu] = useState([
  //   {
  //     icon: homeLogo,
  //     text: "Home",
  //     link: "/admin/dashboard",
  //   },
  //   {
  //     icon: productLogo,
  //     text: "Product",
  //     link: "/admin/product",
  //   },
  //   {
  //     icon: orderLogo,
  //     text: "Order",
  //     link: "/admin/transaction",
  //   },
  // ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();

  const closeModal = () => {
    setModalIsOpen(false);

    document.body.style.overflow = "unset";
  };

  const openModal = () => {
    setModalIsOpen(true);

    document.body.style.overflow = "hidden";
  };

  // const renderIcon = () => {
  //   return menu.map((val) => {
  //     return (
  //       <GridItem h="65px" key={val.icon}>
  //         {/* taro key di setiap map yang bersifat unik */}
  //         <Link to={val.link}>
  //           <Box display={"grid"}>
  //             <Image
  //               src={val.icon}
  //               alt="logo"
  //               height={"40px"}
  //               justifySelf={"center"}
  //             />
  //             <Text textAlign={"center"} fontFamily={"roboto"} color={"black"}>
  //               {val.text}
  //             </Text>
  //           </Box>
  //         </Link>
  //       </GridItem>
  //     );
  //   });
  // };

  return (
    <>
      <Box
        backgroundColor={"#E07A5F"}
        height={"75px"}
        position={"fixed"}
        bottom={"0"}
        right={"0"}
        left={"0"}
        fontWeight={"bold"}
        maxWidth={"480px"}
        margin={"auto"}
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={1} margin={"5px"}>
          {/* {renderIcon()} */}
          {location.pathname === "/admin/dashboard" ? (
            <GridItem h="65px">
              <Link to={"/admin/dashboard"}>
                <Box display={"grid"} bgColor={"#F4F1DE"} borderRadius={"5px"}>
                  <Image
                    src={homeLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Home
                  </Text>
                </Box>
              </Link>
            </GridItem>
          ) : (
            <GridItem h="65px">
              <Link to={"/admin/dashboard"}>
                <Box display={"grid"}>
                  <Image
                    src={homeLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Home
                  </Text>
                </Box>
              </Link>
            </GridItem>
          )}
          {location.pathname === "/admin/product" ? (
            <GridItem h="65px">
              <Link to={"/admin/product"}>
                <Box display={"grid"} bgColor={"#F4F1DE"} borderRadius={"5px"}>
                  <Image
                    src={productLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Product
                  </Text>
                </Box>
              </Link>
            </GridItem>
          ) : (
            <GridItem h="65px">
              <Link to={"/admin/product"}>
                <Box display={"grid"}>
                  <Image
                    src={productLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Product
                  </Text>
                </Box>
              </Link>
            </GridItem>
          )}
          {location.pathname === "/admin/transaction" ? (
            <GridItem h="65px">
              <Link to={"/admin/transaction"}>
                <Box display={"grid"} bgColor={"#F4F1DE"} borderRadius={"5px"}>
                  <Image
                    src={orderLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Order
                  </Text>
                </Box>
              </Link>
            </GridItem>
          ) : (
            <GridItem h="65px">
              <Link to={"/admin/transaction"}>
                <Box display={"grid"}>
                  <Image
                    src={orderLogo}
                    alt="logo"
                    height={"40px"}
                    justifySelf={"center"}
                  />
                  <Text
                    textAlign={"center"}
                    fontFamily={"roboto"}
                    color={"black"}
                  >
                    Order
                  </Text>
                </Box>
              </Link>
            </GridItem>
          )}
          {location.pathname === "/admin/statistic" ||
          location.pathname === "/admin/voucher" ||
          location.pathname === "/admin/product-mutation" ? (
            <GridItem h="65px" display={"grid"} onClick={openModal}>
              <Box display={"grid"} bgColor={"#F4F1DE"} borderRadius={"5px"}>
                <Image
                  src={otherLogo}
                  alt="logo"
                  height={"40px"}
                  justifySelf={"center"}
                />
                <Text textAlign={"center"} fontFamily={"roboto"}>
                  Other
                </Text>
              </Box>
            </GridItem>
          ) : (
            <GridItem h="65px" display={"grid"} onClick={openModal}>
              <Box display={"grid"}>
                <Image
                  src={otherLogo}
                  alt="logo"
                  height={"40px"}
                  justifySelf={"center"}
                />
                <Text textAlign={"center"} fontFamily={"roboto"}>
                  Other
                </Text>
              </Box>
            </GridItem>
          )}
        </Grid>
        <OtherMenuBar isOpen={modalIsOpen} closeModal={closeModal} />
      </Box>
    </>
  );
};

export default AdminNavbar;
