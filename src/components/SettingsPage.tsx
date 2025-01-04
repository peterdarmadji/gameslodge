import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, IconButton, useBreakpointValue, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const SettingsPage = () => {
  const {isOpen, onClose, onOpen} = useDisclosure()
	const drawerSize = useBreakpointValue({sm: 'xs', md: 'xs', lg: 'xs', xl: 'xs'})

  return (
    <>
      <IconButton
        aria-label={"open setting"}
        icon={<SettingsIcon></SettingsIcon>}
        onClick={onOpen}
				variant={"ghost"}
				size={"lg"}
				fontSize={"24px"}
      ></IconButton>
      
			<Drawer isOpen={isOpen} onClose={onClose} size={drawerSize} placement={"right"}>
				<DrawerOverlay></DrawerOverlay>
				<DrawerContent>
					<DrawerHeader>Settings</DrawerHeader>
					<DrawerCloseButton size={'md'}></DrawerCloseButton>
					<DrawerBody marginTop={6}>
						<VStack spacing={6} alignItems={"flex-start"}>
							<ColorModeSwitch></ColorModeSwitch>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
    </>
  );
};

export default SettingsPage;
