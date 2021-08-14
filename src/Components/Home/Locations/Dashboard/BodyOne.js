import React from 'react';
import Battery60OutlinedIcon from '@material-ui/icons/Battery60Outlined';
import HealingOutlinedIcon from '@material-ui/icons/HealingOutlined';
import OpacityOutlinedIcon from '@material-ui/icons/OpacityOutlined';
import './Meter2.css'
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
const BodyOne = () => {
    return (
        <div className="row">
            <div className="col-md-2 mb-2">
                <div className="bg-light d-flex align-items-center justify-content-center boxMakingFor " style={{width:'100%', height:'168px'}}>
                    <img style={{maxWidth:'99%', maxHeight:'98%', borderRadius:'10px'}} src="https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9jYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
            </div>
            <div className="col-md-2 mb-2">
            
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="ps-3 pt-2">
                        <h4>Battery Health:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <Battery60OutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>Vbat:<h3>3.519</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4 mb-2">
            <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4>Rssi Gateway:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <OpacityOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>RssiGateway:<h3>3.519</h3></h5>
                    </div>
                   </div>
                        </div>
                        <div className="col-md-6">
                        <div className="ps-3 pt-2">
                        <h4>N Medicion:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <HealingOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>nMedicion:<h3>1</h3></h5>
                    </div>
                   </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-2">
                <div className="bg-light boxMakingFor" style={{width:'100%', height:'168px'}}>
                <div className="ps-3 pt-2">
                        <h4>MS Active:</h4>
                    </div>
                   <div className="d-flex justify-content-center align-items-center" style={{width:'100%', height:'110px'}}>
                   <NotificationsActiveOutlinedIcon style={{fontSize:'40px'}}/>
                    <div>
                        <h5>msActivo:<h3>12004</h3></h5>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BodyOne;