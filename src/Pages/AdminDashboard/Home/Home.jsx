import React from 'react'
import "./Home.css"
import FeaturedList from "../../../Components/FeaturedInfo/FeaturedInfo";
import WidgetClientLg from "../../../Components/WidgetClientLg/widgetLg";
import Payments from "../../../Components/Payment/PaymentWidget";
import Marketing from "../../../Components/Marketing/MarketingWidget";
import Delivery from "../../../Components/Delivery/DeliveryWidget";
import AfterSalesService from "../../../Components/AfterSalesService/AfterSalesServiceWidget";
export default function Home() {
    return (
      <div className='home'>
          <FeaturedList/>
          <div className="homeWidgetClient">
          <WidgetClientLg/>
          </div>
          <Marketing/>
          <Payments/>
          <Delivery/>
          <AfterSalesService/>
      </div>
    )
  }