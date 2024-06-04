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
        다음은 robots.txt 파일과 사용 방법에 대한 몇 가지 일반적인 질문입니다.
      </Text>
      <Grid columns="3" gap="6" mt="5">
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              robots.txt 파일을 검색 엔진에 전송하려면 어떻게 하나요?
            </Heading>

            <p className={styles.text}>
              검색 엔진에 robots.txt 파일을 제출할 필요는 없습니다. 크롤러는 사이트를 크롤링하기 전에 robots.txt 파일을 찾습니다. 사이트를 찾으면 사이트를 스캔하기 전에 먼저 읽습니다.
            </p>
            <p className={styles.text}>
              robots.txt 파일을 변경하고 Google에 알리고 싶다면 해당 파일을 구글 서치 콘설(Google Search Console)에 제출하면 됩니다. Robots.txt 테스터를 사용하여 텍스트 파일을 붙여넣고 제출을 클릭하세요.
            </p>
          </Box>
        </Card>
        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              생성된 robots.txt 파일을 웹사이트에 추가하려면 어떻게 하나요?
            </Heading>
            <p className={styles.text}>
              검색 엔진 및 기타 크롤링 봇은 웹사이트의 기본 디렉터리에서 robots.txt 파일을 찾습니다. robots.txt 파일을 생성한 후 웹사이트의 루트 폴더에 추가합니다. <strong>https://yoursite.com/robots.txt</strong>.
            </p>
            <p className={styles.text}>
              robots.txt 파일을 추가하는 방법은 사용 중인 서버와 CMS에 따라 다릅니다. 루트 디렉터리에 액세스할 수 없는 경우 웹 호스팅 제공업체에 문의하세요.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              robots.txt 파일에 사이트맵을 추가하려면 어떻게 하나요?
            </Heading>

            <p className={styles.text}>
              로봇이 웹사이트 콘텐츠를 더 쉽게 크롤링할 수 있도록 robots.txt 파일에 사이트맵을 추가할 수 있습니다. 사이트맵 파일은 http://yourwebsite/sitemap.xml 에 있습니다. 다음과 같이 사이트맵의 URL이 포함된 지시문을 추가합니다.
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
              How do I use the Allow directive properly?
            </Heading>

            <p className={styles.text}>
              The Allow directive counteracts the Disallow directive. Using
              Allow and Disallow together, you can tell search engines to access
              a specific folder, file, or page within a disallowed directory.
            </p>
            <p className={styles.text}>
              Example: search engines are not allowed to access the /album/
              directory
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /album/ </Code>
            </pre>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I use the Disallow directive properly?
            </Heading>

            <p className={styles.text}>
              After filling in the User-agent directive, specify the behavior of
              certain (or all) bots by adding crawl instructions. Here are some
              tips:
            </p>
            <p className={styles.text}>
              1. Don't leave the Disallow directive without a value. In this
              case, the bot will crawl all of the site's content.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # allow to crawl the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              2. Do not list every file you want to block from crawling. Just
              disallow access to a folder, and all files in it will be blocked
              from crawling and indexing.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              3. Don't block access to the whole website unless necessary:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                Disallow: / # block access to the entire website
              </Code>
            </pre>
            <p className={styles.text}>
              Make sure essential website pages are not blocked from crawling:
              the home page, landing pages, product pages, etc.
            </p>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              How do I define the User-agent?
            </Heading>

            <p className={styles.text}>
              Specify the name of the bot to which you're giving crawl
              instructions using the User-agent directive.
            </p>
            <p className={styles.text}>
              To block or allow all crawlers from accessing some of your
              content, use an asterisk (*):
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: *</Code>
            </pre>
            <p className={styles.text}>
              To allow only Google to crawl your pages, use:
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>User-agent: Googlebot</Code>
            </pre>
            <p className={styles.text}>
              Keep in mind that each search engine has its own bots, which may
              differ in name. For example, Yahoo's bot is Slurp. Google has
              several bots for different purposes:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>Googlebot News—crawls news</li>
              <li className={styles.item}>Google Mobile—crawls mobile pages</li>
              <li className={styles.item}>Googlebot Video—crawls videos</li>
              <li className={styles.item}>Googlebot Images—crawls images</li>
              <li className={styles.item}>
                Google AdSense—crawls websites to determine content and provide
                relevant ads
              </li>
            </ul>
          </Box>
        </Card>

        <Card variant="classic">
          <Box p="3">
            <Heading className={styles.title} as="h3" size="6">
              Robots.txt syntax
            </Heading>

            <p className={styles.text}>
              The robots.txt syntax consists of directives, parameters, and
              special characters. Follow these rules for proper functionality:
            </p>
            <p className={styles.text}>
              1. Each directive must start on a new line with only one parameter
              per line.
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code}>
                User-agent: * <br />
                Disallow: /folder1/ <br />
                Disallow: /folder2/
              </Code>
            </pre>
            <p className={styles.text}>
              2. Robots.txt is case-sensitive. Match the case of folder names
              exactly.
            </p>
            <p className={styles.text}>Correct</p>
            <pre className={styles.pre}>
              <Code className={styles.code}>Disallow: /folder/</Code>
            </pre>
            <p className={styles.text}>
              Incorrect if the actual folder name is lowercase
            </p>
            <pre className={styles.pre}>
              <Code className={styles.code} color="crimson">
                Disallow: /Folder/
              </Code>
            </pre>
            <p className={styles.text}>
              3. Do not use quotation marks, spaces at the beginning of lines,
              or semicolons after lines.
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
              Full documentation
            </Heading>

            <p className={styles.text}>
              For more information on the robots.txt file, visit:
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a
                  href="https://en.wikipedia.org/wiki/Robots.txt"
                  rel="noopener"
                  target="_blank"
                >
                  Wikipedia's Robots.txt page
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://developers.google.com/search/docs/advanced/robots/intro"
                  rel="noopener"
                  target="_blank"
                >
                  Google's Robots.txt specifications
                </a>
              </li>
              <li className={styles.item}>
                <a
                  href="https://www.robotstxt.org/robotstxt.html"
                  rel="noopener"
                  target="_blank"
                >
                  The Robots Exclusion Protocol
                </a>
              </li>
            </ul>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
}
