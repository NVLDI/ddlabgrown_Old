import "./SalesModule.css"
import Sidebar from "../../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../../Components/Topbar/Topbar";

export default function SalesModule(){
    let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let Current = date+"/"+month+ "/"+year;
    return(
        <div>
        <Topbar/>
        <div className="container">
        <Sidebar/>
            <div className="Sales">
            <h2 className="SalesClient">Order Cart</h2>
            <div className="SalesWidgetClient">
            <form className="newSalesForm">
                        <div className="newSalesItem">
                        <label>Distributor No</label>
                                <input type="text" placeholder=""/>
                                <label className="namedefine">Distributor Name</label>
                                <input type="text" placeholder="" disabled/>
                                <label className="namedefine">Contact No</label>
                                <input type="text" placeholder="" disabled/>
                        </div>
                        
                        </form>
            </div>
            <div className="SalesWidgetClient">
            <form className="newSalesForm">
                        <div className="newSalesItem">
                              
                        </div>
                        <div className="newSalesItem">
                
                        </div>
                        <div className="newSalesItem">
                                
                        </div>
                        <div className="newSalesItem">
                              
                        </div>
                        <div className="newSalesItem">
                
                        </div>
                        <div className="newSalesItem">
                                
                        </div>
                        </form>
            </div>
            </div>
        </div>
        </div>
    )
}