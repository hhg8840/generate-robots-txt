import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./hero.module.css";

interface HeroProps {
  feature: string;
}

export default function Hero({ feature }: HeroProps) {
  return (
    <article className={styles.container}>
      <Container px="2" py="9">
        <Flex gap="2" direction="column" align="center">
          <Heading size="9" mb="4">
            <Text className={styles.text}>youtube.txt</Text> {feature}
          </Heading>
          <Text as="p" size="7" color="gray">
            Quickly generate a youtube.txt for your site
          </Text>
        </Flex>
        <Text as="p" align="center" mt="5">

          {/*<a*/}
          {/*  href="https://www.producthunt.com/posts/youtube-txt-generator-3"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*  className={styles.ph}*/}
          {/*  title="youtube.txt Generator was ranked daily #2 for May 24th, 2024 on Product Hunt"*/}
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
