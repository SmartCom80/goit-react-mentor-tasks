import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';
import article from '../../data/article.json';
import statistics from '../../data/data.json';
import list from '../../data/forbes.json';
import transactions from '../../data/transactions.json';
export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          name={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={statistics} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={list} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
};
