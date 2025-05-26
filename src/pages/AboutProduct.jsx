//ok
import { useParams } from "react-router"
import Notice from "../components/Notice"
import PlanIntro from "../components/PlanIntro"
import duolingoSrc from "../assets/duolingo.jpeg"
import microsoftSrc from "../assets/microsoft.jpeg"
import netflixSrc from "../assets/netflix.jpeg"
import spotifySrc from "../assets/spotify.jpeg"
import vipSrc from "../assets/vip.jpeg"
import youtubeSrc from "../assets/youtube.jpeg"

//contain the name, imageSrc and required text for every product
const data = {
  Youtube: {
    name: "youtube",
    imageSrc: youtubeSrc,
    introText: [
    "YouTube Premium 優惠方案",
    "方案 1   個人",
    "$218  / 1 年  （ 平均$18.2 一個月）",
    "$418  / 2年  （ 平均$17.5 一個月）",
    "$568 / 3年  （ 平均$15.8 一個月）",
    "方案2   家庭",
    "$1,200 / 1 年* （平均$100 一個月）",
    "*家庭方案最高可加入五位成員",
    "方案簡介:",
    "本平台成功爭取比原價更優惠嘅方案",
    "以下為原價",
    "個人 ",
    "$78 / 一個月 （$936 一年）",
    "家庭",
    "$138 / 一個月（$1,656 一年）",
    "相比之下，本平台嘅優惠方案比原價優惠達到80%。"
    ],
    noticeText: [
      "不設免費試用期",
      "此方案包括YouTube premium 和 YouTube Music premium",
      "不提供全新Gmail account ，購買時麻煩提供自己想升級的Account"
    ],
  },
  Netflix: {
    name: "netflix",
    imageSrc: netflixSrc,
    introText: [
      "Netflix優惠方案",
      "方案 1  Personal account",
      "$388/ 1 年  （ 平均$32.4 一個月）",
      "$700/ 2年  （ 平均$29.2  一個月）",
      "Shared account ",
      "$250/年",
      "$400/ 2年",
      "方案簡介:",
      "本平台成功爭取比原價更優惠嘅方案",
      "以下為原價",
      "個人 ",
      "$73/ 一個月 （$876 一年）",
      "相比之下，本平台嘅優惠方案比原價優惠高達56%"
    ],
    noticeText: [
      "不設免費試用期",
      "此方案會提供全新帳戶",
      "只容許給一位顧客使用"
    ]
  },
  Spotify: {
    name: "spotify",
    imageSrc: spotifySrc,
    introText: [
      "Spotify premium 優惠方案",
      "方案 1  individual ",
      "$228/ 1 年  （ 平均$19  一個月）",
      "$418/ 2年  （ 平均$17.5一個月）",
      "$588/ 3 年 （平均$16.4 一個月）",
      "方案簡介:",
      "本平台成功爭取比原價更優惠嘅方案",
      "以下為原價",
      "個人 ",
      "$68/ 一個月 （$816 一年）",
      "相比之下，本平台嘅優惠方案比原價優惠高達76%"
    ],
    noticeText: [
      "不設免費試用期",
      "此方案只包括Spotify premium individual ",
      "此方案可提供全新帳戶",
      "此方案為家庭（Spotify premium family )方案，只容許給一位顧客使用"
    ],
  },
  Duolingo: {
    name: "duolingo",
    imageSrc: duolingoSrc,
    introText: [
      "Super duolingo優惠方案",
      "方案 1  Super",
      "$128 / 1 年  （ 平均$10.7 一個月）",
      "方案簡介:",
      "本平台成功爭取比原價更優惠嘅方案",
      "以下為原價",
      "個人 ",
      "$54.3 / 一個月 （$651.6 一年）",
      "相比之下，本平台嘅優惠方案比原價優惠高達81% "
    ],
    noticeText: [
      "不設免費試用期",
      "任何損失，不設賠償",
      "此方案只包括Super Duolingo ",
      "此方案不會提供全新帳戶",
      "此方案為個人（Super Duolingo)方案，只容許給一位顧客使用"
    ]
  },
  Microsoft: {
    name: "microsoft",
    imageSrc: microsoftSrc,
    introText: [
      "Microsoft 365 優惠方案",
      "方案 1  ",
      "$128 / 永久帳號",
      "方案簡介:",
      "本平台成功爭取比原價更優惠嘅方案",
      "以下為原價",
      "個人 ",
      "$ 780 / 1年",
      "相比之下，本平台嘅優惠方案比原價優惠高達100%"
    ],
    noticeText: [
      "不設免費試用期",
      "任何損失，不設賠償",
      "此方案只包括Microsoft 365",
      "此方案會提供全新帳戶"
    ],
  },
  VIP: {
    name: "vip",
    imageSrc: vipSrc,
    introText: [
      "Hk_friends_finder優惠方案",
      "方案 1  ",
      "$30/ 一個月",
      "$72/ 半年",
      "$150 /永久",
      "方案簡介:",
      "VIP:",
      "1: 保證兩日內出post",
      "2: 一個月可以出一次post",
      "3: 每月更新投稿background，讓您的投稿脫穎而出 ",
      "4: IG 投稿，且照片數量不受限制 ",
      "5: 可自行選擇背景音樂 ",
      "6: 可選擇用reels 出post，以增加曝光率 ",
      "7: 小編優先處理您的訊息 ",
      "8: 出story 宣傳你的post ",
      "非會員:",
      "1: 一個月內出post",
      "2: 半年內不可重覆投稿",
      "3: 固定background",
      "4: 一定要 google form投稿",
    ],
    noticeText: [
      "不設免費試用期",
      "任何損失，不設賠償",
      "此方案只包括Hk_friends_finder"
    ]
  }
}

const AboutProduct = () => {
  //get the url params
  const param = useParams()
  const product_name = param.pname

  //access the correspoding data
  const choiceData = data[product_name];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
      <div className="flex flex-col md:flex-row md:justify-center gap-6">
        <img src={choiceData.imageSrc} className=" max-w-3xl block h-fit object-fill rounded-lg" />
        <PlanIntro introText={choiceData.introText}/>
      </div>
      <Notice noticeText={choiceData.noticeText} />
    </div>
  )
}

export default AboutProduct