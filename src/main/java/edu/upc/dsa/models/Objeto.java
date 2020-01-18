package edu.upc.dsa.models;

public class Objeto {

    private String nombre;

    public Objeto(String nombre) {

        this.nombre = nombre;
    }

    public Objeto(){

    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public String toString() {
        return "Objeto{" +
                "nombre='" + nombre + '\'' +
                '}';
    }

}