package com.ensino.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ensino.entidades.Curso;

@Stateless
public class CursosDAO {
	
	@PersistenceContext(unitName = "ensino")
	private EntityManager manager;
	
	//buscar por id - funcão a ser usada por outros metodos
	public Curso buscarPorId(Integer idCurso){
		Curso curso = manager.find(Curso.class, idCurso);
		return curso;		
	}
	
	//buscar tudo  -TESTADO
	public List<Curso> buscarTodos(){
		return manager.createQuery("select u from Curso u", Curso.class).getResultList();
	}
	
	//salvar - TESTADO OK
	public Curso salvar(Curso par){
		manager.persist(par);
		return par;
	}
	
	//deletar - TESTADO OK
	public void deletar(Integer idCurso){
		Curso curso = buscarPorId(idCurso);
		if (curso != null){
			manager.remove(curso);
		}
	}
	
	//put testar
	public Curso atualizar(Curso par){
		manager.merge(par);
		return par;
	}
}
