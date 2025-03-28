package com.sesion.intermodular.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sesion.intermodular.Model.Alumno;
import com.sesion.intermodular.Repository.AlumnoRepository;

@RestController
@RequestMapping("/api")

public class AlumnoController {

    // inyectamos el repositorio
    @Autowired
    private AlumnoRepository alumnoRepository;

    @GetMapping("/")  // Sin llaves aquí
    public String prueba() {
        return("dale");
    }

    @GetMapping("/alumnos")  // Sin llaves aquí
    public List<Alumno> getAlumnos() {
        return alumnoRepository.findAll();
    }

    @GetMapping("/alumno/{nombre}") // path
    public List<Alumno> getAlumnosByName(@PathVariable String nombre){
        return alumnoRepository.findByNombre(nombre);
    
    }

    

    @PostMapping("/alumnos")
    public Alumno saveAlumno (@RequestBody Alumno alumno){
        return alumnoRepository.save(alumno);
    }


    @PutMapping("/alumno/{id}")
    public Alumno updateAlumno(@PathVariable Long id, @RequestBody Alumno alumno){
        Alumno alumnoUpDate = alumnoRepository.findById(id).get();
        alumnoUpDate.setNombre(alumno.getNombre());
        alumnoUpDate.setCiudad(alumno.getCiudad());
        alumnoUpDate.setFecha(alumno.getFecha());
        return alumnoRepository.save(alumnoUpDate);
    }

    @DeleteMapping("/alumno/{id}")
    public void deleteAlumno(@PathVariable Long id){
        alumnoRepository.deleteById(id);
    }

    
    }
    
    

    
    
    
    


