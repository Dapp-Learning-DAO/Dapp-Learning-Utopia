/** @jsx jsx */
import { Container, jsx, Themed, Box, Flex, useColorMode } from "theme-ui";
import { Circle, Donut } from "./shapes";
import { down, upWide } from "../styles/animations";
import Logo from "../icons/logo";
import CircleGrid from "../icons/circle-grid";

const AboutUs = () => {
  const [mode] = useColorMode();

  const isStrange = mode === `strangerThings`;

  return (
    <section data-name="about-me" sx={{ position: `relative`, py: 6 }}>
      <Container>
        <div sx={{ maxWidth: `760px` }}>
          <Themed.h1 as="h2">About Us</Themed.h1>
          <Themed.p>Hi 👋</Themed.p>
          <Themed.p>
            We are designed for developers with basic skills to step into
            blockchain DAPP development, where they can get close to DeFi, NFT,
            DAO, CRYPTO projects. We hope we could not only give junior
            developers an executable and simplest blockchain DAPP learning
            roadmap, but also present advanced developers with a platform for
            communication and cooperation.
          </Themed.p>
          <Themed.p>
            We, incubated from{" "}
            <Themed.a href="https://docs.qq.com/doc/DS0hYTUJiUVlqVXVQ">
              rebase university
            </Themed.a>
            , are a learning group to study the mainstream DAPP projects and
            share thoughts and comments every week. Here, each one is charged
            with specific tasks. The weekly meetups will be recorded and
            uploaded to the{" "}
            <Themed.a href="https://space.bilibili.com/382886213">
              rebase account on Bilibili
            </Themed.a>
            .
          </Themed.p>
          <Themed.p>
            We adhere to the concept of open{" "}
            <Themed.a href="https://github.com/rebase-network/Rebase-University">
              source university
            </Themed.a>{" "}
            and follow DAO's governance. Currently, we are sponsored by{" "}
            <Themed.a href="https://esp.ethereum.foundation/en/">
              Ethereum foundation
            </Themed.a>
            , and the funds will be awarded to whoever makes big contributions
            to us. Please follow us on Twitter{" "}
            <Themed.a href="https://twitter.com/Dapp_Learning">
              @Dapp_Learning
            </Themed.a>{" "}
            or WeChat Official Account{" "}
            <Themed.a href="https://mp.weixin.qq.com/s/79eRMtB_yz8G6H8_saCeLw">
              Welcome to Dapp-Learning
            </Themed.a>{" "}
            to keep track of our latest progress.
          </Themed.p>
          <Themed.p>
            The project is still under development, and contributors are
            welcomed from all background. Feel free to send us pull requests to
            improve tutorial projects, set up more new tutorials, or even just
            to fix the minor tpyos 🤗.
          </Themed.p>
          <Themed.p>
            Join our developer communication group by submitting PR or sharing
            at rebase university. Once you submit three PRs, you will be
            promoted to a pull request reviewer, participating in making
            decisions about project future directions. For more project
            management rules, please see{" "}
            <Themed.a href="https://github.com/rebase-network/Dapp-Learning/blob/main/docs/dao.md">
              how new members participate and project governance rules
            </Themed.a>
            . Welcome to join us if you share the same value.
          </Themed.p>
          <Themed.h3>
            <Themed.a href="./2021-11-09-intro-en/">👉 Click here to check more </Themed.a>
          </Themed.h3>
        </div>
      </Container>
      <Circle
        size={[`200px`, `200px`, `300px`]}
        color="red"
        top="-75px"
        right="-75px"
      />
      <Circle
        size={[`25px`, `25px`, `50px`]}
        color="gray"
        top="-25px"
        right={[`175px`, `175px`, `275px`]}
        sx={{ zIndex: 10 }}
      />
      <Circle
        size={[`15px`, `15px`, `25px`]}
        color="pink"
        top="50px"
        right={[`145px`, `145px`, `375px`]}
        sx={{ animation: `${upWide} 20s ease-in-out infinite alternate` }}
      />
      <Logo
        sx={{
          width: [70, 70, 75],
          height: [70, 70, 75],
          top: `114px`,
          right: [`40px`, `40px`, `240px`],
          position: `absolute`,
          color: `white`,
        }}
      />
      <Circle
        size={[`100px`, `100px`, `120px`]}
        color="darkIndigo"
        top="90px"
        right={[`25px`, `25px`, `225px`]}
        sx={{ boxShadow: `0 0 0 30px rgba(90, 103, 216, 0.15)` }}
      />
      <Donut
        color="yellow"
        size="200px"
        top="-100px"
        width="30px"
        left="-50px"
        sx={{ opacity: 0.5 }}
      />
      <Donut
        color="blue"
        size="50px"
        top="-25px"
        width="8px"
        left="180px"
        sx={{
          opacity: 0.5,
          animation: `${down} 10s ease-in-out infinite alternate`,
        }}
      />
      <Container sx={{ mt: [6, 7], position: `relative` }}>
        <Box
          sx={{
            borderRadius: `xl`,
            variant: isStrange
              ? `gradients.strangerThings`
              : `gradients.indigo`,
            p: [4, 4, 5],
            color: `white`,
            boxShadow: (t: { colors: { [key: string]: any[] } }) =>
              `0px 20px 25px ${t.colors.shadow}`,
          }}
        >
          <h3
            sx={{
              fontWeight: `bold`,
              fontSize: [2, 3, 4],
              textAlign: `center`,
              mb: 4,
              mt: 0,
              textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)`,
            }}
          >
            Do you want to support us?
          </h3>
          <Themed.p sx={{ textShadow: `0 1px 1px rgba(0, 0, 0, 0.2)` }}>
            Open source projects are not easy to maintain so we'd love to see
            you help us thrive through donations. Dapp Learning team adapts the
            DAO philosophy to manage the project; your generosity would be
            vested to our community members as funds and/or NFTs based on their
            quality of contribution.
          </Themed.p>
          <Flex
            sx={{
              justifyContent: `space-evenly`,
              mt: 4,
              flexWrap: `wrap`,
              a: { mt: 3, textAlign: `center` },
              div: { mt: 3 },
              flexDirection: [`column`, `row`],
            }}
          >
            <a
              href="https://gitcoin.co/grants/3414/dapp-learning-developer-group-1"
              sx={{ variant: `buttons.white` }}
            >
              Gitcoin grant
            </a>
            <a
              href="https://polygon.gnosis-safe.io/app/#/safes/0x2A6D09B3b11E5455a37F907f2ec885E0Be704779"
              sx={{ variant: `buttons.white` }}
            >
              Multiple signature wallets
            </a>
            {/* <a
              href="https://ko-fi.com/N4N0W91I"
              sx={{ variant: `buttons.white` }}
            >
              Buy me a tea
            </a> */}
          </Flex>
        </Box>
        <Circle
          color="orange"
          size={[`60px`, `80px`, `130px`]}
          top={[`0px`, `-30px`, `-60px`]}
          right={[`20px`, `70px`]}
          sx={{ zIndex: 10 }}
        />
        <Circle
          color="green"
          size={[`20px`, `25px`, `30px`]}
          top={[`-10px`, `-40px`, `-80px`]}
          right={[`100px`, `170px`, `220px`]}
          sx={{ zIndex: 10 }}
        />
        <Donut
          color="pink"
          size={[`300px`, `340px`]}
          top="150px"
          width="40px"
          right="-160px"
          sx={{ opacity: 0.35 }}
        />
        <CircleGrid
          color="blue"
          size={260}
          top="-20px"
          left={[`-180px`, `-120px`, `-120px`]}
        />
      </Container>
    </section>
  );
};

export default AboutUs;
