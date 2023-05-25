import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  articles = [
    {
      id: '1',
      cardTitle: 'Novo filme do pantera negra lançado em breve',
      photoCover:
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35720ACD323F927C3A83D809D0F460BD3651740DA519BCC184B6F042057EA14D/scale?width=1200&aspectRatio=1.78&format=jpeg',
    },
    {
      id: '2',
      cardTitle: 'Nova Série anunciada no Disney +',
      photoCover:
        'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg',
    },
    {
      id: '3',
      cardTitle: 'Novo filme dos X-men está em pós produção, afirma diretor',
      photoCover:
        'https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/675x450/1_xmen-26096415.jpeg?20220722171339?20220722171339',
    },
  ];
}
