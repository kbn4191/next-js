'use client'
import { useEffect } from 'react';
import { Box, Container, Typography, Grid, } from "@mui/material";
import { ProductionData } from "./productionData";
import Image from "next/image";
import Style from "../productionSection/production.module.css";

export default function Production() {
 
  return (
   
    <>
      <Box>
        <Container>
          <Box mt={10} display={"flex"} justifyContent={"center"}>
            <Box>
            <Typography fontSize={40} fontWeight={700} color={"#2C3E50"}>Featured Designs</Typography>
            <Box bgcolor={"#2ECC71"} padding={"12px 10px"} width={256}>
              <Typography fontSize={20} fontWeight={600} color={"#F5F5F5"}>Innovation at Its Finest</Typography>
            </Box>
            </Box>
            
            
          </Box>
          <Box>
          <Grid container spacing={5} mt={5}>
      {ProductionData.map((image) => (
        <Grid item key={image.id} xs={12} sm={6} md={4}>
          <Box component={"div"} className={Style.imageContainer} >
          <Image src={image.img} height={368} width={377} alt="" className={Style.image}></Image>

          </Box>
         
          <Typography mt={3} mb={5} fontSize={20} fontWeight={600} color={"#2C3E50"}>{image.name}</Typography>
       
        
         
        </Grid>
      ))}
    </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
