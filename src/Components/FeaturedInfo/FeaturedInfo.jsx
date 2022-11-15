import React from 'react'
import "./FeaturedInfo.css";
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
export default function featuredInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">
                List of Distributor
            </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">0</span>
            <span className="featuredMoneyRate">
                 <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featureSub">Compare to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Total no of Sales
            </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">0</span>
            <span className="featuredMoneyRate">
                 <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featureSub">Compare to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Total Payments
            </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">0</span>
            <span className="featuredMoneyRate">
               <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featureSub">Compare to Last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Total Delivery
            </span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">0</span>
            <span className="featuredMoneyRate">
                <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featureSub">Compare to Last Month</span>
        </div>
    </div>
  )
}
