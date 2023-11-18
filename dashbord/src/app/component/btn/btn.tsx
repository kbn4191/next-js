import Button from '@mui/material/Button';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function ButtonIcon() {
    return(
        <>
        <Button variant="contained" startIcon={< MailOutlineIcon  />} sx={{
            backgroundColor:"#3498DB",
            borderRadius:"10px",
            marginTop:"20px",
            padding:"0px",
            height:"44px",
            width:"182px"
        }}>
  Contact
</Button>
        </>
    )
    
}