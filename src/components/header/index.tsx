import Image from "next/image";
import { Container, Flex, Link, Separator } from "@radix-ui/themes";

import CONSTANTS from "@/constants";


import styles from "./header.module.css";
import Script from "next/script";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container p="2">
        <Flex gap="2" justify="between" align="center">
          <Link
            className={styles.logo}
            href="/"
            title="robots.txt Generator Tool"
          >
            <Image
              alt="Generate robots.txt logo"
              loading="lazy"
              width="28"
              height="28"
              src="/images/logo.png"
            />
          </Link>
          <Flex gap="5" align="center">
            <Link className={styles.nav} href="/" size="3" weight="bold">
              Generator
            </Link>
            <Link
              className={styles.nav}
              href="/validator"
              size="3"
              weight="bold"
            >
              Validator
            </Link>
            <Link className={styles.nav} href="#faqs" size="3" weight="bold">
              FAQs
            </Link>

            <Separator orientation="vertical" size="1" />

            <Link
              className={styles.link}
              href={CONSTANTS.repository}
              size="3"
              weight="bold"
              rel="noreferrer"
              target="_blank"
              title="Check the project on GitHub"
            >
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

              {/*<Image*/}
              {/*  alt="GitHub Logo"*/}
              {/*  loading="lazy"*/}
              {/*  width="28"*/}
              {/*  height="21"*/}
              {/*  src="/images/github.svg"*/}
              {/*/>*/}
            </Link>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}
