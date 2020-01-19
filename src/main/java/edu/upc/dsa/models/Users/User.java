package edu.upc.dsa.models.Users;

import edu.upc.dsa.models.Objeto;
import java.util.ArrayList;
import java.util.List;

public class User {

    private String username;
    private String password;
    /*private String name;
    private String surname;
    private String mail;
    private int age;*/
    private List<Objeto> listObjetos;

    private int regalosentregados;
    private int partidasjugadas;
    private int minutosjugados;

    public User() {

        this.listObjetos = new ArrayList<Objeto>();
    }

    public User(String username, String password, String name, String surname, String mail, int age){
        this.username = username;
        this.password = password;
        /*this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.age = age;*/
        this.listObjetos = new ArrayList<Objeto>();
    }

    public User(String username, String password, String name, String surname, String mail, int age, List<Objeto> listObjetos, int regalosentregados, int minutosjugados, int partidasjugadas) {
        this.username = username;
        this.password = password;
        /*this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.age = age;*/
        this.listObjetos = listObjetos;
        this.regalosentregados = regalosentregados;
        this.minutosjugados = minutosjugados;
        this.partidasjugadas = partidasjugadas;
    }

    public User(String username, String password, String name, String surname, String mail, int age, int regalosentregados, int minutosjugados, int partidasjugadas) {
        this.username = username;
        this.password = password;
        /*this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.age = age;*/
        this.listObjetos = new ArrayList<Objeto>();
        this.regalosentregados = regalosentregados;
        this.minutosjugados = minutosjugados;
        this.partidasjugadas = partidasjugadas;
    }

    public User (String username, String password)
    {
        this.username = username;
        this.password = password;
        this.listObjetos = new ArrayList<Objeto>();

    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    /*public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }*/

    public List<Objeto> getListObjetos() {
        return listObjetos;
    }

    public void setListObjetos(List<Objeto> listObjetos) {
        this.listObjetos = listObjetos;
    }

    public int getRegalosentregados() {
        return regalosentregados;
    }

    public void setRegalosentregados(int regalosentregados) {
        this.regalosentregados = regalosentregados;
    }

    public int getPartidasjugadas() {
        return partidasjugadas;
    }

    public void setPartidasjugadas(int partidasjugadas) {
        this.partidasjugadas = partidasjugadas;
    }

    public int getMinutosjugados() {
        return minutosjugados;
    }

    public void setMinutosjugados(int minutosjugados) {
        this.minutosjugados = minutosjugados;
    }

    public void addObject (Objeto objeto)
    {

        this.listObjetos.add(objeto);
    }
    public int size ()
    {

        return this.listObjetos.size();
    }
}
