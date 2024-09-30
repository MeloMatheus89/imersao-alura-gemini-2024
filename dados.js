let dados = [
        {
        nome: 'Switch Camada 2',
        aplicacao: 'Um switch não gerenciável é um dispositivo de rede plug-and-play, projetado para conectar múltiplos dispositivos em uma rede local (LAN) de forma simples e automática. Sem a necessidade de configurações complexas, ele funciona como um hub inteligente, encaminhando dados entre os dispositivos conectados com base em seus endereços MAC. Ideal para pequenas redes domésticas ou pequenas empresas que buscam uma solução fácil e rápida, os switches não gerenciáveis oferecem conectividade básica e confiável, sem a necessidade de um administrador de rede.',
        link: 'https://pt.wikipedia.org/wiki/Comutador_(redes)',
        exemplo: 'S2328G-PA',
        tags: "switch comutador camada gerenciável gerenciamento"
        },
        {
          nome: 'Access Points',
          aplicacao: 'Um access point fornece conectividade Wi-Fi, permitindo que dispositivos sem fio se conectem a uma rede cabeada. Ideal para criar redes wireless em empresas, escritórios e locais públicos.',
          link: 'https://pt.wikipedia.org/wiki/Ponto_de_acesso',
          exemplo: 'AP 1800 AX',
          tags: "wifi wi-fi 4 5 6 ap "
        },
        {
          nome: 'Switch Camada 3',
          aplicacao: 'Um switch de camada 3 realiza roteamento de pacotes com base no endereço IP, além das funções de um switch de camada 2. Ideal para redes maiores e complexas.',
          link: 'https://pt.wikipedia.org/wiki/Roteador',
          exemplo: 'S3328G-PB',
          tags: "gerenciável gerenciavel rota camada 3 bgp ospf is-is gerenciamento"

        },
        {
          nome: 'Switch Não Gerenciáveis',
          aplicacao: 'Um switch não gerenciável é um dispositivo plug-and-play que conecta dispositivos em uma rede local sem a necessidade de configurações complexas. Ideal para pequenas redes domésticas.',
          link: 'https://pt.wikipedia.org/wiki/Comutador_(redes)',
          exemplo: 'S1124G',
          tags: "comutador switch plug and play "
        },
        {
          nome: 'Roteador Residencial',
          aplicacao: 'Um roteador residencial conecta múltiplos dispositivos a uma rede e à internet, funcionando como um gateway. Geralmente oferece funcionalidades como Wi-Fi, NAT e firewall.',
          link: 'https://pt.wikipedia.org/wiki/Roteador',
          exemplo: 'Fiberhome SR1041E',
          tags: "wifi 4 5 6 protocolo ac ax "
        },
        {
          nome: 'Controladoras Wi-Fi',
          aplicacao: 'Um controlador Wi-Fi gerencia e configura múltiplos access points em uma rede wireless, oferecendo recursos como balanceamento de carga e roaming sem costura.',
          link: 'https://en.wikipedia.org/wiki/Wireless_LAN_controller',
          exemplo: 'Intelbras WC 3020',
          tags: "controller empresarial densidade ap gerenciamento"
      },
      {
        nome: 'OLT - Concentrador de linhas ópticas',
        aplicacao: 'Um equipamento capaz de gerenciar diversos equipamentos clientes de modo concentrado. Responsável por ser o cérebro de uma operação de redes ópticas FTTx. Podem operar nas tecnologias, EPON, GPON, XGPON, XGSPON e demais. Podem ser equipamentos do tipo chassi (onde possuem maior capacidade de atendimento) ou pizza box com capacidade reduzida.',
        link: 'https://pt.wikipedia.org/wiki/FTTH',
        exemplo: 'Intelbras Fiberhome AN 6000-7',
        tags: "FTTx FTTH OLT GPON EPON FIBERHOME"
    },
    {
      nome: 'ONU - Unidade de Rede Óptica',
      aplicacao: 'Equipamento terminal de rede óptica que se conecta à OLT através de uma fibra óptica. Responsável por fornecer conexão de internet aos usuários finais.',
      link: 'https://pt.wikipedia.org/wiki/ONU_(rede)',
      exemplo: 'Intelbras ONU R1',
      tags: "FTTH ONU GPON EPON"
    },
    {
      nome: 'ONT - Terminal de Rede Óptica',
      aplicacao: 'Equipamento terminal de rede óptica que se conecta à OLT através de uma fibra óptica. Responsável por fornecer conexão de internet aos usuários finais. Sinônimo de ONU em alguns contextos.',
      link: 'https://pt.wikipedia.org/wiki/ONU_(rede)',
      exemplo: 'Intelbras Fiberhome HG6145D2',
      tags: "FTTH ONT GPON EPON"
    },
    {
      nome: 'Fibra Óptica Drop',
      aplicacao: 'Cabo de fibra óptica utilizado na última milha, conectando a rede principal ao ponto de presença do cliente. Geralmente possui um número reduzido de fibras.',
      link: 'COLOCAR AQUI UM LINK VÁLIDO',
      tags: "fibra óptica drop última milha cliente"
    },
    {
      nome: 'Fibra Óptica ASU',
      aplicacao: 'Cabo óptico autossustentado com um único tubo para as fibras. Ideal para instalações mais compactas e com menor número de fibras.',
      link: 'COLOCAR AQUI UM LINK VÁLIDO',
      tags: "fibra óptica ASU autossustentado único compacto"
  },
  {
    nome: 'Fibra Óptica AS',
    aplicacao: 'Cabo óptico autossustentado, ideal para longas distâncias e ambientes externos. Possui alta resistência e pode ser instalado em diversas condições climáticas.',
    link: 'COLOCAR AQUI UM LINK VÁLIDO',
    tags: "fibra óptica AS autossustentado longa distância externo"
}


];
