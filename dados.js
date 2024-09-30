let dados = [
        //Equipamentos de Redes Empresariais (Linha Enterprise e SMB)
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
          tags: "wifi 4 5 6 protocolo ac ax  roteador roteadores "
        },
        {
          nome: 'Controladoras Wi-Fi',
          aplicacao: 'Um controlador Wi-Fi gerencia e configura múltiplos access points em uma rede wireless, oferecendo recursos como balanceamento de carga e roaming sem costura.',
          link: 'https://en.wikipedia.org/wiki/Wireless_LAN_controller',
          exemplo: 'Intelbras WC 3020',
          tags: "controller empresarial densidade ap gerenciamento"
      },

      //Principais ativos de redes ópticas
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
    // Passivos de Fibra óptica
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
    exemplo: 'COLOCAR UM EXEMPLO',
    link: 'COLOCAR AQUI UM LINK VÁLIDO',
    tags: "fibra óptica AS autossustentado longa distância externo"
},
{
  nome: 'Caixa de Terminação Óptica (CTO)',
  aplicacao: 'Equipamento utilizado para concentrar e distribuir sinais de fibra óptica, geralmente instalado em um poste ou em uma parede externa.',
  link: 'COLOCAR AQUI UM LINK VÁLIDO', // Adapte com um link mais específico
  exemplo: 'CTO para 16 Conexões',
  tags: "cto fibra óptica distribuição rede"
}, 
//Partes de uma OLT
{
  nome: 'Placa de Atendimento GPON',
  aplicacao: 'Responsável por fornecer os serviços GPON aos assinantes, como internet e telefonia. É instalada em um chassi OLT.',
  exemplo: '',
  link: 'COLOCAR AQUI UM LINK VÁLIDO',
  tags: 'GPON OLT assinante serviço'
},
{
  nome: 'Placa de Gerência OLT',
  aplicacao: 'Utilizada para administrar e configurar a OLT, permitindo a criação de usuários, configuração de VLANs e monitoramento da rede.',
  exemplo: '',
  link: 'COLOCAR AQUI UM LINK VÁLIDO',
  tags: 'OLT gerenciamento configuração monitoramento'
},
{
  nome: 'Chassi OLT',
  aplicacao: 'Estrutura física que abriga as placas de atendimento e gerência, além de outros componentes como fontes de alimentação e ventiladores.',
  exemplo: '',
  link: 'COLOCAR AQUI UM LINK VÁLIDO',
  tags: 'OLT hardware estrutura'
},
{
  nome: 'Módulo Mini GBIC GPON',
  aplicacao: 'Converte sinais elétricos em sinais ópticos e vice-versa, permitindo a conexão da OLT à rede externa.',
  link: 'COLOCAR AQUI UM LINK VÁLIDO',
  tags: 'GPON conversão OLT rede externa'
},
//Tecnologias
{
  nome: 'Protocolos de Roteamento',
  aplicacao: 'Conjunto de regras que determinam como os pacotes de dados são encaminhados entre redes, garantindo a comunicação eficiente.',
  link: 'https://pt.wikipedia.org/wiki/Protocolo_de_roteamento',
  exemplo: 'OSPF, BGP, RIP',
  tags: "roteamento rede ip ospf bgp rip"
},
{
  nome: 'Load Balance',
  aplicacao: 'Técnica que distribui a carga de trabalho entre múltiplos servidores, melhorando a performance e a disponibilidade dos serviços.',
  link: 'https://pt.wikipedia.org/wiki/Balanceamento_de_carga',
  exemplo: 'R3005G',
  tags: "load balance servidor desempenho disponibilidade"
},
{
  nome: 'PoE (Power Over Ethernet)',
  aplicacao: 'Tecnologia que permite a transmissão de dados e energia elétrica através de um único cabo Ethernet, eliminando a necessidade de tomadas elétricas adicionais para dispositivos de rede.',
  link: 'https://pt.wikipedia.org/wiki/Power_over_Ethernet',
  exemplo: 'Switch PoE Gigabit',
  tags: "poe ethernet energia rede alimentacao alimentação switch"
},
//tecnologias de módulos de fibra óptica
{
  nome: 'QSFP',
  aplicacao: 'Módulo de maior densidade, capaz de acomodar múltiplos canais de comunicação. Comumente utilizado em redes 40G e 100G.',
  link: 'https://pt.wikipedia.org/wiki/QSFP',
  exemplo: 'QSFP28 100GBASE-SR4',
  tags: "QSFP alta densidade 40Gb 100Gb rede"
},
sfp28 = {
  nome: 'SFP28',
  aplicacao: 'Módulo de alta densidade e baixo consumo de energia, utilizado em redes de alta velocidade, como 25G e 50G.',
  link: '',
  exemplo: 'SFP28 25GBASE-SR',
  tags: "SFP28 alta velocidade 25Gb 50Gb rede"
},
{
  nome: 'SFP+',
  aplicacao: 'Versão de alta velocidade do SFP, oferecendo taxas de dados superiores. Comumente utilizado em redes 1 Gigabit e 10 Gigabit.',
  link: 'https://pt.wikipedia.org/wiki/SFP+',
  exemplo: 'SFP+ 10GBASE-SR',
  tags: "SFP+ alta velocidade 10Gb rede"
},
{
  nome: 'SFP',
  aplicacao: 'Módulo de pequeno formato utilizado para conectar equipamentos de rede a diferentes tipos de mídia, como fibra óptica e cobre.',
  link: 'https://pt.wikipedia.org/wiki/SFP',
  exemplo: 'SFP 100Base-FX',
  tags: "SFP fibra óptica cobre rede"
},
// Cabos DAC
{
  nome: 'Cabo DAC',
  aplicacao: 'Cabo de cobre de alta velocidade utilizado para conectar diretamente equipamentos de rede com interfaces SFP, SFP+, QSFP e outras, eliminando a necessidade de módulos ópticos.',
  link: '',
  exemplo: 'Cabo DAC SFP+ 10G 1m',
  tags: "DAC cobre alta velocidade SFP SFP+ QSFP rede"
},


];
