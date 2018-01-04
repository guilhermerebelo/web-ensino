 //funcao que mexe a seta na home
  setInterval(function(){
  if ( $(".seta").css("padding-top") == "30px" ) {
    $(".seta").css("padding-top","0px");
  } else {
     $(".seta").css("padding-top","30px");
  }
  },1000);


  //função que escreve na home
  var typed = new Typed('#homeHeading', {
  strings: ["As melhores tecnologias",
            "Com quem entende do assunto",
            "HTML e CSS",
            "Javascript",
            "Angular",
            "Java",
            "JPA com Hibernate e MySql",           
            "e muito mais!",
            "inscreva-se!"
  ],
  typeSpeed: 60,
  backSpeed: 10,
  loop: false,        
  fadeOutDelay: 500
  });