import React from "react"
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Modal,Button,Form } from "react-bootstrap";
import logo from '../image.png';
import ceklis from '../ceklis.png';
import thx from '../thx.png';
import "./Tabs.css";
import blueLine from '../blueLine.png';
import linePolos from '../linePolos.png';

function Tabs12() {
  

  //modal
  const [modalShow, setModalShow] = React.useState(true);
  const [namaForm, setNamaForm] = useState('')

  //form 0
  const [toggleState, setToggleState] = useState(1);
  const [formStep, setFormStep] = React.useState(0)
  const [namaDepan, setNamaDepan] = useState('')
  const [namaBelakang, setNamaBelakang] = useState('')
  const [tempatLahir, setTempatLahir] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('')
  
  
  const [prov, setProvinsi] = useState('')
  const [kotaKab, setKota] = useState('')
  const [kec, setKecamatan] = useState('')
  const [kodePos, setKodePos] = useState('')
  const [alamatLengkap, setAlamat] = useState('')
  const [noKtp, setNoKtp] = useState('')
  const [kel, setKel] = useState('')

  //form 1
  const [uploadFotoUsaha, setFotoUsaha] = useState('')
  const [KepemilikanUsaha, setKepemilikanUsaha] = useState('')
  const [website, setWebsite] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [kategori, setKategoriUsaha] = useState('')



  //form 2
  const [Npwp, setNpwp] = useState('')
  const [sertifikatHalal, setSertifikatHalal] = useState('')
  const [sertifikatNIB, setSertifikatNIB] = useState('')
  const [halal, setHalal] = useState(true)
  const [nib, setNIB] = useState(true)

  //form 3
  const [namaBrand, setnamaBrand] = useState('')
  const [haki, setHaki] = useState('')

  //form bank
  const [namaBank, setNamaBank] = useState('')
  const [pemilikRek, setPemilikRek] = useState('')
  const [noRek, setNoRek] = useState('')
  //modal


  //form 0
  const completeFormStep0 = () => {
    // if (namaDepan == '') {
    //   setNamaForm('Nama depan')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (namaBelakang == ''){
    //   setNamaForm('Nama belakang')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (tempatLahir == ''){
    //   setNamaForm('Tempat Lahir')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (tanggalLahir == ''){
    //   setNamaForm('Tanggal lahir')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (noTlp == ''){
    //   setNamaForm('Nomor telepon')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (email == ''){
    //   setNamaForm('Email')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (kodePos == ''){
    //   setNamaForm('Kode pos')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (alamat == ''){
    //   setNamaForm('Alamat')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else if (noKtp == ''){
    //   setNamaForm('Nomor KTP')
    //   setModalShow(false)
    //   setTimeout(() => {  
    //     setModalShow(true)
    //   }, 2000);
    // }
    // else {
      setFormStep(1)
      setModalShow(true)
    // }
  }

  //form 1
  const completeFormStep1 = () => {

    // if (KepemilikanUsaha == '2') {
    //   setFormStep(cur => cur + 1)
    // }
    // else {
      setFormStep(2)
    
  }

  //form 2
  const completeFormStep2 = () => {
    setFormStep(3)
  }

  //form 3
  const completeFormStep3 = () => {
      setFormStep(5)
    
  }

  //form 4
  const completeFormStep4 = () => {
    setFormStep(5)
  }
  //form last/5
  const completeFormStepLast = () => {
    setFormStep(6)
  }

  const setelahStep2 = () => {
    setFormStep(4)
  }

  function changeNamaDepan(e) {
    const value = e.target.value
    setNamaDepan(value)
  }
  function changeNamaBank(e) {
    const value = e.target.value
    setNamaBank(value)
  }

  function changeNoRek(e) {
    const value = e.target.value
    setNoRek(value)
  }

  function changePemilikRek(e) {
    const value = e.target.value
    setPemilikRek(value)
  }

  function changeNamaDepan(e) {
    const value = e.target.value
    setNamaDepan(value)
  }

  function changeNamaBelakang(e) {
    const value = e.target.value
    setNamaBelakang(value)
  }

  function changeTempatLahir(e) {
    const value = e.target.value
    setTempatLahir(value)
  }

  function changeAlamatLengkap(e){
    const value = e.target.value
    setAlamat(value)
  }
  

  function changeTanggalLahir(e) {
    const value = e.target.value
    setTanggalLahir(value)
  }
  function changeJenisKelamin(e) {
    const value = e.target.value
    setJenisKelamin(value)
  }

  
  function changeProv(e) {
    const value = e.target.value
    setProvinsi(value)
  }

  function changeKotaKab(e) {
    const value = e.target.value
    setKota(value)
  }

  function changeKec(e) {
    const value = e.target.value
    setKecamatan(value)
  }

  function changeKel(e) {
    const value = e.target.value
    setKel(value)
  }

  function changeKota(e) {
    const value = e.target.value
    setKota(value)
  }
  function changeKecamatan(e) {
    const value = e.target.value
    setKecamatan(value)
  }

  function changeKodePos(e) {
    const value = e.target.value
    setKodePos(value)
  }
  function changeAlamat(e) {
    const value = e.target.value
    setAlamat(value)
  }
  function changeNoKtp(e) {
    const value = e.target.value
    setNoKtp(value)
  }
  function changeFotoUsaha(e) {
    const value = e.target.value
    setFotoUsaha(value)
  }

  function changeNpwp(e) {
    const value = e.target.value
    setNpwp(value)
  }

  function changeWebsite(e) {
    const value = e.target.value
    setWebsite(value)
  }

  function changeFacebook(e) {
    const value = e.target.value
    setFacebook(value)
  }

  function changeInstagram(e) {
    const value = e.target.value
    setInstagram(value)
  }
  
  function changeTiktok(e) {
    const value = e.target.value
    setTiktok(value)
  }

  function changeTwitter(e) {
    const value = e.target.value
    setTwitter(value)
  }
  
  function changeKategoriUsaha(e) {
    const value = e.target.value
    setKategoriUsaha(value)
  }
  function changeKepemilikanUsaha(e) {
    const value = e.target.value
    setKepemilikanUsaha(value)
  }
  function changenamaBrand(e) {
    const value = e.target.value
    setnamaBrand(value)
  }
  function changeNpwp(e) {
    const value = e.target.value
    setNpwp(value)
  }
  function changeHaki(e) {
    const value = e.target.value
    setHaki(value)
  }
  function changeSertifikatHalal(e) {
    const value = e.target.value
    setSertifikatHalal(value)
  }
  function changeSertifikatNIB(e) {
    const value = e.target.value
    setSertifikatNIB(value)
  }
  


  //form 1
  const backFormStep1 = () => {
    setFormStep(cur => cur - 1)
  }
  //form 2
  const backFormStep2 = () => {
    setFormStep(cur => cur - 1)
  }
  //form 3
  const backFormStep3 = () => {
    setFormStep(cur => cur - 1)
  }
  //form 4
  const backFormStep4 = () => {
    setFormStep(cur => cur - 3)
  }
  //form last/5
  const backFormStepLast = () => {
    setFormStep(cur => cur - 2)
  }
  

  const toggleTab = (index) => {
    setToggleState(index);
  };


  const [formValues, setFormValues] = useState([{ name: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields1 = () => {
    if(Npwp == ''){
      setNamaForm('NPWP')
      setModalShow(false)
      setTimeout(() => {  
        setModalShow(true)
      }, 2000);
    }else{
      setHalal(false)
    }
  }
  let addFormFields2 = () => {
    setNIB(false)
  }

  let removeFormFields1 = () => {
    setHalal(true)
  }
  let removeFormFields2 = () => {
    setNIB(true)
  }

  let handleSubmit = (event) => {
    event.PreventDefault();
    alert(JSON.stringify(formValues));
  }


  return (

    <div className="body" style={{ backgroundColor: "#F0F4FA" }}>
  
      <img className="banner" src={logo} style={{ width: "100%" }} />
      <br />
      <h2 className="daftarkan-txt text-center mt-5" style={{ color: "#253863" }}>Daftarkan Usaha Anda Di TokoRumahan</h2>
      <h4 className="pastikan-txt text-center" style={{ color: "#6B7588" }}>Pastikan penjual adalah produsen</h4>

      <div className="modal-warning">
              <Modal.Dialog hidden={modalShow}>
            <img className="icon-warning" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/warning-symbol%2C-warning-sign-design-template-5becb2f6646d14a8076b36a92efb1db8.jpg?ts=1609018489" alt="warning"/><br/>
            <h3 className="txt-header">{namaForm} harus diisi</h3>
            </Modal.Dialog>
              </div>

      <div className="container">


        <div className="content-tabs">
          <div
          >

            <div className="form-user shadow p-3 mt-5 pb-5 bg-body rounded container">
            
            
              <form>
                {formStep === 0 && (
                  <section>

                    
                  <div className="tabsss d-flex">

                    <div className="steps1 d-flex">
                      <div className="step-1">
                        <div className="container">
                          <h5 className="kotak-nomor rounded pt-1 text-center pt-2 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}>1</h5>
                          <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps2">
                        <div className="container">
                          <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>2</h5>
                          <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                        </div>
                      </div>

                    </div>

                    <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps3">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>3</h5>
                          <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps4">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>4</h5>
                          <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>
 
                      <div className="steps5">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>5</h5>
                          <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                        </div>
                      </div>

                      </div>




                    <h3 className="title">Identitas Pemilik Usaha</h3>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Nama Depan</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={namaDepan} class="form-control" id="validationDefault01" placeholder="Nama Lengkap Anda" onChange={changeNamaDepan} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Nama Belakang</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Nama Belakang Anda" value={namaBelakang} onChange={changeNamaBelakang} required />
                      </div>
                    </div>

                    <div class="form-row d-flex">
                      <div class="form-group  ps-4 ms-5">
                        <label class="form-check-label" for="flexRadioDefault1">Jenis Kelamin</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <div className="radiobox d-flex mt-3" >
                          <div class="form-check">
                            <input  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="laki-laki" onChange={changeJenisKelamin} />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Laki-Laki
                            </label>
                          </div>

                          <div class="form-check ms-3 mb-4">
                            <input  class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="perempuan" onChange={changeJenisKelamin} />
                            <label class="form-check-label" for="flexRadioDefault1">
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="form-row d-flex">
                        
                      <div class="ktp form-group col-md-10">
                        <label for="contoh1">No. KTP </label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="number" class="ktp-form form-control" id="contoh5" placeholder="Masukan No.KTP" value={noKtp} onChange={changeNoKtp} required />
                      </div>
                    </div>
                    
                    </div>

                    

                    <div class="jarak form-row d-flex justify-content-center">
                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Tanggal Lahir</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="date" class="form-control" id="contoh4" value={tanggalLahir} onChange={changeTanggalLahir} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                      </div>
                    </div>

                    
                    <h3 className="title">Alamat Pemilik Usaha</h3>

                    <div class="form-row d-flex justify-content-center">
                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Alamat Lengkap</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh5" placeholder="Masukan Alamat Lengkap Anda" value={alamatLengkap} onChange={changeAlamatLengkap}  />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Kota/Kabupaten</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input  style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh6" placeholder="Masukan Kota/Kabupaten" value={kotaKab} onChange={changeKotaKab}  />
                      </div>
                    </div>

                    <div class="form-row d-flex justify-content-center">
                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Kecamatan</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh5" placeholder="Masukan Kecamatan Anda" value={kec} onChange={changeKec} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Kelurahan</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input  style={{ backgroundColor: "#F0F4FA"}} type="Email" class="form-control" id="contoh6" placeholder="Masukan Kelurahan Anda" value={kel} onChange={changeKel} required />
                      </div>
                    </div>

                    <div class="form-row d-flex justify-content-center">
                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Provinsi</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh5" placeholder="Masukan Provinsi Anda" value={prov} onChange={changeProv} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Kode Pos</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input  style={{ backgroundColor: "#F0F4FA"}} type="Email" class="form-control" id="contoh6" placeholder="Masukan Kode Pos" value={kodePos} onChange={changeKodePos} required />
                      </div>
                    </div>


                    
                    <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                      <button onClick={completeFormStep0} class="btn text-light" style={{ width: "283px",height:"44px", backgroundColor: "#5979C0" }} type="submit">Selanjutnya</button>
                    </div>
                  </section>
                )}

                {formStep === 1 && (
                  <section>

                    <div className="tabsss d-flex">

                    <div className="steps1 d-flex">
                      <div className="step-1">
                        <div className="container">
                          <h5 className="kotak-nomor rounded pt-1 ps-3 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                          <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={blueLine} alt="garis"/>

                      <div className="steps2">
                        <div className="container">
                          <h5 className="kotak-nomor rounded  text-center pt-2 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}>2</h5>
                          <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                        </div>
                      </div>

                    </div>

                    <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps3">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>3</h5>
                          <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps4">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>4</h5>
                          <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps5">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>5</h5>
                          <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                        </div>
                      </div>

                      </div>


                    <h3 className="title">Identitas Usaha</h3>

                    <div class="container col-md-11 me-2 ms-5 ps-3 pe-3 mt-4">
                    
                    <div>
                    <div className="input-group mb-3 col-md-5">
                    <div className="custom-file">
                <input style={{ backgroundColor: "#F0F4FA"}} onChange={uploadFotoUsaha} type="file" className="upload-file custom-file-input" />
                <label style={{ backgroundColor: "#F0F4FA"}}  className="upload-file custom-file-label" >Upload file disini</label>
            </div>
            <div className="input-group-append">
            </div>
            </div>


            <div className="col-md-7"> 

            </div>
              </div>
                  </div>
                  

                  <div class="form-row d-flex justify-content-center">
                      <div class="form-group col-md-5 me-5">
                        <div className="d-flex">
                          <label for="contoh2">Kepemilikan Usaha<sup className="required" style={{ color: "red" }}>*</sup></label>
                          
                          </div>
                          
                              <div className="mb-3">
                                <Form.Check
                                  inline
                                  label="Milik Sendiri"
                                  name="group1"
                                  type="radio"
                                  value="sendiri"
                                  
                                />
                                <Form.Check
                                  inline
                                  label="Badan Usaha"
                                  name="group1"
                                  type="radio"
                                  value="badan"
                                  
                                />
                               
                              </div>
                          
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <Form.Group className="mb-3">
                        <Form.Label >Kategori Usaha<sup className="required" style={{ color: "red" }}>*</sup></Form.Label>
                        <Form.Select style={{ backgroundColor: "#F0F4FA"}} >
                          <option>Makanan</option>
                        </Form.Select>
                      </Form.Group>
                      </div>
                    </div>

                    <h3 className="title">Sosial Media</h3>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Website</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={website} class="form-control" id="validationDefault01" placeholder="Masukan URL" onChange={changeWebsite} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Facebook</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Masukan URL" value={facebook} onChange={changeFacebook} required />
                      </div>
                    </div>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Instagram</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={instagram} class="form-control" id="validationDefault01" placeholder="Masukan URL" onChange={changeInstagram} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Twitter</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Masukan URL" value={twitter} onChange={changeTwitter} required />
                      </div>
                    </div>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Tiktok</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={namaDepan} class="form-control" id="validationDefault01" placeholder="Masukan URL" onChange={changeNamaDepan} required />
                      </div>
                      <div class="form-group col-md-5 mb-4">
                      </div>
                    </div>

                   
                    {/* <div className="d-flex mt-4">
                      <div class="col-4 d-flex justify-content-start ms-5 ps-3">
                        <button onClick={backFormStep1} class="btn text-light" style={{ width: "30%", backgroundColor: "#f16e60" }} type="button">Kembali</button>
                      </div>

                      <div class="col-7 d-flex justify-content-end ms-1 ps-1 pe-3" style={{ left: "30px" }}>
                        <button onClick={completeFormStep1} class="btn text-light" style={{ width: "20%", backgroundColor: "#f16e60" }} type="submit">Lanjut</button>
                      </div>
                    </div> */}
                    <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                      <button onClick={setelahStep2} class="btn text-light" style={{ width: "283px",height:"44px", backgroundColor: "#5979C0" }} type="submit">Selanjutnya</button>
                    </div>
                  </section>
                )}

                

                {formStep === 3 && (
                  <section>

                    <div className="tabsss d-flex">

                    <div className="steps1 d-flex">
                      <div className="step-1">
                        <div className="container">
                          <h5 className="kotak-nomor rounded pt-1 ps-3 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                          <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={blueLine} alt="garis"/>

                      <div className="steps2">
                        <div className="container">
                          <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                          <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                        </div>
                      </div>

                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                      <div className="steps3">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                          <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={blueLine} alt="garis"/>

                      <div className="steps4">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  text-center pt-2 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}>4</h5>
                          <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                        </div>
                      </div>

                      <img className="icon-garis" src={linePolos} alt="garis"/>

                      <div className="steps5">
                        <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>5</h5>
                          <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                        </div>
                      </div>

                      </div>



                    <h3 className="title">Nama & Rekening Bank</h3>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Nama Bank</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={namaBank} class="form-control" id="validationDefault01" placeholder="Nama Bank" onChange={changeNamaBank} required />
                      </div>
                      <div class="form-group col-md-5 ">
                      {/* <label for="contoh2">Nomor Rekening</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Masukan URL" value={namaBelakang} onChange={changeNamaBelakang} required /> */}
                      </div>
                      
                    </div>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Nama Pemilik Rekening Bank</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={pemilikRek} class="form-control" id="validationDefault01" placeholder="Nama Pemilik Rekening" onChange={changePemilikRek} required />
                      </div>
                      
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Nomor Rekening</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Masukan Nomor Rekening" value={noRek} onChange={changeNoRek} required />
                      </div>
                    </div>

                    <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                      <button onClick={completeFormStep4} class="btn text-light" style={{ width: "283px",height:"44px", backgroundColor: "#5979C0" }} type="submit">Selanjutnya</button>
                    </div>
                  </section>
                )}

                 {/* //BADAN USAHA// */}
                 {formStep === 4 && (
                  <section>

                  <div className="tabsss d-flex">

                  <div className="steps1 d-flex">
                    <div className="step-1">
                      <div className="container">
                        <h5 className="kotak-nomor rounded pt-1 ps-3 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps2">
                      <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                      </div>
                    </div>

                  </div>

                  <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps3">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  text-center pt-2 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}>3</h5>
                        <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={linePolos} alt="garis"/>

                    <div className="steps4">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>4</h5>
                        <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={linePolos} alt="garis"/>

                    <div className="steps5">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-2 text-center shadow" style={{ width: "40px", height: "40px", backgroundColor: "#EEEEEE", color:"#8F90A6" }}>5</h5>
                        <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                      </div>
                    </div>

                    </div>


                    <h3 className="title">Legalitas & Izin Usaha</h3>

                    <div class="form-row d-flex mt-4">

                      <div class="form-group col-md-6 ms-5 ps-3">
                        <label for="contoh1">NPWP</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA", width:"75%"}} className="bg-form" type="text" value={Npwp} class="form-control" id="validationDefault01" placeholder="Masukan Nomor NPWP" onChange={changeNpwp} required />
                      </div>
                      
                    </div>

                    

                    <div class="container col-md-11 me-2 ms-5 ps-3 pe-3">
                              <div>
                              <label for="contoh1">Upload Sertifikat Halal (Optional)</label>
                              <div className="input-group mb-3 col-md-5">
                              <div className="custom-file">
                          <input style={{ backgroundColor: "#F0F4FA"}} type="file" className="upload-file custom-file-input" id="file02"/>
                          <label style={{ backgroundColor: "#F0F4FA"}} className="upload-file custom-file-label" for="file02">Upload file disini</label>
                      </div>
                      <div className="input-group-append">
                      </div>
                      </div>


                      <div className="col-md-7"> 

                      </div>
                        </div>
                            </div>


                            <div class="container col-md-11 me-2 ms-5 ps-3 pe-3 ">
                    
                    <div>
                    <label for="contoh1">Upload Nomor Induk Berusaha (Optional)</label>

                            <div className="input-group mb-3 col-md-5">
                            <div className="custom-file">
                        <input style={{ backgroundColor: "#F0F4FA"}} type="file" className="upload-file custom-file-input" id="file02"/>
                        <label style={{ backgroundColor: "#F0F4FA"}} className="upload-file custom-file-label" for="file02">Upload file disini</label>
                    </div>
                      <div className="input-group-append">
                      </div>
                    </div>


                      <div className="col-md-7"> 

                    </div>
                      </div>
                  </div>

                    {/* <div className="d-flex">
                      <div class="col-4 d-flex justify-content-start ms-5 ps-3">
                        <button onClick={backFormStep4} class="btn text-light" style={{ width: "30%", backgroundColor: "#f16e60" }} type="button">Kembali</button>
                      </div>

                      <div class="col-7 d-flex justify-content-end ms-1 ps-1 pe-3" style={{ left: "30px" }}>
                        <button onClick={completeFormStep4} class="btn text-light" style={{ width: "20%", backgroundColor: "#f16e60" }} type="submit">Lanjut</button>
                      </div>
                    </div> */}
                    <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                      <button onClick={completeFormStep2} class="btn text-light" style={{ width: "283px",height:"44px", backgroundColor: "#5979C0" }} type="submit">Selanjutnya</button>
                    </div>
                  </section>
                )}

                  {formStep === 5 && (
                  <section>

                  <div className="tabsss d-flex">

                  <div className="steps1 d-flex">
                    <div className="step-1">
                      <div className="container">
                        <h5 className="kotak-nomor rounded pt-1 ps-3 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps2">
                      <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                      </div>
                    </div>

                  </div>

                  <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps3">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps4">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps5">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  text-center pt-2 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}>5</h5>
                        <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                      </div>
                    </div>

                    </div>


                    <h3 className="title">Brand</h3>

                    <div class="form-row d-flex justify-content-center">

                      <div class="form-group col-md-5 me-5">
                        <label for="contoh1">Nama Brand</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} className="bg-form" type="text" value={namaBrand} class="form-control" id="validationDefault01" placeholder="Masukan Nama Brand" onChange={changenamaBrand} required />
                      </div>
                      
                      <div class="form-group col-md-5 mb-4">
                        <label for="contoh2">Nomor Sertifikat HAKI</label>
                        <sup className="required" style={{ color: "red" }}>*</sup>
                        <input style={{ backgroundColor: "#F0F4FA"}} type="text" class="form-control" id="contoh2" placeholder="Masukan Nomor Sertifikat HAKI" value={namaBelakang} onChange={changeNamaBelakang} required />
                      </div>
                    </div>

                    <div class="container col-md-11 me-2 ms-5 ps-3 pe-3">
                              <div>
                              <label for="contoh1">Upload Sertifikat HAKI (Optional)</label>
                              <div className="input-group mb-3 col-md-5">
                              <div className="custom-file">
                          <input style={{ backgroundColor: "#F0F4FA"}} type="file" className="upload-file custom-file-input" id="file02"/>
                          <label style={{ backgroundColor: "#F0F4FA", width:"455px"}} className="upload-file custom-file-label" for="file02">Upload file disini</label>
                      </div>
                      <div className="input-group-append">
                      </div>
                      </div>


                      <div className="col-md-7"> 

                      </div>
                        </div>
                            </div>

                            <div class="col-12 mt-4 d-flex justify-content-end pe-5">
                      <button onClick={completeFormStepLast} class="btn text-light" style={{ width: "283px",height:"44px", backgroundColor: "#5979C0" }} type="submit">Kirim Form</button>
                    </div>
                  </section>
                )}

                  {formStep === 6 && (
                  <section>

                  <div className="tabsss d-flex">

                  <div className="steps1 d-flex">
                    <div className="step-1">
                      <div className="container">
                        <h5 className="kotak-nomor rounded pt-1 ps-3 text-light shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-on text-center" >Identitas Pemilik</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps2">
                      <div className="container">
                        <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul  text-center text-secondary">Identitas Usaha</h5>
                      </div>
                    </div>

                  </div>

                  <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps3">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul text-center  text-secondary">Legalitas & Izin Usaha</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps4">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul text-center text-secondary">Nama & Rekening Bank</h5>
                      </div>
                    </div>

                    <img className="icon-garis" src={blueLine} alt="garis"/>

                    <div className="steps5">
                      <div className="container">
                      <h5 className=" kotak-nomor rounded  pt-1 ps-3 shadow" style={{ width: "40px", height: "40px", backgroundColor: "#5979C0", color:"#FAFAFC" }}><img className="ceklis" src={ceklis} alt="ceklis"></img></h5>
                        <h5 className="txt-judul text-center ms-3 text-secondary">Brand</h5>
                      </div>
                    </div>

                    </div>



                    <div className="thx text-center mt-5">
                      <img className="img-thx" src={thx} alt="thx" style={{ width: "291px", height: "213px" }} />
                      <h3 className="title-thx">Terima Kasih telah mendaftar</h3>

                    </div>
                    
                  </section>
                )}



              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
    
  );
}

export default Tabs12;