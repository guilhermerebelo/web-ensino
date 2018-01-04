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

import com.ensino.daos.AlunoDAO;
import com.ensino.entidades.Aluno;

@Path("/aluno")
public class AlunoResources {
	
	@Inject
	private AlunoDAO dao;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Aluno> buscarTudo(){
		return dao.buscarTotos();
	}
	
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Aluno buscarPorId(@PathParam("id") Integer par){
		return dao.buscarPorId(par);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response postar(Aluno par){
		Aluno aluno = dao.salvar(par);
		return Response.ok(aluno).status(201).build();
	}
	
	@DELETE
	@Path("/{id}")
	public void deletar(@PathParam("id") Integer id){
		dao.deletar(id);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Aluno atualizar(Aluno par){
		return dao.editar(par);
	}

}
