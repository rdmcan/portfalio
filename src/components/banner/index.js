import { useMediaQuery, Stack, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerTitle,
  socialArr,
  BannerImage,
  BannerTxtContent,
} from "../../styles/banner";
import ReactTypingEffect from "react-typing-effect";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <div
        style={{
          backgroundImage: `url(/images/banner/emile-perron-xrVDYZRGdw4-unsplash.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minWidth: "100%",
          height: "530px",
        }}
      >
        <BannerTxtContent>
          <BannerTitle>
            <ReactTypingEffect
              text="Computer Programmer Analyst"
              speed={90}
              eraseDelay={10000000}
              typingDelay={600}
              cursor=""
            />
          </BannerTitle>
          <BannerTitle>
            <ReactTypingEffect
              text="Mathematician"
              speed={90}
              eraseDelay={100000000}
              typingDelay={4000}
              cursor="_"
            />
          </BannerTitle>
        </BannerTxtContent>
      </div>
      {/* <BannerImage src="/images/banner/emile-perron-xrVDYZRGdw4-unsplash.jpg" /> */}
      <BannerContent>
        <Stack direction="row" spacing={6} marginTop="2em">
          {socialArr.map((item) => (
            <Link
              aria-label={item.aria}
              href={item.href}
              fontSize={"1.5rem"}
              isExternal
            >
              {item.icon}
            </Link>
          ))}
        </Stack>
      </BannerContent>
    </BannerContainer>
  );
}
