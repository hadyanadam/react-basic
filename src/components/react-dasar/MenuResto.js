import React from "react"

let menuResto = (props) => {
    let styles = {border: "1px solid black", width: "300px", margin: "auto"}
    if(props.stock > 0){
        return(
            <div style={styles}>
                <p>Nama Menu    : {props.namaMenu}</p>
                <p>Harga Menu   : Rp.{props.hargaMenu}</p>
                <p>Stock        : {props.stock}</p>
            </div>
        )
    } else{
        return null
    }

}

export default menuResto