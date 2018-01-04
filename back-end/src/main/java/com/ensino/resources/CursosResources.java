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

import com.ensino.daos.CursosDAO;
import com.ensino.entidades.Curso;

@Path("/curso")
public class CursosResources {
	
	@Inject
	private CursosDAO dao;	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Curso> buscarTodoss(){
		return dao.buscarTodos();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response salvar(Curso par){
		Curso cursoSalvo = dao.salvar(par);
		return Response.ok(cursoSalvo).status(201).build();
	}
	
	@DELETE
	@Path("/{id}")
	public void apagar(@PathParam("id") Integer idCurso ){
		dao.deletar(idCurso);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Curso atualizar(Curso par){
		return dao.atualizar(par);
	}
	
	
	

}
