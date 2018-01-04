package com.ensino.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ensino.entidades.Aluno;

@Stateless
public class AlunoDAO {
	
	@PersistenceContext(unitName = "ensino")
	private EntityManager manager;
	
	public Aluno buscarPorId(Integer idAluno){
		Aluno aluno = manager.find(Aluno.class, idAluno);
		return aluno;
	}
	
	public List<Aluno> buscarTotos(){
		return manager.createQuery("select u from Aluno u",Aluno.class).getResultList();
	}
	
	public Aluno salvar(Aluno par){
		manager.persist(par);
		return par;
	}
	
	public void deletar(Integer idAluno){
		Aluno aluno = buscarPorId(idAluno);
		if (aluno != null){
			manager.remove(aluno);
		}
	}
	
	public Aluno editar(Aluno par){
		manager.merge(par);
		return par;
	}
	
	
	

}
