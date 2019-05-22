export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
      
    },
    {
      title: true,
      name: 'Produtos',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Produtos',
      url: '/produtos',
      icon: 'fa fa-tags',
    },
    {
      title: true,
      name: 'Operacional',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Usuários',
      url: '/usuarios',
      icon: 'icon-user',
    },
    {
      name: 'Ramos de atividade',
      url: '/ramos',
      icon: 'fa fa-sitemap fa-lg ',
    },
    
    
   
  ],
};
