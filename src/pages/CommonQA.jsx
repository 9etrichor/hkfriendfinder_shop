//ok
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavDisplay from '../components/NavDisplay';

//the question and answer data
const qAndA = [
  {
    q: "聯絡WhatsApp會方便啲定係IG？",
    a: "主要都係睇你自己用邊個平台方便啲🙇🏻‍♀️我哋最終都係會將個對話轉返去WhatsApp但係我又會最先覆IG✌🏻"
  },

  {
    q: "通常幾耐先覆",
    a: "一個鐘頭內！除非凌晨時間"
  },

  {
    q: "點解可以爭取到咁嘅優惠？",
    a: "我哋透過family plan較優惠嘅價錢，所以先可以傾到咁好嘅合作"
  },

  {
    q: "通常買咗幾耐之後先可以啟動？",
    a: "即日內！"
  },

  {
    q: "係唔係合法",
    a: "一定係！需要嘅話我就可以提供埋合約"
  },

  {
    q: "點解成立呢個平台？",
    a: "為咗方便咁多位可以用優質嘅價錢購買到優質嘅服務，同埋可以大家一齊交友，擴闊自己嘅社交圈子，我哋就用咗呢個中心成立咗呢個平台"
  }
]

//the q&a section make use of mui Accordion
const accordions = qAndA.map(qa => 
  <Accordion key={qa.q} className='py-8'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls='panel1-content'
      id={qa.q}
      className='font-bold'
    >
      {qa.q}
    </AccordionSummary>

    <AccordionDetails>
      {qa.a}
    </AccordionDetails>
  </Accordion>
)

const CommonQA = () => {
  return (
    <div className='bg-gray-800'>
      <NavDisplay texts={"常見問題"} />
      <div className='md:max-w-[70vw] max-w-[80vw] py-16 m-auto'>
        {accordions}
      </div>
    </div>

  )
}

export default CommonQA