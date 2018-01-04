package com.ensino.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.ensino.daos.AdministradorDAO;
import com.ensino.entidades.Administrador;

@Path("/administrador")
public class AdministradorResources {
	
	@Inject
	private AdministradorDAO dao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Administrador> buscarDados(){
		return dao.buscarTodos();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Administrador editar(Administrador par){
		return dao.editar(par);
	}

}
