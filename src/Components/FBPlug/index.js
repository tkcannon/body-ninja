import { Height } from "@mui/icons-material";
import { Box } from "@mui/system";

function FBPlug() {
  return (
    <Box
      position="sticky"
      component="iframe"
      sx={{
        top: "25vh",
        bottom: 0,
        maxWidth: 500,
        minHeight: 500,
      }}
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100076347166246&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
      scrolling="no"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay;
      clipboard-write; encrypted-media; picture-in-picture; web-share"
    ></Box>
  );
}
export default FBPlug;
