package edu.upc.dsa.models.Users;


import edu.upc.dsa.models.Objeto;

import java.util.List;

public class UserInventory {

    private List<Objeto> lista;

    public UserInventory (List<Objeto> lista){
        this.lista = lista;
    }

    public UserInventory(){

    }
    public List<Objeto> getLista() {
        return lista;
    }

    public void setLista(List<Objeto> lista) {
        this.lista = lista;
    }
}
