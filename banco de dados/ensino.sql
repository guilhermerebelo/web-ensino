-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 09-Nov-2017 às 07:01
-- Versão do servidor: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ensino`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `usuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`id`, `senha`, `usuario`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

DROP TABLE IF EXISTS `aluno`;
CREATE TABLE IF NOT EXISTS `aluno` (
  `id_aluno` int(11) NOT NULL AUTO_INCREMENT,
  `curso` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `nota1` float DEFAULT NULL,
  `nota2` float DEFAULT NULL,
  `nota3` float DEFAULT NULL,
  `nota4` float DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_aluno`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id_aluno`, `curso`, `email`, `endereco`, `nome`, `nota1`, `nota2`, `nota3`, `nota4`, `senha`, `telefone`) VALUES
(1, 'AngularJS', 'luana@gmail.com', 'rua das camélias, centro, Criciuma SC', 'Luana Marta', 8, 6, 4, 9, 'senha', '(48) 99998-8888'),
(2, 'AngularJS', 'jessica@gmail.com', 'rua 1877, bairro argemtina, Criciúma, SC', 'Jessica Martinhago', 6, 7, 4, 7, 'senha', '(48) 99999-9999'),
(3, 'Java', 'vitoria@gmail.com', 'rua das orquideias, bairro michel, Criciuma, SC', 'Vitoria Back da Silveira', 9, 8, 7, NULL, 'senha', '(48) 99999-9999'),
(4, 'HTML5 e CSS3', 'tiagomartinhago@gmail.com', 'rua 1323, bairro próspera, Criciuma, SC', 'Tiago Martinhago', 8, 6, 4, 8, 'senha', '(48) 99999-9999'),
(5, 'Banco de dados', 'larissamanoela@gmail.com', 'rua florentino perez, bairro pinheirinho, Criciuma, SC', 'Larissa Manoela', 9, 7, 8, 7, 'senha', '(48) 99995-5555'),
(6, 'JavaScript', 'albertotavio@gmail.com', 'rua marcelo augusto, bairro ana maria, Criciuma SC', 'Albert Otavio', 8, 9, 7, NULL, 'senha', '(48) 99999-8888'),
(7, 'HTML5 e CSS3', 'orlandobiel@gmail.com', 'rua larissa otavia, bairro liri, Içara, SC', 'Orlando Biel', 7, 8, 9, 5, 'senha', '(48) 99999-5555'),
(8, 'HTML5 e CSS3', 'otaviomesquita@gmail.com', 'rua fausto andrade, bairro operaria nova, Criciuma , SC', 'Otavio Mesquita', 7, 8, 5, 3, 'senha', '(48) 99999-4444'),
(9, 'AngularJS', 'faustosilva@gmail.com', 'rua otavio miller, bairro mineira velha, Criciuma, SC', 'Fausto Silva', 9, 7, 7, 5, 'senha', '(48) 77772-2222'),
(10, 'Banco de dados', 'arlindomaracana@gmail.com', 'rua do ceara, bairro Milanez, Criciuma SC', 'Arlindo Maracanã', 7, 8, 9, 8, 'senha', '(49) 88884-4466'),
(11, 'Banco de dados', 'rogerioceni@gmail.com', 'av centenario 2200, centro, Criciuma SC', 'Rogerio Ceni', 8, 9, 6, 4, 'senha', '(48) 99994-4444'),
(12, 'Java', 'rodrigoamarildo@gmail.com', 'rua luis albertinho, bairro centro, Criciuma SC', 'Rodrigo Amarildo', 7, 8, 9, NULL, 'senha', '(48) 99955-5555'),
(13, 'Banco de dados', 'angelicaviana@gmail.com', 'rua bento 16, bairro centro, Içara SC', 'Angelica Viana', 4, 6, 9, 8, 'senha', '(48) 77777-2222'),
(14, 'JavaScript', 'amandarebelo@gmail.com', 'rua s/n, bairro morro chato, Turvo SC', 'Amanda Rebelo', 3, 5, 2, 8, 'senha', '(48) 99999-4444'),
(15, 'AngularJS', 'luizpatricio@gmai.com', 'rua 1290, bairro Lagoa dos Freitas, Balneario Rincão SC', 'Luiz Patricio', 9, 8, 5, 7, 'senha', '(48) 99993-3333'),
(16, 'Java', 'arildomendes@gmail.com', 'rua albertinho Pizzeti', 'Arildo Mendes', 8, 9, 6, 8, 'senha', '(48) 99939-3939'),
(17, 'AngularJS', 'guilhermerebelo@gmail.com', 'rua 1349, Bairro Nossa Senhora da Salete, Cricium SC', 'Guilherme Rebelo', 8, 6, 4, 9, 'senha', '(51) 99939-3939'),
(18, 'JavaScript', 'giseledossantos@gmail.com', 'rua alindo sena, bairro brasilia, Criciuma SC', 'Gisele dos Santos', 8, 7, 4, NULL, 'senha', '(48) 99992-9292'),
(19, 'Java', 'mariaelietesantos@gmail.com', 'rua laguna, bairro centenario, Içara, SC', 'Maria Eliete dos Santos', 6, 7, 6, NULL, 'senha', '(48) 99939-9393'),
(20, 'HTML5 e CSS3', 'josedasilva@gmail.com', 'rua aristodelis, bairro Primeira Linha, Criciuma SC', 'Jose da Silva', 7, 8, 0, 6, 'senha', '(48) 77773-3333'),
(21, 'Banco de dados', 'saletenunes@gmail.com', 'rua primeiro de dezembro, bairro nossa senhora da selete, Criciuma SC', 'Salete Nunes', 9, 8, 7, 9, 'senha', '(48) 99992-9291'),
(22, 'JavaScript', 'joaoangelotti@gmail.com', 'rua 4 de maio, bairro ana maria, Criciuma SC', 'Joao Angelotti', 7, 5, 3, 6, 'senha', '(48) 99933-3221'),
(23, 'JavaScript', 'pedrogustavo@gmail.com', 'rua das marias, bairro Santa Luzia, Criciuma SC', 'Pedro Gustavo', 7, 5, 4, NULL, 'senha', '(48) 99937-2225'),
(24, 'HTML5 e CSS3', 'enzomarcelo@gmail.com', 'rua flores da cunha, bairro Progresso, Criciuma SC', 'Enzo Marcelo', 8, 7, 5, 8, 'senha', '(48) 99937-3737'),
(25, 'Java', 'gabrielmedina@gmail.com', 'rua 9 de outubro, bairro Operaria Nova, Criciuma SC', 'Gabriel Medina', 8, 9, 7, NULL, 'senha', '(58) 99939-3939');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

DROP TABLE IF EXISTS `curso`;
CREATE TABLE IF NOT EXISTS `curso` (
  `id_curso` int(11) NOT NULL AUTO_INCREMENT,
  `conteudo` varchar(400) DEFAULT NULL,
  `horario` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `professor` varchar(255) DEFAULT NULL,
  `vagas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`id_curso`, `conteudo`, `horario`, `nome`, `professor`, `vagas`) VALUES
(1, 'Poder estender o HTML com o AngularJS, usando diretivas, é a feature mais incrível do framework. Diretivas são poderosas ferramentas para modificar e manipular o DOM, além de ter a facilidade de reuso em toda a aplicação', 'segunda e terça, das 19h as 22h', 'AngularJS', 'Amanda Back', 40),
(2, 'Este curso é focado para quem quer aprender a linguagem Java e o paradigma de orientação a objetos nas linguagens de programação.', 'terça e quinta, das 18horas as 22 horas', 'Java', 'Tiago da Silva', 40),
(3, 'A única linguagem que o navegador consegue interpretar para a exibição de conteúdo é o HTML. Para iniciar a exploração do HTML, vamos imaginar o seguinte caso: o navegador realizou uma requisição e recebeu como corpo da resposta o seguinte conteúdo:', 'quarta e quinta, das 19 horas as 22 horas', 'HTML5 e CSS3', 'Valentina Carvalho', 40),
(4, 'Os objetivos de um sistema de banco de dados são o de isolar o usuário dos detalhes internos do banco de dados (promover a abstração de dados) e promover a independência dos dados em relação às aplicações, ou seja, tornar independente da aplicação, a estratégia de acesso e a forma de armazenamento', 'sexta das 19h as 22h, sabado das 9h as 12h', 'Banco de dados', 'Miguel dos Santos', 40),
(5, 'JavaScript é a linguagem de programação usada para adicionar interações ao seu site (por exemplo: jogos, ações que ocorrem quando botões são pressionados ou quando dados são armazenados em formulários, efeitos dinâmicos de estilo, animações e muito mais). Esse artigo vai te dar uma ideia do que é possível fazer com essa incrível linguagem de programação, e como começar a usá-la.', 'segunda e quinta feira, das 19h as 22h', 'JavaScript', 'Lucas De Bonna', 40);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professor`
--

DROP TABLE IF EXISTS `professor`;
CREATE TABLE IF NOT EXISTS `professor` (
  `id_professor` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `endereco` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_professor`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `professor`
--

INSERT INTO `professor` (`id_professor`, `email`, `endereco`, `nome`, `senha`, `telefone`) VALUES
(1, 'Miguel@gmail.com', 'rua 1349, Centro, Criciúma, Santa Catarina', 'Miguel dos Santos', 'senha', '(48) 99999-9999'),
(2, 'lucas@gmail.com', 'rua miguel alberto, centro, Criciúma SC', 'Lucas De Bonna', 'senha', '(48) 99999-9999'),
(3, 'tiago@gmail.com', 'rua dolario dos santos, centro, Criciúma, SC', 'Tiago da Silva', 'senha', '(48) 99999-9999'),
(4, 'amanda@gmail.com', 'rua antonio peruchi, bairro michel, Florianopolis, SC', 'Amanda Back', 'senha', '(48) 99999-8888'),
(5, 'valentina@gmail.com', 'rua constatino pizzetti, centro, Criciúma, SC', 'Valentina Carvalho', 'senha', '(48) 99999-9999');

-- --------------------------------------------------------

--
-- Estrutura da tabela `status`
--

DROP TABLE IF EXISTS `status`;
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL,
  `id_perfil` int(11) DEFAULT NULL,
  `logado` bit(1) DEFAULT NULL,
  `tipo_perfil` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `status`
--

INSERT INTO `status` (`id`, `id_perfil`, `logado`, `tipo_perfil`) VALUES
(1, NULL, b'0', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
