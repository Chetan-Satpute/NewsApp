import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = {
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
  content: [
    'Chinas President Xi Jinping this week became the first Chinese leader in many years to visit Tibet as well as its southeastern border region with India, as he inspected a newly opened and strategical… [+3558 chars]',
  ],
};

const ArticleScreen = () => {
  let articleParagraphs: JSX.Element[] = [];

  if (data.content) {
    articleParagraphs = data.content.map((text, index) => (
      <Text key={index} className="text-neutral-200">
        {text}
      </Text>
    ));
  }

  return (
    <View className="flex-1">
      <View className="p-3 bg-blue-200 bg-neutral-800 flex-row justify-between">
        <Icon name="arrow-back" size={25} color="#fff" />
        <Icon name="bookmark" size={20} color="#fff" />
      </View>

      <ScrollView className="flex-1 bg-neutral-800">
        <Text className="text-neutral-200 font-semibold text-lg p-2">
          {data.title}
        </Text>

        <View className="flex-1 shrink-1 h-60">
          <Image source={{uri: data.urlToImage}} style={styles.image} />
        </View>

        <View className="flex-1 p-3 space-y-5">
          <Text className="text-neutral-400 italic mb-3">
            {data.description}
          </Text>

          {articleParagraphs}
        </View>

        <View className="py-3 px-10">
          <Button onPress={() => {}} title="Visit Article" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default ArticleScreen;
