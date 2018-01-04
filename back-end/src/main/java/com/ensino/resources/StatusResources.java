package com.ensino.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.ensino.daos.StatusDAO;
import com.ensino.entidades.Status;

@Path("/status")
public class StatusResources {
	
	@Inject
	private StatusDAO dao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Status> buscarTodos(){
		return dao.buscaTodos();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Status buscarPorId(@PathParam("id") Integer par){
		return dao.buscarId(par);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Status editar(Status par){
		return dao.editar(par);
	}

}
