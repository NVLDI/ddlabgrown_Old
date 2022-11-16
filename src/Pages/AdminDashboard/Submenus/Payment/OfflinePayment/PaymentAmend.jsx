import "../Payment.css"
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";

export default function PaymentAmend() {
  let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let Current = date+"/"+month+ "/"+year;
  return (
    <div>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <div className="Payment">
                    <h2 className="PaymentClient">Offline Payment Amend</h2>
                    <div className="PaymentWidgetClient">
                        <form className="newPaymentForm">
                        <div className="newPaymentItem">
                                
                        </div>
                        <div className="newPaymentItem">
                
                        </div>
                        <div className="newPaymentItem">
                                <label>Date</label>
                                <input type="text" placeholder="Date" value={Current}/>
                        </div>
                        <div className="newPaymentItem">
                                <label>Transcation No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Invoice No</label>
                                <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                </select>
                                <label className="namedefine">Purchase Order No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Amount</label>
                        <input type="text" placeholder=""/>
                        </div>
                        <div className="newPaymentItem">
                        <label>Currency</label>
                        <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">HKD</option>
                                <option value="3">RMB</option>
                                <option value="4">USD</option>
                                <option value="5">RM</option>
                                </select>
                        <label className="namedefine">Payment Method</label>
                        <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Offlice</option>
                                <option value="3">Online</option>
                                </select>
                        <label className="namedefine">Payment Method</label>
                        <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Cash</option>
                                <option value="3">Bank Transfer</option>
                                <option value="4">POS</option>
                                <option value="5">Card Transcation</option>
                                <option value="6">Paypal</option>
                                <option value="7">Alipay</option>
                                <option value="8">Wechat</option>
                                <option value="9">Crytro Currency</option>
                                </select>
                                <label className="namedefine">Crytro Currency</label>
                        <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Bitcoin</option>
                                <option value="3">USTD</option>
                                </select>
                        </div>
                        <div className="newPaymentItem">
                        <label>Bank Name</label>
                        <select id="example" class="autocomplete">
                                <option value="1">None</option>
                                <option value="2">Hongleong Bank</option>
                                <option value="3">Standard CB</option>
                        </select>
                        <label className="namedefine">Account No</label>
                        <input type="text" placeholder=""/>
                        <label className="namedefine">Shift Code</label>
                        <input type="text" placeholder=""/>
                        </div>
                        <button className="PaymentCreateButton">Save</button>
                        <button className="PaymentClearButton">Print</button>
                        </form>
                    </div>
            </div>
    </div>
    </div>
  )
}
