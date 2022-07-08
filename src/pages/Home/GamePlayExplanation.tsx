import React from 'react'
import { isMobile } from 'react-device-detect'
import {
  BoxCard,
  ComponentWrapper,
  ContainerColumn,
  ResponsiveContainer,
  TextCustom,
  SubText,
  ImageContainer,
  ResponsiveBoxCard,
} from '../../styles/globalStyles'
import ExpanableCard from '../../components/Cards/ExpandableCard'
import SMI_EXPLAIN_ITEM_1 from '../../assets/images/game/Moonshot_Voyage_Image_1.png'
import SMI_EXPLAIN_ITEM_2 from '../../assets/images/game/Moonshot_Voyage_Image_2.png'
import SMI_EXPLAIN_ITEM_3 from '../../assets/images/game/Moonshot_Voyage_Image_3.png'
import SMI_EXPLAIN_ITEM_4 from '../../assets/images/game/Moonshot_Voyage_Image_4.png'
import SMI_EXPLAIN_ITEM_5 from '../../assets/images/game/Moonshot_Voyage_Image_1_-_Copy.png'

const GamePlayList = [
  {
    id: 1,
    description: 'Expedition',
    subDescription:
      'Expedition is a Survival type game mode, where you defend your base against a seemingly endless swarm of enemies. At wave 1, 20 and 40 you can choose an upgrade that lasts until the end of the current expedition. The longer you can last, the more Moonscrap you will receive at the end. The goal is to survive until wave 50 which contains a powerful boss. Beating wave 50 of the expedition grants you a place in the Leaderboards and a Moonscrap bonus for completing the run.',
    imgSrc: SMI_EXPLAIN_ITEM_1,
  },
  {
    id: 2,
    description: 'Raids',
    subDescription:
      'Raids are longer levels full of enemies, puzzles and a boss fight at the end. Get to the end of the level and defeat the boss to receive Moonscrap. You need a Raid Token to gain a guaranteed 100 Moonscrap (1 NFT mint) after beating a Raid. You get 1 free Raid Token every day. You can also buy additional Raid Token codes on our website. Beating the Raid without spending a Raid Token will grant much lower rewards.',
    imgSrc: SMI_EXPLAIN_ITEM_2,
  },
  {
    id: 3,
    description: 'Difficulty',
    subDescription:
      'Moonshot Voyage has a freeform difficulty level - you can choose your desired difficulty before starting an Expedition or a Raid from a range of 0-999.<br /><br /> The difficulty plays a part in a few ways:<br /> -It enhances Health and Damage of ALL enemies<br /> -It enhances the Moonscrap and XP values you get from playing<br /> -It determines your place on the leaderboards',
    imgSrc: SMI_EXPLAIN_ITEM_3,
  },
  {
    id: 4,
    description: 'Account XP',
    subDescription:
      'Your account can level up by gathering XP. You gain XP by playing Expeditions and Raids, as well as from holder rewards and login bonuses and other activities. Leveling up your account grants you  Upgrade Points (UP) which you can spend on upgrading your NFTs and some other rewards like Moonscrap or Raid Tokens on level milestones.',
    imgSrc: SMI_EXPLAIN_ITEM_4,
  },
  {
    id: 5,
    description: 'Leaderboards',
    subDescription:
      'Placing on the Leaderboards is determined by a few factors:<br /><br /> <b>Difficulty</b> - this is the most important factor of placing on the leaderboards. If player A beats Expedition on Difficulty 120 while getting 800 points and player B beats Expedition on Difficulty 100 while getting 1200 points - player A will still be higher because he beat a higher difficulty.<br /><br /> <b>Points</b> - the Expedition has a scoring system, where it gives you points depending on how well you play. The most important factors it takes into calculations are:<br /> &nbsp;&middot; How many times you got hit<br /> &nbsp;&middot; How fast did you beat the Expedition<br /><br /> <b>Time</b> - if both player A and player B beat Expedition Difficulty 657 while getting 1000 points, the tie is broken by who did it first<br /><br /> Difficulty > Points > Time<br /><br /> Leaderboards rewards will be sent to ranked players from each leaderboards after every ranked season ends. Every player who places on a leaderboard is eligible for some kind of rewards (even the lowest placings will get something). Ranked seasons are projected to last about 3~4 months. The rewards can include: Moonscrap, special NFTs, placing in hall of fame, monetary rewards (in SMI) and many others.',
    imgSrc: SMI_EXPLAIN_ITEM_5,
  },
]

export const GamePlayExplanation: React.FC = () => {
  return (
    <ComponentWrapper padding={'24px'}>
      <ContainerColumn>
        <TextCustom
          fontSize={isMobile ? '2rem' : '3.5rem'}
          fontWeight={600}
          fontFamily={'RubikBold'}
          lineHeight={1.1}
          textAlign={'center'}
          margin={'5% 0 2% 0'}
        >
          Game play
        </TextCustom>
        <ResponsiveContainer>
          {GamePlayList.map((item) => {
            return (
              <ExpanableCard key={item.id} boxWidth={'100%'} title={item.description} content={item.subDescription} />
            )
          })}
        </ResponsiveContainer>
      </ContainerColumn>
    </ComponentWrapper>
  )
}
