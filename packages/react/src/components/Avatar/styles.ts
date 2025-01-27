import { styled } from "../../styles";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$floraRadiiLarge",
  display: "inline-block",
  width: "$floraSpace12",
  height: "$floraSpace12",
  overflow: "hidden",
});

export const AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$floraColors12",
  color: "$floraColorsLightDark2",
  svg: {
    width: "$floraSpace6",
    height: "$floraSpace6",
  },
});
