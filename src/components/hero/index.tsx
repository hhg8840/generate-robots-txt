"use client"; // 클라이언트 컴포넌트로 선언

import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import styles from "./hero.module.css";
import { useEffect } from "react";

interface HeroProps {
  feature: string;
}

export default function Hero({ feature }: HeroProps) {
  useEffect(() => {
    // 쿠팡 광고 초기화 함수를 실행합니다.
    const initCoupangAds = () => {
      if (typeof window !== "undefined" && window.PartnersCoupang) {
        new window.PartnersCoupang.G({
          id: 697475,
          trackingCode: "AF5641264",
          subId: null,
          template: "carousel",
          width: "300",
          height: "330",
        });
      }
    };

    initCoupangAds(); // 컴포넌트가 마운트될 때 광고를 초기화합니다.

    return () => {
      // 클린업 함수에서 필요하다면 광고를 제거하거나 정리하는 코드를 추가할 수 있습니다.
    };
  }, []);

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
            {/* Coupang Ad Container */}
            <div id="coupang-ads" style={{ textAlign: "center", margin: "10px 0px 10px 0px" }}>
            </div>
            {/* Coupang Ad Container End */}
          </Flex>

          <Text as="p" align="center" mt="5">
          </Text>
        </Container>
      </article>
  );
}