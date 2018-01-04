package com.ensino.entidades;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="status")
public class Status {
	
	
	@Id
	private Integer id;
	private Boolean logado;
	private Integer id_perfil;
	private String tipo_perfil;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Boolean getLogado() {
		return logado;
	}
	public void setLogado(Boolean logado) {
		this.logado = logado;
	}
	public Integer getId_perfil() {
		return id_perfil;
	}
	public void setId_perfil(Integer id_perfil) {
		this.id_perfil = id_perfil;
	}
	public String getTipo_perfil() {
		return tipo_perfil;
	}
	public void setTipo_perfil(String tipo_perfil) {
		this.tipo_perfil = tipo_perfil;
	}	

}
