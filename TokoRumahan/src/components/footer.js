const Footer = () => {
    return (
        <div className="foot">
        <div className="isi-footer" style={{ backgroundColor: "#253863" }}>
            <div className="container-fluid d-flex">
                <div className="tentang-kami container w-25 ms-5">
                <h5 className="text-light mt-5 mb-3">Tentang kami</h5>
                <p className="text-light">TokoRumahan membantu produk rumahan menjangkau pasar yang lebih luas dengan memanfaatkan teknologi terbaru yang mudah digunakan siapapun.</p>
                </div>

                <div className="tentang-kami container w-25" style={{marginLeft:""}}>
                <h5 className="text-light mt-5 mb-3 text-center">Tautan Penting</h5>
                <p className="text-light text-center">- FAQ</p>
                </div>

                <div className="tentang-kami container w-auto" style={{marginLeft:""}}>
                <img className="logobranding mt-5 mb-3" src="image/logobrand.svg"/>
                <p className="text-light">
                <img src="/image/mail.svg" class="icon-md pe-2" height="30"/>
                info@tokorumahan.com
                </p>

                <p className="text-light">
                <img src="/image/call.svg" class="icon-md pe-2" height="30"/>
                +62 812 8520 4034
                </p>

                <p className="text-light">
                <img src="/image/home.svg" class="icon-md pe-2" height="30"/>
                Jalan DR Rum No. 26 A Bandung 40171
                </p>

                </div>
            </div>
            <div className="d-flex justify-content-center">
                <img src="/image/icn-fb.svg" class="icon-md pe-2 me-3" height="35"/>
                <img src="/image/icn- ig.svg" class="icon-md pe-2 me-3" height="35"/>
                <img src="/image/icn- twitter.svg" class="icon-md pe-2 me-3" height="35"/>
                <img src="/image/icn- tiktok.svg" class="icon-md pe-2" height="35"/>
            </div>
            <br/>
        </div>

            <div class="container-fluid" style={{backgroundColor:"#19273f", height:"50%"}}>
            <p class="text-muted text-center">Copyright ©2022 All rights reserved | <a className="" style={{color:"#FFCF5b"}} href="/beranda">TokoRumahan</a> Indonesia</p>
            </div>
            </div>
    );
}
export default Footer