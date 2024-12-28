import { ana, carlos, joao, maria } from '@/assets';
import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineLock,
  AiOutlineWhatsApp, // Importando ícone do WhatsApp
} from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { SlSocialLinkedin } from 'react-icons/sl';

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  whatsapp = <AiOutlineWhatsApp />, // Ícone do WhatsApp
  linkedin = <SlSocialLinkedin />;

export const navLinks = [
  { name: 'Diferenciais', url: '#resources' },
  { name: 'Programa de pontos', url: '#rewards' },
  { name: 'Depoimentos', url: '#testimonials' },
];

export const header = {
  title: 'Seja Digital Seja Foccus',
  subtitle:
    'Somos mais que uma empresa, somos a engenharia por trás de soluções digitais exclusivas e transformadoras. Cada detalhe que criamos reflete o compromisso com a inovação e a perfeição. Descubra o que nos torna únicos.',
  caption: 'RECONHECIDA POR QUEM BUSCA EXCELÊNCIA',
};

export const experience = [
  {
    title: '2Mil',
    subtitle:
      'Usuários satisfeitos que confiam na Foccus.',
    color: 'blue',
  },
  {
    title: '3 +',
    subtitle:
      'Anos de experiência oferecendo serviços de engenharia.',
    color: 'orange',
  },
];

export const resources = {
  title: 'Nossos Diferenciais',
  subtitle:
    'Na Foccus, oferecemos soluções digitais inovadoras e um atendimento personalizado, sempre focados em atender suas necessidades e gerar resultados eficientes no seu negócio.',
  list: [
    {
      icon: locker,
      title: 'Segurança de ponta a ponta',
      subtitle:
        'Conte com a mais avançada tecnologia de segurança para total segurança dos seus dados.',
    },
    {
      icon: computer,
      title: 'Experiência de usuário inovadora',
      subtitle:
        'Estamos sempre empenhados em tornar a interação com nossos serviços o mais fácil e agradável possível.',
    },
    {
      icon: heart,
      title: 'Atendimento excepcional',
      subtitle:
        'Nossa equipe está pronta para ajudá-lo a solucionar qualquer dúvida ou problema.',
    },
  ],
};

export const rewards = {
  title: 'Foccus Rewards - O Programa de Pontos Foccus',
  list: [
    {
      title: 'Acumule pontos e ganhe descontos incríveis!',
      subtitle:
        'Com o Foccus Rewards você acumula pontos, podendo trocá-los por descontos exclusivos em todos os setores da nossa loja.',
    },
    {
      title: 'Como funciona',
      subtitle:
        'Os pontos acumulados são convertidos em descontos. Além disso, quanto mais você usar os serviços da Foccus, mais pontos acumula. É simples assim!',
    },
  ],
};

export const testimonials = {
  title: 'O que nossos clientes estão dizendo',
  list: [
    {
      avatar: ana,
      name: 'Ian José',
      role: 'Nutricionista',
      comment:
        'Meu computador vivia lento e cheio de problemas. Depois de contratar o serviço de manutenção preventiva da Foccus, parece que estou usando um equipamento novo! Trabalho com mais eficiência e nunca mais tive problemas.',
    },
    {
      avatar: joao,
      name: 'Sara Oliveira',
      role: 'Médica Veterinária', 
      comment:
        'A Foccus transformou minha clínica veterinária! Eles criaram um site profissional, onde meus clientes agora conseguem agendar consultas e obter informações sobre nossos serviços de forma prática e rápida. A visibilidade online aumentou e meu fluxo de clientes cresceu significativamente.',
    },
    {
      avatar: maria,
      name: 'Eduarda Teles',
      role: 'Estudante de Odontologia',
      comment:
        'Precisava de um site profissional para o meu portfólio e a equipe da Foccus me entregou exatamente o que eu precisava. Além disso, as dicas sobre marketing digital ajudaram muito no meu crescimento nas redes sociais.',
    },
    {
      avatar: carlos,
      name: 'João Pedro',
      role: 'Engenheiro Elétrico - Onnes',
      comment:
        'Contratei a Foccus para tráfego pago e o retorno foi surpreendente. Meu negócio nunca teve tanta visibilidade online! Eles são profissionais, atentos e entregam resultados reais.',
    },
  ],
};

export const footer = {
  description: 'Transformando vidas com tecnologia e inovação.',
  links: [
    { name: 'Perguntas frequentes', url: '#' },
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'Trabalhe Conosco', url: '#' },
    { name: 'Fale Conosco', url: '#' },
  ],
  contact: [
    'gabrimarquesniq@gmail.com',
    '(62)9 9669-1908',
    'Anápolis - Goiás',
  ],
  copy: 'Copyright © 2021 Foccus. Todos os direitos reservados.',
  social: [
    { component: instagram, url: 'https://www.instagram.com/foccusgo/' }, // Link do Instagram
    { component: whatsapp, url: 'https://wa.me/5562996691908' }, // Link para WhatsApp
    { component: linkedin, url: '#' },
  ],
};
