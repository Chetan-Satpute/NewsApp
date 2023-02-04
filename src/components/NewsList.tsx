import React from 'react';
import {FlatList} from 'react-native';

import NewsCard from './NewsCard';

const data = {
  status: 'ok',
  totalResults: 10,
  articles: [
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'The Hindu Net Desk',
      title:
        'Coronavirus live updates | Schools in Rajasthan to reopen from August 2',
      description:
        'More than half of all European adults are now fully vaccinated, the EU said on Thursday, as countries across Europe and Asia battled fresh outbreaks blamed on the fast-spreading Delta variant.',
      url: 'https://www.thehindu.com/news/national/coronavirus-live-july-23-2021-updates/article35481907.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/andhra-pradesh/itrjr2/article35457972.ece/ALTERNATES/LANDSCAPE_615/22vjcovid',
      publishedAt: '2021-07-23T04:37:35.1474224Z',
      content:
        'Given the robust and statute-based death registration system in the country, while some cases could go undetected as per the principles of infectious disease and its management, missing out on deaths… [+2612 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'The Hindu Net Desk',
      title:
        'Parliament proceedings updates | Govt. to move motion seeking suspension of TMC MP today',
      description:
        'The proceedings of both the Houses of Parliament remained paralysed in the first four days of Monsoon session as Opposition members protested over a number of issues including the Pegasus snooping con',
      url: 'https://www.thehindu.com/news/national/parliament-proceedings-live-july-23-2021/article35481906.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/yfzd3o/article34559558.ece/ALTERNATES/LANDSCAPE_615/ParliamentHouse',
      publishedAt: '2021-07-23T04:37:33.9914596Z',
      content:
        'The proceedings of both the Houses of Parliament remained paralysed in the first four days of Monsoon session as Opposition members protested over a number of issues including the Pegasus snooping co… [+2005 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'PTI',
      title: 'Tokyo Olympics | Deepika ninth in ranking round; Koreans top-two',
      description:
        'The performances will determine the seedings for the elimination rounds.',
      url: 'https://www.thehindu.com/sport/tokyo-olympics-deepika-ninth-in-ranking-round-koreans-top-two/article35481902.ece',
      urlToImage:
        'https://www.thehindu.com/sport/uvmmr0/article35481908.ece/ALTERNATES/LANDSCAPE_615/thnak1330128994jpg',
      publishedAt: '2021-07-23T03:40:59Z',
      content:
        'Star Indian archer Deepika Kumari finished ninth in the womens individual ranking round as the countrys Olympic campaign kickstarted at the Yumenoshima Park in Tokyo on Friday.\r\n The world No.1 finis… [+1117 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Ananth Krishnan',
      title:
        'Xi Jinping visits Tibet border region, first by Chinese leader in years',
      description:
        'He inspects newly opened and strategically important railway line',
      url: 'https://www.thehindu.com/news/international/xi-jinping-visits-tibet-border-region-first-by-chinese-leader-in-years/article35481755.ece',
      urlToImage:
        'https://www.thehindu.com/news/international/nowz13/article34617350.ece/ALTERNATES/LANDSCAPE_615/ChinaTwitterFakeFans83865jpg-f58f3jpg',
      publishedAt: '2021-07-23T03:01:30Z',
      content:
        'Chinas President Xi Jinping this week became the first Chinese leader in many years to visit Tibet as well as its southeastern border region with India, as he inspected a newly opened and strategical… [+3558 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Special Correspondent',
      title:
        'Six Ministers huddle with Yediyurappa, but say they will abide by party decision',
      description: 'They had played a key role in bringing BJP to power',
      url: 'https://www.thehindu.com/news/national/karnataka/six-ministers-huddle-with-yediyurappa-but-say-they-will-abide-by-party-decision/article35480182.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/karnataka/n1n7mn/article35480181.ece/ALTERNATES/LANDSCAPE_615/23bgbsycabinet1',
      publishedAt: '2021-07-22T19:39:39Z',
      content:
        'Soon after the State Cabinet meeting on Thursday, at least six Ministers, whose resignations were responsible for bringing down the previous CongressJD(S) coalition government and putting the incumbe… [+1692 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'The Hindu',
      title: 'Limits of cooperation: On reforms in cooperative sector',
      description:
        'Reforms in cooperative sector should not be at the cost of federal principles',
      url: 'https://www.thehindu.com/opinion/editorial/limits-of-cooperation-the-hindu-editorial-on-reforms-in-cooperative-sector/article35478339.ece',
      urlToImage:
        'https://www.thehindu.com/static/theme/default/base/img/og-image.jpg',
      publishedAt: '2021-07-22T18:32:00Z',
      content:
        'The cooperative movement certainly needs reform and revitalisation. Beset by political interference, many cooperative societies do not hold elections regularly, while some are superseded frequently. … [+2692 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'The Hindu',
      title: 'In search of gold: On Tokyo Olympics',
      description:
        'The Olympic Games remain the greatest sporting event for fans and athletes alike',
      url: 'https://www.thehindu.com/opinion/editorial/in-search-of-gold-the-hindu-editorial-on-tokyo-olympics-2021/article35478354.ece',
      urlToImage:
        'https://www.thehindu.com/static/theme/default/base/img/og-image.jpg',
      publishedAt: '2021-07-22T18:32:00Z',
      content:
        'A medal can lose its lustre but the athletes sporting immortality is set in stone, such is the enduring allure of triumphs at the Olympics. Even a participant without any titles, is referred to as an… [+2521 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Special Correspondent',
      title:
        'Hours after ouster as CBI chief, Alok Verma’s phone numbers made it to Pegasus list: Report',
      description:
        '“Also added to the list of numbers at the same time as Verma were two other senior CBI officials, Rakesh Asthana and A.K. Sharma...,” news portal The Wire claimed in a report.',
      url: 'https://www.thehindu.com/news/national/hours-after-ouster-as-cbi-chief-alok-vermas-phone-numbers-made-it-to-pegasus-list-report/article35477226.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/wjxhfq/article35477225.ece/ALTERNATES/LANDSCAPE_615/AlokVerma',
      publishedAt: '2021-07-22T17:18:05Z',
      content:
        'The Wire on Thursday reported that hours after Prime Minister Narendra Modi acted to oust Alok Verma from his post as head of the Central Bureau of Investigation (CBI) at midnight on October 23, 2018… [+1223 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Ananth Krishnan',
      title: 'Dalai Lama’s close aides targeted on Pegasus spyware list',
      description:
        '‘Analysis indicates that the Indian govt. was selecting the potential targets’',
      url: 'https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece',
      urlToImage:
        'https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama',
      publishedAt: '2021-07-22T15:47:01Z',
      content:
        'Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]',
    },
    {
      source: {
        id: 'the-hindu',
        name: 'The Hindu',
      },
      author: 'Sobhana K Nair',
      title: 'Parliament paralysed over Pegasus, farm laws',
      description: 'Trinamool member tears IT Minister’s statement on spyware.',
      url: 'https://www.thehindu.com/news/national/tmc-bjp-mps-scuffle-in-rajya-sabha-over-snooping/article35469208.ece',
      urlToImage:
        'https://www.thehindu.com/news/national/28kofw/article35475486.ece/ALTERNATES/LANDSCAPE_615/RajyaSabha-snoopingjpg',
      publishedAt: '2021-07-22T12:45:50Z',
      content:
        'The proceedings of both the Houses of Parliament continued to remain paralysed on Thursday as Opposition members protested over a number of issues including the Pegasus snooping controversy and made … [+4103 chars]',
    },
  ],
};

const NewsList = () => {
  return (
    <FlatList
      className="flex-1 bg-neutral-800"
      data={data.articles}
      renderItem={({item}) => <NewsCard {...item} />}
      keyExtractor={item => item.url}
    />
  );
};

export default NewsList;
