package com.sesion.intermodular.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="articles")// Nombre tabla en BD

public class Article {

     @Id // indica que la columna con la clave primaria de la tabla de la bd es ID
    @GeneratedValue(strategy= GenerationType.IDENTITY) // Hace que el id se genere en la BD y se
    // autoincremnte.

    // nombres de las columnas de la Tabla alumnos
    private long id;
    private String title;
    private String text;
    private String excerpt;
    private String image;
    
    
    public Article() {
    }


    public Article(long id, String title, String text, String excerpt, String image) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.excerpt = excerpt;
        this.image = image;
    }


    public long getId() {
        return id;
    }


    public void setId(long id) {
        this.id = id;
    }


    public String getTitle() {
        return title;
    }


    public void setTitle(String title) {
        this.title = title;
    }


    public String getText() {
        return text;
    }


    public void setText(String text) {
        this.text = text;
    }


    public String getExcerpt() {
        return excerpt;
    }


    public void setExcerpt(String excerpt) {
        this.excerpt = excerpt;
    }


    public String getImage() {
        return image;
    }


    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public String toString() {
        return "Article [id=" + id + ", title=" + title + ", text=" + text + ", excerpt=" + excerpt + ", image=" + image
                + "]";
    }


    
    

    





}
