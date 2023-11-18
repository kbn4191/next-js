import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { Menu } from "../nav/navBarDetails";
import Link from "next/link";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <>
      <Box bgcolor={"#2C3E50"}>
        <Container sx={{padding:{
          md:"0px 16px",
          xs:"0px 0px"
        }}}>
          <Box mt={20}>
            <Grid container spacing={{xs:0, md:2}}>
              <Grid md={3} xs={12}>
                <Box
                  sx={{
                    background:
                      "linear-gradient(180deg, #3498DB 0%, #2ECC71 100%)",
                    padding: "50px 30px",
                    color: "#F5F5F5",
                    
                  }}>
                  <Typography fontWeight={700} fontSize={20} 
                  display={{md:"block", xs:"flex"}}
                  justifyContent={"center"}
                  >
                    Glen Charles Landry{" "}
                  </Typography>
                  <Typography
                   display={{md:"block", xs:"flex"}}
                   justifyContent={"center"}
                  >Production Designer</Typography>
                  <Divider
                    sx={{ mt: "20px", mb: "20px", backgroundColor: "#F5F5F5" }}
                  />
                  <Typography
                   display={{md:"block", xs:"flex"}}
                   justifyContent={"center"}
                  >Agent: Jody Goldwasser</Typography>
                  <Typography
                   display={{md:"block", xs:"flex"}}
                   justifyContent={"center"}
                  >Integral Artists (Canada)</Typography>
                  <Divider
                    sx={{ mt: "20px", mb: "20px", backgroundColor: "#F5F5F5" ,
                    display:{
                      md:"block",
                      xs:"none"
                    }
                  }}
                  />
                  <Typography fontSize={14} display={{xs:"none", md:"block"}}>copywrite @ 2023</Typography>
                  <Typography fontSize={14} display={{xs:"none", md:"block"}}>glencharleslandry.com</Typography>
                </Box>
              </Grid>
              <Grid md={6} xs={12}>
                <Box
                  display={"flex"}
                  flexDirection={{md:"row", xs:"column"}}
                  gap={{md:10, xs:5}}
                  padding={"50px 30px"}
                  color={"#F5F5F5"}
                  fontSize={14}
                  justifyContent={"center"}>
                  {Menu.map((menu) => (
                    <Link key={menu.id} href={menu.LinkHref}>
                      {menu.LinkName}
                    </Link>
                  ))}
                </Box>
              </Grid>
              <Grid md={3} xs={12}>
                <Box  padding={"50px 30px"}>
                    <Box display={"flex"} alignItems={"center"} gap={2} mb={3}>
                        <Box height={35} width={35} bgcolor={"#F5F5F5"} borderRadius={2} 
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <CallIcon sx={{color:"#2C3E50"}}/>
                            
                        </Box>
                        <Typography color={"#F5F5F5"}>(647) 265-9100</Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2} mb={3}>
                        <Box height={35} width={35} bgcolor={"#F5F5F5"} borderRadius={2} 
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        >
                            <EmailIcon sx={{color:"#2C3E50"}}/>
                            
                        </Box>
                        <Typography color={"#F5F5F5"}>jody@integralartists.com</Typography>
                    </Box>
                    <Box mt={5} color={"#4E657C"} display={"flex"} gap={5} justifyContent={{md:"left", xs:"center"}}>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <TwitterIcon/>

                    </Box>
                    
                </Box>
                
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
