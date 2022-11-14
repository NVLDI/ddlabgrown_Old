import "./DeliveryAmend.css"
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";

export default function DeliveryAmend() {
  return (
<div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
    <div className="Delivery">
                    <h2 className="DeliveryWidgetClient">Delivery Amend</h2>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                        <div className="newDeliveryItem">
                                <label>Delivery No</label>
                                <input type="text" placeholder="Delivery No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Invoice No</label>
                                <input type="text" placeholder="Invoice No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Delivery Method</label>
                                <input type="text" placeholder="Delivery Method"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>PO No</label>
                                <input type="text" placeholder="PO No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>ASM No</label>
                                <input type="text" placeholder="ASM No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Self Pick-Up Date</label>
                                <input type="text" placeholder="Self Pick-Up Date"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Time</label>
                                <input type="text" placeholder="Time"/>
                        </div>
                    </form>
                    </div>
                    <h4 className="DeliveryWidgetClient">Consignee/ Recipient</h4>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                        <div className="newDeliveryItem">
                                <label>Consignee To</label>
                                <input type="text" placeholder="Consignee To"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Distributor No</label>
                                <input type="text" placeholder="Distributor No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Address 1</label>
                                <input type="text" placeholder="Address 1"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Address 2</label>
                                <input type="text" placeholder="Address 2"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder="Contact No"/>
                        </div>
                        ....
                        <div className="newDeliveryItem">
                                <label>New Recipient</label>
                                <input type="text" placeholder="New Recipient"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Self Pick-Up Date</label>
                                <input type="text" placeholder="Self Pick-Up Date"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Address 1</label>
                                <input type="text" placeholder="Address 1"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Address 2</label>
                                <input type="text" placeholder="Address 2"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder="Contact No"/>
                        </div>
                    </form>
                    </div>
                    <h4 className="DeliveryWidgetClient">Courier Service</h4>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                        <div className="newDeliveryItem">
                                <label>Courier Service Company</label>
                                <input type="text" placeholder="Courier Service Company"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Invoice No</label>
                                <input type="text" placeholder="Invoice No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Delivery Bill No</label>
                                <input type="text" placeholder="Delivery Bill No"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Pick-Up Date</label>
                                <input type="text" placeholder="Pick-Up Date"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Time</label>
                                <input type="text" placeholder="Time"/>
                        </div>
                        <div className="newDeliveryItem">
                                <label>Contact No</label>
                                <input type="text" placeholder="Contact No"/>
                        </div>
                    </form>
                    </div>
                    <div className="DeliveryWidgetClient">
                    <form className="newDeliveryForm">
                    <div className="newDeliveryItem">
                                <label>Create By</label>
                                <input type="text" placeholder="Create By"/>
                        </div>
                        </form>
                        </div>
                        </div>
                        </div>
            </div>
  )
}
