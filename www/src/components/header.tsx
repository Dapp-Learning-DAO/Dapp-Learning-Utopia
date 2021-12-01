/** @jsx jsx */
import { Container, jsx, Flex, Box, useColorMode } from "theme-ui";
import Logo from "../icons/logo";
import ThemeSwitch from "../icons/theme-switch";
import NavCell from "./navCell";

// const modes = [`light`, `dark`, `strangerThings`]
const modes = [`light`, `dark`];
const navs = [
  {
    title: "Products",
    subs: [
      { txt: "Dapp-Learning", url: "https://github.com/rebase-network/Dapp-Learning" },
      { txt: "Encryption courses Translation", url: "https://mirror.xyz/0x0C3c4bB7554Ea7E891B604715F84C5B55EFc017d" },
      { txt: "WaterMargin", url: "https://github.com/Dapp-Learning-DAO/Dapp-Learning-WaterMargin" },
    ],
  },
  {
    title: "About us",
    url: "./2021-11-09-intro-en/",
  },
  {
    title: "Contact us",
    subs: [
      { txt: "Twitter", url: "https://twitter.com/Dapp_Learning" },
      { txt: "Youtube", url: "https://www.youtube.com/channel/UCdJKZVxO55N3n2BQYXMDAcQ" },
      { txt: "Discord", url: "https://discord.gg/cRYNYXqPeR" },
      { txt: "Mirror", url: "https://mirror.xyz/0x0C3c4bB7554Ea7E891B604715F84C5B55EFc017d" },
    ],
  },
];

const Header = () => {
  const [mode, setMode] = useColorMode();

  const cycleMode = (e: any) => {
    const i = (modes.indexOf(mode) + 1) % modes.length;
    setMode(modes[i]);
  };

  return (
    <header>
      <Container sx={{ pb: 0 }}>
        <Flex
          sx={{
            alignItems: `center`,
            justifyContent: `space-between`,
            flexDirection: [`column`, `row`],
          }}
        >
          <Flex style={{ paddingRight: `12px` }}>
            <a
              aria-label="Link to the theme creator's website"
              sx={{
                color: `text`,
                "&:hover,&:focus": { color: `primary`, boxShadow: `none` },
              }}
              href="https://github.com/rebase-network/Dapp-Learning"
            >
              <Logo sx={{ width: 12, height: 12 }} />
            </a>
            <Box
              aria-hidden="true"
              focusable="false"
              sx={{
                height: 12,
                width: 1,
                backgroundColor: `primary`,
                borderRadius: `full`,
                mx: 3,
              }}
            />
            <Flex sx={{ flexDirection: `column` }}>
              <Box
                sx={{ fontSize: 3, fontWeight: `semibold`, lineHeight: `25px` }}
              >
                Dapp-Learning
              </Box>
              <Box sx={{ color: `dark` }}>by Dapp-Learning</Box>
            </Flex>
          </Flex>
          <Flex style={{ flex: 1 }}></Flex>
          <Flex style={{ flex: 3 }}>
            {navs.map((nav, index) => (
              <NavCell key={index} {...nav} />
            ))}
          </Flex>
          <Flex sx={{ mt: [4, 0], alignItems: `center` }}>
            <a
              href="https://github.com/rebase-network/Dapp-Learning"
              sx={{ variant: `buttons.secondary` }}
            >
              GitHub
            </a>
            <button
              type="button"
              sx={{
                variant: `buttons.transparent`,
                p: 1,
                borderRadius: `full`,
                ml: 4,
                "&:hover,&:focus": { boxShadow: `0 0 0 2px` },
              }}
              title="Change color mode"
              onClick={cycleMode}
            >
              <ThemeSwitch />
            </button>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
