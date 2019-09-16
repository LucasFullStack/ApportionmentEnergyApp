import { Component, OnInit } from '@angular/core';
import { Apportionment } from 'src/app/core/models/apportionment/apportionment';

@Component({
  selector: 'app-apportionment',
  templateUrl: './apportionment.page.html',
  styleUrls: ['./apportionment.page.scss'],
})
export class ApportionmentPage {
  apportionments: Apportionment[];

  constructor() { }

  ionViewWillEnter() {
    this.getApportionments();
  }

   getApportionments(){
     this.apportionments =
     [
      {
        "idApportionment": 1, 
        "apportionment": "blablabla", 
        "avatar": "./../../../../assets/images/americanas.png", 
        "name": "Americanas", 
        "category": "Produtos Diversos", 
        "address": "Loja 1",
        "value": 574.03
      },
      {
        "idApportionment": 2, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/bicycle.jpg", 
        "name": "Bicycle", 
        "category": "Esportes", 
        "address": "Loja 2",
        "value": 145.76
      },
      {
        "idApportionment": 3, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/c&a.png", 
        "name": "C&A", 
        "category": "Roupas e acessórios", 
        "address": "Loja 3",
        "value": 567.22
      },
      {
        "idApportionment": 4, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/cinemark.png", 
        "name": "Cinemark", 
        "category": "Cinema", 
        "address": "Loja 4",
        "value": 987.22
      },
      {
        "idApportionment": 5, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/claro.jpg", 
        "name": "Claro", 
        "category": "Telefone", 
        "address": "Loja 5",
        "value": 234.22
      },
      {
        "idApportionment": 6, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/havan.jpg", 
        "name": "Havan", 
        "category": "Divesos", 
        "address": "Loja 7",
        "value": 321.88
      },
      {
        "idApportionment": 7, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/finorella.jpg", 
        "name": "Finorella", 
        "category": "Divesos", 
        "address": "Loja 7",
        "value": 123.33
      },
      {
        "idApportionment": 8, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/marabraz.png", 
        "name": "Marabraz", 
        "category": "Móveis", 
        "address": "Loja 8",
        "value": 654.23
      },
      {
        "idApportionment": 9, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/marisa.png", 
        "name": "Marisa", 
        "category": "Roupas e acessórios", 
        "address": "Loja 9",
        "value": 654.23
      },
      {
        "idApportionment": 10, 
        "apportionment": "blablabla", 
        "avatar":"./../../../../assets/images/renner.png", 
        "name": "Renner", 
        "category": "Roupas e acessórios", 
        "address": "Loja 9",
        "value": 143.32
      }
     ]
  }

}
