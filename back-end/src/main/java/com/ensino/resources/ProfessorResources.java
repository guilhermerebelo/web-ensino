package com.ensino.resources;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.ensino.daos.ProfessorDAO;
import com.ensino.entidades.Professor;

@Path("/professor")
public class ProfessorResources {
	
	@Inject
	private ProfessorDAO dao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Professor> buscarTodos(){
		return dao.buscarTodos();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Professor buscarPorId(@PathParam("id") Integer par){
		return dao.buscarPorId(par);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Professor par){
		Professor professor = dao.salvar(par);
		return Response.ok(professor).status(201).build();
	}
	
	@DELETE
	@Path("/{id}")
	public void deletar(@PathParam("id") Integer par){
		dao.deletar(par);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response editar(Professor par){
		Professor professor = dao.atualizar(par);
		return Response.ok(professor).status(201).build();
	}

}
