package com.ensino.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ensino.entidades.Professor;

@Stateless
public class ProfessorDAO {
	
	@PersistenceContext(unitName = "ensino")
	private EntityManager manager;
	
	public Professor buscarPorId(Integer idProfessor){
		Professor professor = manager.find(Professor.class, idProfessor);
		return professor;
	}
	
	public List<Professor> buscarTodos(){
		return manager.createQuery("select u from Professor u", Professor.class).getResultList();
	}
	
	public Professor salvar(Professor par){
		manager.persist(par);
		return par;
	}
	
	public void deletar(Integer idProfessor){
		Professor professor = buscarPorId(idProfessor);
		if(professor != null){
			manager.remove(professor);
		}		
	}
	
	public Professor atualizar(Professor par){
		manager.merge(par);
		return par;
	}

}
