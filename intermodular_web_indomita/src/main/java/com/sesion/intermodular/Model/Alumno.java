package com.sesion.intermodular.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="alumnos")// Nombre tabla en BD
public class Alumno {

    @Id // indica que la columna con la clave primaria de la tabla de la bd es ID
    @GeneratedValue(strategy= GenerationType.IDENTITY) // Hace que el id se genere en la BD y se
    // autoincremnte.

    // nombres de las columnas de la Tabla alumnos
    private long id;
    private String nombre;
    private String ciudad;
    private String fecha;

    public Alumno() {
        // este constru POR default es que llama el jpa del AlumnoRepositorio.
        
    }

    public Alumno (long id, String nombre , String ciudad, String fecha) {
        this.id = id;
        this.nombre = nombre;
        this.ciudad = ciudad;
        this.fecha = fecha;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

 
    @Override
    public String toString() {
        return "Alumno [id=" + id + ", nombre=" + nombre + ", ciudad=" + ciudad + ", fecha=" + fecha + "]";
    }
    
    



}// cierra clase
