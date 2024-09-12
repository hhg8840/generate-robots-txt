import Image from "next/image";
import { Container, Heading, Link } from "@radix-ui/themes";

import styles from "./content.module.css";
import CONSTANTS from "@/constants";

export default function Content() {
  return (
    <Container className={styles.container} maxWidth="var(--container-3)">
      <article className={styles.article}>
        <figure>
          <Image
            src="/images/code.svg"
            width={400}
            height={400}
            alt="<span className={styles.code}>Robots.txt</span>"
          />
        </figure>
        <div>
          <Heading size="8" className={styles.title}>
            이 생성기를 사용해야 하는 이유는 무엇인가요?
          </Heading>
          <p className={styles.text}>
            <span className={styles.code}>robots.txt</span> 생성기 및{" "}
            <Link
              href="/validator"
              title="Robots.txt validator tool"
              underline="always"
              weight="bold"
            >
              유효성 검사 도구
            </Link>{" "}
            웹마스터, SEO 전문가, 마케팅 담당자가 이 필수 파일을 빠르고 쉽게 만들 수 있도록 도와줍니다.
          </p>

          <p className={styles.text}>
            미리 준비된 제안을 사용하여 시작할 수 있습니다. 첫 번째 경우에는 지시어(크롤링 허용 또는 허용 안 함), 경로(특정 페이지 및 파일), 지시어를 따라야 하는 봇을 설정하여 파일을 사용자 지정합니다. 또는 가장 일반적인 일반 및 CMS 지시어 집합이 포함된 미리 만들어진{" "}
            <span className={styles.code}>robots.txt</span>  템플릿을 선택할 수도 있습니다. 파일에 사이트맵을 추가할 수도 있습니다.
          </p>


        </div>
      </article>
    </Container>
  );
}
