import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Divider, Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"

const Hands = ({ intl }) => {
  const t = (s) => intl.formatMessage({id:s})
  const combinations = [
    {
      name: "StraightFlush",
      description: "hands.paragraph2",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/StraightFlush.png"
    },
    {
      name: "Quads",
      description: "hands.paragraph3",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/Quads1.png"
    },
    {
      name: "FullHouse",
      description: "hands.paragraph4",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/FullHouse.png"
    },
    {
      name: "Flush",
      description: "hands.paragraph5",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/Flush.png"
    },
    {
      name: "Straight",
      description: "hands.paragraph6",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/Straight.png"
    },
    {
      name: "Set",
      description: "hands.paragraph7",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/Set.png"
    },
    {
      name: "TwoPair",
      description: "hands.paragraph8",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/TwoPair.png"
    },
    {
      name: "Pair",
      description: "hands.paragraph9",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/Pair.png"
    },
    {
      name: "High",
      description: "hands.paragraph10",
      image: "https://storage.googleapis.com/pokerblow-info/PokerCombinations/High.png"
    }
  ]

  return (
    <Article name={"hands"}>
      <Typography>{t("hands.description")}</Typography>
      <Typography>{t("hands.paragraph1")}</Typography>
      <Divider/>

      <ol>
        {
          combinations.map(combination => (
            <li key={combination.name}>
              <Typography>
                {t(combination.description)}
              </Typography>
              <ArticleImg src={combination.image}/>
            </li>
          ))
        }
      </ol>
      <Divider/>

      <Typography>
        {t("hands.paragraph11span1")}
        <a href="https://pokergloss.com/lobby" target="_blank" rel="noopener noreferrer">{t("hands.paragraph11span2")}</a>
        {t("hands.paragraph11span3")}
      </Typography>
      <Typography>
        {t("hands.paragraph12")}
        <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerCombinations/CombinationsIcon.png"}/>
      </Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerCombinations/PokerCombinations1.png"}/>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerCombinations/PokerCombinations2.png"}/>
    </Article>
  )
}

export default injectIntl(Hands)
