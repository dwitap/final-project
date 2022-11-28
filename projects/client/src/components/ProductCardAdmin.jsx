import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCardAdmin = () => {
  const truncate = (string, length) => {
    if (string.length > length) return string.substring(0, length) + "...";
    else return string;
  };

  const lengthTitle = 20;
  const lengthDiscount = 20;

  return (
    <>
      <Box marginTop={"20px"} mx={"20px"}>
        <Flex
          height={"auto"}
          fontFamily={"roboto"}
          color={"black"}
          border={"2px solid #E07A5F"}
          borderRadius={"15px"}
          boxShadow={"1px 1px 4px #E07A5F"}
        >
          <Box flex="1.6">
            <Image
              src={
                "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              }
              alt="pic"
              objectFit={"cover"}
              height={"100%"}
              width={"100%"}
              px={"10px"}
              py={"30px"}
            />
          </Box>
          <Box flex="2">
            <Box marginY={"25px"}>
              <Text fontWeight={"bold"}>
                {truncate("Batagor ori asli 100%", lengthTitle)}
              </Text>
              <Text fontWeight={"bold"}>Rp. 1.000.000</Text>
              <Text fontWeight={"bold"} color={"#E07A5F"}>
                Snacks
              </Text>
              <Text fontSize={"14px"} color={"#E07A5F"} fontWeight={"bold"}>
                Stock: 10
              </Text>
              <Text fontSize={"14px"} color={"#E07A5F"} fontWeight={"bold"}>
                Discount: 30%
              </Text>
            </Box>
          </Box>
          <Box flex="1.2">
            <Link to={`/admin/product/:id`}>
              <Button
                borderRadius={"10px"}
                my={"70px"}
                marginRight={"5px"}
                bgColor={"#81B29A"}
                _hover={{
                  bgColor: "#81B29A",
                }}
              >
                See Details
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProductCardAdmin;
