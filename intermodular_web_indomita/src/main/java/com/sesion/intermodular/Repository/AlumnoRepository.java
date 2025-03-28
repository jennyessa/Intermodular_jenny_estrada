package com.sesion.intermodular.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sesion.intermodular.Model.Alumno;

@Repository
public interface AlumnoRepository extends JpaRepository<Alumno, Long> {
    // ojo puede que el findByNombre deba coincidr con el parametro nombre.
    List<Alumno> findByNombre(@Param("nombre") String nombre);


}
