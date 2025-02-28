import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./hero.module.css";
import Script from "next/script";

interface HeroProps {
  feature: string;
}

export default function Hero({ feature }: HeroProps) {
  return (
    <article className={styles.container}>
      <Container px="2" py="9">
        <Flex gap="2" direction="column" align="center">
          <Heading size="9" mb="4">
            <Text className={styles.text}>robots.txt</Text> {feature}
          </Heading>
          <Text as="p" size="7" color="gray">
            Quickly generate a robots.txt for your site
          </Text>
        </Flex>
        <div style={{ textAlign: "center", margin: "10px 0px 10px 0px" }}>
          {/* Coupang Script Start */}
          <Script src="https://ads-partners.coupang.com/g.js" strategy="beforeInteractive"/>
          <Script id="coupang-ads" strategy="beforeInteractive">
            {`
              new PartnersCoupang.G({
                "id":697475,
                "trackingCode":"AF5641264",
                "subId":null,
                "template":"carousel",
                "width":"300",
                "height":"330"
              });
          `}
          </Script>
          {/* Coupang Script End */}
        </div>
        <Text as="p" align="center" mt="5">

          {/*<a*/}
          {/*  href="https://www.producthunt.com/posts/robots-txt-generator-3"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  className={styles.ph}*/}
          {/*  title="Robots.txt Generator was ranked daily #2 for May 24th, 2024 on Product Hunt"*/}
          {/*>*/}
          {/*  <Image*/}
          {/*    src="/images/ph.svg"*/}
          {/*    alt="Product Hunt Badge"*/}
          {/*    width="150"*/}
          {/*    height="45"*/}
          {/*  />*/}
          {/*</a>*/}
        </Text>
      </Container>
    </article>
  );
}
