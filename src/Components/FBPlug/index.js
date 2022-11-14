import { Height } from "@mui/icons-material";
import { Box } from "@mui/system";

function FBPlug() {
  return (
    <Box sx={{ mx: "auto", my: 5 }}>
      <Box
        component="iframe"
        sx={{
          maxWidth: 500,
          height: "50vh",
        }}
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100076347166246&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay;
      clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></Box>
    </Box>
  );
}
export default FBPlug;
