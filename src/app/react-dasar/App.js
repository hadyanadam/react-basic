import React, { Component } from 'react';
import './../../App.css';
import MenuResto from './components/MenuResto'

class App extends Component{
  constructor(){
    super();
    this.state = {
      namaResto: "Sundaya",
      namaPembeli: "",
      keterangan: "",
      jenisPembayaran: "",
      menuMakanan: [
        {key:1,nama: "Ayam Goreng", harga: "25.000", stock: 2},
        {key:2,nama: "Ayam Sangar", harga: "20.000", stock: 1}
      ],
      menuMinuman:[
        {key:1,nama: "Jus Jeruk", harga: "5.000", stock: 5},
        {key:2,nama: "Teh Manis", harga: "3.000", stock: 5},
        {key:3,nama: "Teh Anget", harga: "3.000", stock: 2},
      ]
    }
  }

  handleGantiNama = (nama) => {
    this.setState({ namaResto: nama })
  }

  // handleChangeNamaPembeli= (event) => {
  //   this.setState({namaPembeli: event.target.value})
  // }

  // handleChangeKeterangan = (event) => {
  //   this.setState({keterangan: event.target.value})
  // }

  // handleChangeJenisPembayaran = (event) => {
  //   this.setState({jenisPembayaran: event.target.value})
  // }

  handleFormChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
  }

  render(){
    return (
      <div className="App">
        <h1>Cafe And Resto {this.state.namaResto}</h1>
        <button className="btn btn-primary" onClick={() => this.handleGantiNama('Naga')}>
          Ganti Nama Resto
        </button>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-sm-4 offset-sm-4">
            <form>
              <div className="form-group">
                <label>Nama Pembeli:</label>
                <input className="form-control"
                  name="namaPembeli"
                  onChange={this.handleFormChange}
                  value={this.state.namaPembeli}
                />
                <small>Nama Pembeli: {this.state.namaPembeli}</small>
              </div>
              <div className="form-group">
                <label>Keterangan:</label>
                <textarea className="form-control"
                  name="keterangan"
                  onChange={this.handleFormChange}
                  value={this.state.keterangan}
                ></textarea>
                <small>Keterangan: {this.state.keterangan}</small>
              </div>
              <div className="form-group">
                <label>Jenis Pembayaran: </label>
                <select className="form-control"
                  name="jenisPembayaran"
                  onChange={this.handleFormChange}
                  value={this.state.jenisPembayaran}
                >
                  <option value="cash">Cash</option>
                  <option value="kartuKredit">Kartu Kredit</option>
                  <option value="voucher">voucher</option>
                </select>
                  <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
              </div>
            </form>
          </div>
        </div>
        <h2>Menu Makanan</h2>
        {this.state.menuMakanan.map(menu =>
          <MenuResto
            key={menu.key}
            namaMenu={menu.nama}
            hargaMenu={menu.harga}
            stock={menu.stock}
          />
        )}
        <h2>Menu Minuman</h2>
        {this.state.menuMinuman.map(menu =>
          <MenuResto
            key={menu.key}
            namaMenu={menu.nama}
            hargaMenu={menu.harga}
            stock={menu.stock}
          />
        )}
      </div>
    );
  }
}

export default App;
