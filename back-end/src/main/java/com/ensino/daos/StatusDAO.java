package com.ensino.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ensino.entidades.Status;

@Stateless
public class StatusDAO {
	
	@PersistenceContext(unitName = "ensino")
	private EntityManager manager;
	
	public List<Status> buscaTodos(){
		return manager.createQuery("select u from Status u", Status.class).getResultList();
	}
	
	public Status editar(Status par){
		manager.merge(par);
		return par;
	}
	
	public Status buscarId(Integer par){
		Status status = manager.find(Status.class, par);
		return status;
	}

}
