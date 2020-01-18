package edu.upc.dsa.models.Users;

public class UserStatistics {

    private int regalosentregados;
    private int minutosjugados;
    private int partidasjugadas;

    public UserStatistics (){

    }

    public UserStatistics (int regalosentregados, int minutosjugados, int partidasjugadas){
        this.regalosentregados = regalosentregados;
        this.minutosjugados = minutosjugados;
        this.partidasjugadas = partidasjugadas;
    }

    public int getRegalosentregados() {
        return regalosentregados;
    }

    public void setRegalosentregados(int regalosentregados) {
        this.regalosentregados = regalosentregados;
    }

    public int getMinutosjugados() {
        return minutosjugados;
    }

    public void setMinutosjugados(int minutosjugados) {
        this.minutosjugados = minutosjugados;
    }

    public int getPartidasjugadas() {
        return partidasjugadas;
    }

    public void setPartidasjugadas(int partidasjugadas) {
        this.partidasjugadas = partidasjugadas;
    }
}
