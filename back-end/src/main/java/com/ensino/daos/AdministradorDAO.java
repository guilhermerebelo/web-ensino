package com.ensino.daos;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ensino.entidades.Administrador;

@Stateless
public class AdministradorDAO {
	
	@PersistenceContext(unitName="ensino")
	private EntityManager manager;
	
	public List<Administrador> buscarTodos(){
		return manager.createQuery("select u from Administrador u", Administrador.class).getResultList();
	}
	
	public Administrador editar(Administrador par){
		manager.merge(par);
		return par;
	}
	
	

}
