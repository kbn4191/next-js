"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AppBar, Box, Container, Drawer } from "@mui/material";
import Style from "../nav/nav.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/logo.png";
import LogoMobile from "../../images/mobileLogo.png";
import { Menu } from "./navBarDetails";
import { useRouter } from "next/router";
import ButtonIcon from "../btn/btn";
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => () => {
    setDrawerOpen(open);
  };
  const chnageNavBagckground = () => {
    if (window.scrollY >= 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  //const offset=window.addEventListener("scroll", chnageNavBagckground);

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 1101 }}>
        <Box display={{ xs: "none", md: "block" }}>
          <nav
            className={Style.nav}
            style={{ backgroundColor: scrolled ? "#3498DB" : "" }}>
            <Container>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}>
                <Box>
                  <Image src={Logo} height={52} width={205} alt="Logo"></Image>
                </Box>
                <Box display={"flex"} gap={5}>
                  {Menu.map((menu) => (
                    <Link
                      key={menu.id}
                      href={menu.LinkHref}
                      className={
                        pathname === menu.LinkHref ? "LinkNavActive" : "default"
                      }>
                      {menu.LinkName}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Container>
          </nav>
        </Box>
        <Box display={{ md: "none", xs: "block" }}>
          <nav
            className={Style.nav}
            style={{ backgroundColor: scrolled ? "#3498DB" : "" }}>
            <Container>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}>
                <Box>
                  <Image
                    src={LogoMobile}
                    height={38}
                    width={37}
                    alt="mobile logo"
                    priority
                  />
                </Box>
                <Box
                  height={43}
                  width={43}
                  border={"1px solid #ECF0F1"}
                  borderRadius={1}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={toggleDrawer(true)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none">
                    <path
                      d="M4.6875 13.125C4.43886 13.125 4.2004 13.0262 4.02459 12.8504C3.84877 12.6746 3.75 12.4361 3.75 12.1875V4.68936C3.75 4.44072 3.84877 4.20226 4.02459 4.02645C4.2004 3.85063 4.43886 3.75186 4.6875 3.75186H12.1875C12.4361 3.75186 12.6746 3.85063 12.8504 4.02645C13.0262 4.20226 13.125 4.44072 13.125 4.68936V12.1875C13.125 12.4361 13.0262 12.6746 12.8504 12.8504C12.6746 13.0262 12.4361 13.125 12.1875 13.125H4.6875ZM17.8125 13.125C17.5639 13.125 17.3254 13.0262 17.1496 12.8504C16.9738 12.6746 16.875 12.4361 16.875 12.1875V4.68936C16.875 4.44072 16.9738 4.20226 17.1496 4.02645C17.3254 3.85063 17.5639 3.75186 17.8125 3.75186H25.3106C25.5593 3.75186 25.7977 3.85063 25.9735 4.02645C26.1494 4.20226 26.2481 4.44072 26.2481 4.68936V12.1875C26.2481 12.4361 26.1494 12.6746 25.9735 12.8504C25.7977 13.0262 25.5593 13.125 25.3106 13.125H17.8125ZM4.6875 26.25C4.43886 26.25 4.2004 26.1512 4.02459 25.9754C3.84877 25.7996 3.75 25.5611 3.75 25.3125V17.8125C3.75 17.5638 3.84877 17.3254 4.02459 17.1496C4.2004 16.9738 4.43886 16.875 4.6875 16.875H12.1875C12.4361 16.875 12.6746 16.9738 12.8504 17.1496C13.0262 17.3254 13.125 17.5638 13.125 17.8125V25.3125C13.125 25.5611 13.0262 25.7996 12.8504 25.9754C12.6746 26.1512 12.4361 26.25 12.1875 26.25H4.6875ZM17.8125 26.25C17.5639 26.25 17.3254 26.1512 17.1496 25.9754C16.9738 25.7996 16.875 25.5611 16.875 25.3125V17.8125C16.875 17.5638 16.9738 17.3254 17.1496 17.1496C17.3254 16.9738 17.5639 16.875 17.8125 16.875H25.3106C25.5593 16.875 25.7977 16.9738 25.9735 17.1496C26.1494 17.3254 26.2481 17.5638 26.2481 17.8125V25.3125C26.2481 25.5611 26.1494 25.7996 25.9735 25.9754C25.7977 26.1512 25.5593 26.25 25.3106 26.25H17.8125Z"
                      fill="#ECF0F1"
                    />
                  </svg>
                </Box>
              </Box>
            </Container>
          </nav>
        </Box>
      </AppBar>
      
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        style={{ zIndex: 1100 }}
        PaperProps={{ style: { width: "100%",  } }}>
          <Box height={63} width={"100%"} bgcolor={"#3498DB"}>

</Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          sx={{ padding: "30px 0px", alignItems:"center" }}>
          {Menu.map((menu) => (
           
              
              <Link
                key={menu.id}
                href={menu.LinkHref}
                onClick={toggleDrawer(false)}
                className={
                  pathname === menu.LinkHref
                    ? "LinkNavActiveMobile"
                    : "defaultMobile"
                }>
                {menu.LinkName}
              </Link>
           
          ))}
           <ButtonIcon></ButtonIcon>
           <Box height={50} 
           width={50} 
           borderRadius={20} 
           border={"1px solid gray"} 
           mt={10} 
           color={"#3498DB"}
           justifyContent={"center"}
           alignItems={"Center"}
           display={"flex"}
           onClick={toggleDrawer(false)}
           >
            <ClearRoundedIcon/>

           </Box>
        </Box>
       
      </Drawer>
    </>
  );
}
