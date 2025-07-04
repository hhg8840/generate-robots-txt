import {
  Heading,
  Card,
  Grid,
  Code,
  Text,
  Box,
  Container,
} from "@radix-ui/themes";

import styles from "./faqs.module.css";

export default function Faqs() {
  return (
    <Container id="faqs" className={styles.container}>
      <Heading as="h2" size="8" align="center" mb="2">
        자주 묻는 질문
      </Heading>
      <Text as="p" align="center" size="4">
        다음은 youtube.txt 파일과 사용 방법에 대한 몇 가지 일반적인 질문입니다.
      </Text>
      <Grid columns="3" gap="6" mt="5">
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              youtube.txt 파일을 검색 엔진에 전송하려면 어떻게 하나요?
            </Heading>

            <p className={styles.text}>
              검색 엔진에 youtube.txt 파일을 제출할 필요는 없습니다. 크롤러는 사이트를 크롤링하기 전에 youtube.txt 파일을 찾습니다. 사이트를 찾으면 사이트를 스캔하기 전에 먼저 읽습니다.
            </p>
            <p className={styles.text}>
              youtube.txt 파일을 변경하고 Google에 알리고 싶다면 해당 파일을 구글 서치 콘솔(Google Search Console)에 제출하면 됩니다. youtube.txt 테스터를 사용하여 텍스트 파일을 붙여넣고 제출을 클릭하세요.
            </p>
          </Box>
        </Card>
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              생성된 youtube.txt 파일을 웹사이트에 추가하려면 어떻게 하나요?
            </Heading>
            <p className={styles.text}>
              검색 엔진 및 기타 크롤링 봇은 웹사이트의 기본 디렉터리에서 youtube.txt 파일을 찾습니다. youtube.txt 파일을 생성한 후 웹사이트의 루트 폴더에 추가합니다. <strong>https://yoursite.com/youtube.txt</strong>.
            </p>
            <p className={styles.text}>
              youtube.txt 파일을 추가하는 방법은 사용 중인 서버와 CMS에 따라 다릅니다. 루트 디렉터리에 액세스할 수 없는 경우 웹 호스팅 제공업체에 문의하세요.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              youtube.txt 파일에 사이트맵을 추가하려면 어떻게 하나요?
            </Heading>

            <p className={styles.text}>
              로봇이 웹사이트 콘텐츠를 더 쉽게 크롤링할 수 있도록 youtube.txt 파일에 사이트맵을 추가할 수 있습니다. 사이트맵 파일은 http://yourwebsite/sitemap.xml 에 있습니다. 다음과 같이 사이트맵의 URL이 포함된 지시문을 추가합니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                User-agent: * <br />
                Disallow: /folder1/ <br />
                Allow: /image1/ <br />
                Sitemap: https://your-site.com/sitemap.xml
              </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              허용 지시어를 올바르게 사용하려면 어떻게 해야 하나요?
            </Heading>

            <p className={styles.text}>
              허용 지시어는 허용하지 않음 지시어를 대체합니다. 허용과 불허(Allow and Disallow)를 함께 사용하면 검색 엔진이 허용되지 않은 디렉터리 내의 특정 폴더, 파일 또는 페이지에 액세스하도록 지시할 수 있습니다.
            </p>
            <p className={styles.text}>
              예제: 검색 엔진은 /album/ 디렉터리에 액세스할 수 없습니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /album/ </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              Disallow 지시문을 올바르게 사용하려면 어떻게 해야 하나요?
            </Heading>

            <p className={styles.text}>
              사용자 에이전트 지시문을 작성한 후 크롤링 지침을 추가하여 특정(또는 모든) 봇의 동작을 지정합니다. Tips:
            </p>
            <p className={styles.text}>
              1. Disallow 지시문을 값 없이 그대로 두지 마세요. 이 경우 봇이 사이트의 모든 콘텐츠를 크롤링합니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # allow to crawl the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              2. 크롤링을 차단하려는 모든 파일을 나열하지 마세요. 그냥 폴더에 대한 액세스를 허용하지 않으면 폴더에 있는 모든 파일이 크롤링 및 인덱싱에서 차단됩니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              3. 필요한 경우가 아니라면 전체 웹사이트에 대한 액세스를 차단하지 마세요.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # block access to the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              홈페이지, 랜딩 페이지, 제품 페이지 등 필수 웹사이트 페이지가 크롤링에서 차단되지 않도록 주의 하세요.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              사용자 에이전트는 어떻게 정의하나요?
            </Heading>

            <p className={styles.text}>
              크롤링 명령을 내릴 봇의 이름을 지정합니다. 지시어를 제공할 봇의 이름을 지정합니다.
            </p>
            <p className={styles.text}>
              모든 크롤러가 일부 콘텐츠에 액세스하지 못하도록 차단하거나 허용하려면 (*)를 사용합니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: *</Code>
            </pre>
            <p className={styles.text}>
              Google만 페이지를 크롤링하도록 허용하려면 다음을 사용하세요:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: Googlebot</Code>
            </pre>
            <p className={styles.text}>
              각 검색 엔진에는 이름이 다를 수 있는 자체 봇이 있다는 점에 유의하세요. 예를 들어, Naver의 봇은 예티(Yeti)입니다. Google에는 다양한 목적을 위한 여러 봇이 있습니다:
            </p>
            {/*<ul className={styles.list}>*/}
            {/*  <li className={styles.item}>Googlebot News—crawls news</li>*/}
            {/*  <li className={styles.item}>Google Mobile—crawls mobile pages</li>*/}
            {/*  <li className={styles.item}>Googlebot Video—crawls videos</li>*/}
            {/*  <li className={styles.item}>Googlebot Images—crawls images</li>*/}
            {/*  <li className={styles.item}>*/}
            {/*    Google AdSense—crawls websites to determine content and provide*/}
            {/*    relevant ads*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              youtube.txt 구문
            </Heading>

            <p className={styles.text}>
              youtube.txt 구문은 지시문, 매개변수 및 특수 문자로 구성됩니다. 제대로 작동하려면 다음 규칙을 따르세요:
            </p>
            <p className={styles.text}>
              1. 각 지시문은 한 줄에 하나의 매개변수만 사용하여 새 줄에서 시작해야 합니다.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                User-agent: * <br />
                Disallow: /folder1/ <br />
                Disallow: /folder2/
              </Code>
            </pre>
            <p className={styles.text}>
              2. youtube.txt는 대소문자를 구분합니다. 폴더 이름의 대소문자를 정확히 일치시켜야 합니다.
            </p>
            <p className={styles.text}>Correct</p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              실제 폴더 이름이 소문자인 경우 잘못됨
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code} color="crimson">
                Disallow: /Folder/
              </Code>
            </pre>
            <p className={styles.text}>
              3. 따옴표, 줄의 시작 부분에 공백 또는 줄 뒤에 세미콜론을 사용하지 마세요.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code} color="crimson">
                Disallow: /folder1/; <br />
                Disallow: /“folder2”/
              </Code>
            </pre>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: /folder1/
                <br />
                Disallow: /folder2/
              </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              참고 문서
            </Heading>

            <p className={styles.text}>
              youtube.txt 파일에 대한 자세한 내용은 다음을 참조하세요:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  href="https://ko.wikipedia.org/wiki/youtube.txt"
                  rel="noopener"
                  target="_blank"
                >
                  Wikipedia's youtube.txt page
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://developers.google.com/search/docs/advanced/youtube/intro"
                  rel="noopener"
                  target="_blank"
                >
                  Google's youtube.txt specifications
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://www.youtubetxt.org/youtubetxt.html"
                  rel="noopener"
                  target="_blank"
                >
                  The youtube Exclusion Protocol
                </a>
              </li>
            </ul>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}
