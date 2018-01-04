package com.ensino.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Aluno")
public class Aluno {
	
	@Id
	@Column(name="id_aluno")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String email;
	private String senha;
	private String nome;
	private String telefone;
	private String endereco;
	private String curso; 
	private Float nota1;
	private Float nota2;
	private Float nota3;
	private Float nota4;
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getCurso() {
		return curso;
	}
	public void setCurso(String curso) {
		this.curso = curso;
	}
	public Float getNota1() {
		return nota1;
	}
	public void setNota1(Float nota1) {
		this.nota1 = nota1;
	}
	public Float getNota2() {
		return nota2;
	}
	public void setNota2(Float nota2) {
		this.nota2 = nota2;
	}
	public Float getNota3() {
		return nota3;
	}
	public void setNota3(Float nota3) {
		this.nota3 = nota3;
	}
	public Float getNota4() {
		return nota4;
	}
	public void setNota4(Float nota4) {
		this.nota4 = nota4;
	} 
	
	
	
	
	
}
